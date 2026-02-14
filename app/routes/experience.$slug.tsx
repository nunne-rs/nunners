import { Link } from "react-router";
import type { Route } from "./+types/experience.$slug";
import { getExperience } from "../experience/posts";

export function loader({ params }: Route.LoaderArgs) {
	const slug = params.slug;
	if (!slug) {
		throw new Response("Experience not found", { status: 404 });
	}

	const record = getExperience().find((item) => item.slug === slug);
	if (!record) {
		throw new Response("Experience not found", { status: 404 });
	}

	return { record };
}

export default function ExperiencePost({ loaderData }: Route.ComponentProps) {
	const { record } = loaderData;

	return (
		<main className="terminal-screen">
			<section className="terminal-window" aria-label="Experience terminal">
				<header className="terminal-titlebar">
					<div className="terminal-controls" aria-hidden="true">
						<span className="control control-close" />
						<span className="control control-minimize" />
						<span className="control control-maximize" />
					</div>
					<p className="terminal-title">paul@autotrader — experience.sh</p>
				</header>
				<div className="terminal-body">
					<div className="terminal-block">
						<p className="terminal-input">
							<span className="terminal-user">paul</span>
							<span className="terminal-path">~/experience</span>
							<span className="terminal-symbol">$</span>
							<span className="terminal-command">cat experience/{record.slug}.md</span>
						</p>
						<article className="terminal-article">
							<h1 className="terminal-article-title">{record.company}</h1>
							<p className="terminal-article-meta">
								{record.role} · {record.period}
							</p>
							{renderMarkdown(record.content)}
						</article>
					</div>
					<div className="terminal-block">
						<p className="terminal-input">
							<span className="terminal-user">paul</span>
							<span className="terminal-path">~/experience</span>
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
		const isBullet = lines.every((line) => /^[-*]\s+/.test(line.trim()));

		if (isBullet) {
			return (
				<ul key={`block-${index}`} className="terminal-article-list">
					{lines.map((line, itemIndex) => (
						<li key={`bullet-${index}-${itemIndex}`}>
							{line.replace(/^[-*]\s+/, "")}
						</li>
					))}
				</ul>
			);
		}

		return (
			<p key={`block-${index}`}>{block.replace(/\n/g, " ")}</p>
		);
	});
}
