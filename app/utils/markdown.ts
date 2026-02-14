import { marked } from "marked";

marked.setOptions({
	gfm: true,
	breaks: true,
	headerIds: false,
	headerPrefix: "",
	mangle: false,
});

export function renderMarkdown(content: string): string {
	return marked.parse(content.trim());
}
