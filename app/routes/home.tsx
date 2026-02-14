import type { Route } from "./+types/home";

const focusAreas = [
	"Clarify strategy so teams always know the customer outcome they serve.",
	"Grow managers through coaching, feedback, and psychological safety.",
	"Ship reliably with strong engineering practices and useful metrics.",
];

const principles = [
	"Default to transparency—context beats control.",
	"Design teams around customer missions, not tech stacks.",
	"Metrics should prompt conversations, never punishment.",
	"Calm beats clever; predictable delivery unlocks innovation.",
];

const contactLinks = [
	{ label: "Email", href: "mailto:hello@paulnunnerley.com" },
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/paulnunnerley",
	},
];

const commands = [
	{
		command: "whoami",
		output: (
			<>
				<p>Paul Nunnerley — Engineering leader based in the United Kingdom.</p>
				<p>Currently partnering with software teams at Auto Trader UK.</p>
			</>
		),
	},
	{
		command: "uptime",
		output: (
			<p>15+ years supporting product engineers, platforms, and marketplace growth.</p>
		),
	},
	{
		command: "cat focus.txt",
		output: (
			<ul className="terminal-list">
				{focusAreas.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		),
	},
	{
		command: "cat principles.txt",
		output: (
			<ul className="terminal-list">
				{principles.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		),
	},
	{
		command: "open links",
		output: (
			<ul className="terminal-links">
				{contactLinks.map((link) => {
					const external = link.href.startsWith("http");
					return (
						<li key={link.label}>
							<a
								href={link.href}
								target={external ? "_blank" : undefined}
								rel={external ? "noreferrer" : undefined}
							>
								{link.label}
								<span aria-hidden="true"> ↗</span>
							</a>
						</li>
					);
				})}
			</ul>
		),
	},
];

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Paul Nunnerley — Terminal" },
		{
			name: "description",
			content:
				"Terminal-style profile for Paul Nunnerley, an engineering leader at Auto Trader UK.",
		},
	];
}

export default function Home() {
	return (
		<main className="terminal-screen">
			<section className="terminal-window" aria-label="Terminal user interface">
				<header className="terminal-titlebar">
					<div className="terminal-controls" aria-hidden="true">
						<span className="control control-close" />
						<span className="control control-minimize" />
						<span className="control control-maximize" />
					</div>
					<p className="terminal-title">paul@autotrader — portfolio.sh</p>
				</header>
				<div className="terminal-body">
					{commands.map(({ command, output }) => (
						<div key={command} className="terminal-block">
							<p className="terminal-input">
								<span className="terminal-user">paul</span>
								<span className="terminal-path">~</span>
								<span className="terminal-symbol">$</span>
								<span className="terminal-command">{command}</span>
							</p>
							<div className="terminal-output">{output}</div>
						</div>
					))}
					<p className="terminal-input" aria-live="polite">
						<span className="terminal-user">paul</span>
						<span className="terminal-path">~</span>
						<span className="terminal-symbol">$</span>
						<span className="terminal-cursor" />
					</p>
				</div>
			</section>
		</main>
	);
}
