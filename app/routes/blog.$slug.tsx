import { Link } from "react-router";
import type { Route } from "./+types/blog.$slug";
import { getPost } from "../blog/posts";

const dateFormatter = new Intl.DateTimeFormat("en-GB", { dateStyle: "long" });

export function loader({ params }: Route.LoaderArgs) {
	const slug = params.slug;
	if (!slug) {
		throw new Response("Post not found", { status: 404 });
	}

	const post = getPost(slug);
	if (!post) {
		throw new Response("Post not found", { status: 404 });
	}

	return { post };
}

export default function BlogPost({ loaderData }: Route.ComponentProps) {
	const { post } = loaderData;

	return (
		<main className="terminal-screen">
			<section className="terminal-window" aria-label="Blog post terminal">
				<header className="terminal-titlebar">
					<div className="terminal-controls" aria-hidden="true">
						<span className="control control-close" />
						<span className="control control-minimize" />
						<span className="control control-maximize" />
					</div>
					<p className="terminal-title">paul@autotrader — blog.sh</p>
				</header>
				<div className="terminal-body">
					<div className="terminal-block">
						<p className="terminal-input">
							<span className="terminal-user">paul</span>
							<span className="terminal-path">~/blog</span>
							<span className="terminal-symbol">$</span>
							<span className="terminal-command">cat blog/{post.slug}.md</span>
						</p>
						<article className="terminal-article">
							<h1 className="terminal-article-title">{post.title}</h1>
							<p className="terminal-article-meta">{dateFormatter.format(new Date(post.date))}</p>
							{renderMarkdown(post.content)}
						</article>
					</div>
					<div className="terminal-block">
						<p className="terminal-input">
							<span className="terminal-user">paul</span>
							<span className="terminal-path">~/blog</span>
							<span className="terminal-symbol">$</span>
							<span className="terminal-command">cd ..</span>
						</p>
						<p className="terminal-output">
							<Link to="/" className="terminal-link">
								Return to profile
							</Link>
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}

function renderMarkdown(markdown: string) {
	const blocks = markdown
		.split(/\n{2,}/)
		.map((block) => block.trim())
		.filter(Boolean);

	return blocks.map((block, index) => {
		const lines = block.split("\n");
		const isOrdered = lines.every((line) => /^\d+\.\s+/.test(line.trim()));
		const isBullet = lines.every((line) => /^[-*]\s+/.test(line.trim()));

		if (isOrdered) {
			return (
				<ol key={`block-${index}`} className="terminal-article-list">
					{lines.map((line, itemIndex) => (
						<li key={`ordered-${index}-${itemIndex}`}>
							{renderInline(line.replace(/^\d+\.\s+/, ""), `ordered-${index}-${itemIndex}`)}
						</li>
					))}
				</ol>
			);
		}

		if (isBullet) {
			return (
				<ul key={`block-${index}`} className="terminal-article-list">
					{lines.map((line, itemIndex) => (
						<li key={`bullet-${index}-${itemIndex}`}>
							{renderInline(line.replace(/^[-*]\s+/, ""), `bullet-${index}-${itemIndex}`)}
						</li>
					))}
				</ul>
			);
		}

		return (
			<p key={`block-${index}`}>
				{renderInline(block.replace(/\n/g, " "), `paragraph-${index}`)}
			</p>
		);
	});
}

function renderInline(text: string, keyPrefix: string) {
	const segments = text.split(/(\*[^*]+\*)/g);
	return segments.map((segment, index) => {
		if (segment.startsWith("*") && segment.endsWith("*") && segment.length > 2) {
			return (
				<em key={`${keyPrefix}-em-${index}`}>
					{segment.slice(1, -1)}
				</em>
			);
		}

		return segment;
	});
}
