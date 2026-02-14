type FrontMatter = Record<string, string>;

const listFiles = import.meta.glob("./*.md", { eager: true, as: "raw" });

export function getFocusAreas() {
	return loadList("focus");
}

export function getPrinciples() {
	return loadList("principles");
}

function loadList(slug: string) {
	const key = `./${slug}.md`;
	const file = listFiles[key];

	if (!file) {
		throw new Error(`Unable to find content file for ${slug}`);
	}

	const { content } = parseFrontMatter(String(file));

	return content
		.split(/\r?\n/)
		.map((line) => line.trim())
		.filter(Boolean)
		.map((line) => line.replace(/^[-*]\s+/, ""))
		.filter(Boolean);
}

function parseFrontMatter(raw: string): { data: FrontMatter; content: string } {
	const match = raw.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);
	if (!match) {
		return { data: {}, content: raw.trim() };
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
