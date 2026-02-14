type FrontMatter = Record<string, string>;

export type Experience = {
	slug: string;
	role: string;
	company: string;
	period: string;
	summary: string;
	content: string;
};

const experienceFiles = import.meta.glob("./posts/*.md", { eager: true, as: "raw" });

export function getExperience(): Experience[] {
	return Object.entries(experienceFiles)
		.map(([path, fileContents]) => {
			const slugMatch = path.match(/posts\/(.+)\.md$/);
			if (!slugMatch) {
				throw new Error(`Unable to derive experience slug for file: ${path}`);
			}

			const { data, content } = parseFrontMatter(String(fileContents));

			if (!data.role || !data.company || !data.period || !data.summary) {
				throw new Error(`Experience ${path} missing required front matter`);
			}

			return {
				slug: slugMatch[1],
				role: data.role,
				company: data.company,
				period: data.period,
				summary: data.summary,
				content,
			};
		})
		.sort((a, b) => (a.period > b.period ? -1 : 1));
}

function parseFrontMatter(raw: string): { data: FrontMatter; content: string } {
	const match = raw.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);
	if (!match) {
		throw new Error("Markdown file is missing front matter block");
	}

	const [, frontMatter, body] = match;
	const data: FrontMatter = {};

	for (const line of frontMatter.split("\n")) {
		const [key, ...rest] = line.split(":");
		if (!key || rest.length === 0) continue;
		data[key.trim()] = rest.join(":").trim();
	}

	return { data, content: body.trim() };
}
