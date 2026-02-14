type FrontMatter = Record<string, string>;

export type BlogPost = {
	slug: string;
	title: string;
	date: string;
	summary: string;
	content: string;
};

const postFiles = import.meta.glob("./posts/*.md", { eager: true, as: "raw" });

export function getPosts(): BlogPost[] {
	return Object.entries(postFiles)
		.map(([path, fileContents]) => {
			const slugMatch = path.match(/posts\/(.+)\.md$/);
			if (!slugMatch) {
				throw new Error(`Unable to derive slug for blog file: ${path}`);
			}

			const { data, content } = parseFrontMatter(String(fileContents));

			if (!data.title || !data.date || !data.summary) {
				throw new Error(`Blog post ${path} is missing required front matter`);
			}

			return {
				slug: slugMatch[1],
				title: data.title,
				date: data.date,
				summary: data.summary,
				content,
			};
		})
		.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPost(slug: string): BlogPost | null {
	return getPosts().find((post) => post.slug === slug) ?? null;
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
