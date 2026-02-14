import { Link } from "react-router";
import type { Route } from "./+types/blog.$slug";
import { getPost } from "../blog/posts";
import { renderMarkdown } from "../utils/markdown";

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
	const html = renderMarkdown(post.content);

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
							<div
								className="terminal-article-content"
								dangerouslySetInnerHTML={{ __html: html }}
							/>
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
