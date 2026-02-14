import type { Route } from "./+types/home";

const focusAreas = [
	{
		title: "Lead with clarity",
		detail:
			"Translate company strategy into pragmatic roadmaps so teams always understand the why behind the work.",
	},
	{
		title: "Invest in people",
		detail:
			"Grow confident engineering managers and create feedback loops that keep morale and performance high.",
	},
	{
		title: "Ship deliberately",
		detail:
			"Bias for delivery without sacrificing quality through lightweight governance and observable platforms.",
	},
];

const principles = [
	"Default to transparency—context beats control.",
	"Design teams around customer outcomes, not tech stacks.",
	"Use metrics as conversation starters, never blunt instruments.",
	"Calm beats clever: predictable delivery creates space for innovation.",
];

const contactLinks = [
	{ label: "Email", href: "mailto:hello@paulnunnerley.com" },
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/paulnunnerley",
	},
];

const stats = [
	{ label: "Engineering orgs scaled", value: "6" },
	{ label: "Products shipped", value: "40+" },
	{ label: "Teams coached", value: "120+" },
];

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Paul Nunnerley — Engineering Leader" },
		{
			name: "description",
			content:
				"Paul Nunnerley is a UK-based engineering leader at Auto Trader, partnering with software teams to ship confident, human tech.",
		},
	];
}

export default function Home() {
	return (
		<main className="relative min-h-screen overflow-hidden px-6 py-20 lg:px-12">
			<div className="hero-grid" aria-hidden="true" />
			<div className="hero-glow" aria-hidden="true" />
			<section className="relative z-10 mx-auto grid w-full max-w-6xl gap-14">
				<header className="grid gap-10 lg:grid-cols-[2fr,1fr]">
					<div className="space-y-6">
						<p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70">
							<span className="h-2 w-2 animate-pulse rounded-full bg-lime-300" aria-hidden="true" />
							Currently leading engineering at Auto Trader UK
						</p>
						<h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
							Paul Nunnerley
						</h1>
						<p className="max-w-2xl text-lg text-white/80 sm:text-xl">
							Engineering leader based in the UK helping software teams build trusted marketplace experiences.
						</p>
						<p className="max-w-2xl text-base text-white/70">
							I bring calm momentum to complex platforms—pairing strategic framing with coaching so teams can scale without burning out.
						</p>
						<div className="flex flex-wrap gap-4">
							<a
								href="mailto:hello@paulnunnerley.com"
								className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-gray-900 transition hover:bg-lime-200"
							>
								Start a conversation
							</a>
							<a
								href="https://www.linkedin.com/in/paulnunnerley"
								target="_blank"
								rel="noreferrer"
								className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white"
							>
								Connect on LinkedIn
							</a>
						</div>
					</div>
					<div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/80 shadow-2xl shadow-black/20">
						<div>
							<p className="text-white/60">Location</p>
							<p className="text-lg font-semibold text-white">United Kingdom</p>
						</div>
						<div>
							<p className="text-white/60">Focus</p>
							<p className="text-lg font-semibold text-white">Scaling resilient product teams</p>
						</div>
						<ul className="grid gap-3">
							{contactLinks.map((link) => {
								const external = link.href.startsWith("http");
								return (
									<li key={link.label}>
										<a
											href={link.href}
											target={external ? "_blank" : undefined}
											rel={external ? "noreferrer" : undefined}
											className="inline-flex w-full items-center justify-between rounded-2xl border border-white/10 px-4 py-2 text-white transition hover:border-white"
										>
											<span>{link.label}</span>
											<span aria-hidden="true">↗</span>
										</a>
									</li>
								);
							})}
						</ul>
					</div>
				</header>

				<section className="grid gap-6 rounded-3xl border border-white/5 bg-white/5 p-10 text-white/90 shadow-2xl shadow-black/30 md:grid-cols-3">
					{stats.map((stat) => (
						<div key={stat.label} className="space-y-2">
							<p className="text-4xl font-semibold text-white">{stat.value}</p>
							<p className="text-sm uppercase tracking-[0.18em] text-white/60">{stat.label}</p>
						</div>
					))}
				</section>

				<section className="grid gap-8 lg:grid-cols-[1.5fr,1fr]">
					<div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0 p-10 shadow-2xl shadow-black/20">
						<div className="flex items-center gap-3 text-white/70">
							<span className="text-sm font-semibold uppercase tracking-[0.3em]">Current Work</span>
							<div className="h-px flex-1 bg-white/20" aria-hidden="true" />
						</div>
						<h2 className="mt-6 text-3xl font-semibold text-white">Auto Trader UK</h2>
						<p className="text-sm text-white/60">2021 — Present · Director of Engineering</p>
						<ul className="mt-6 space-y-4 text-base text-white/80">
							<li>Partnering with product and data leadership to grow multimillion-visitor marketplace capabilities.</li>
							<li>Leading platform teams that enable continuous delivery, observability, and resilience across the estate.</li>
							<li>Mentoring engineering managers and shaping a coaching culture rooted in psychological safety.</li>
						</ul>
					</div>
					<div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/30">
						<h3 className="text-2xl font-semibold text-white">Focus Areas</h3>
						<ul className="mt-6 space-y-5">
							{focusAreas.map((area) => (
								<li key={area.title}>
									<p className="text-sm uppercase tracking-[0.3em] text-lime-200/80">{area.title}</p>
									<p className="text-white/80">{area.detail}</p>
								</li>
							))}
						</ul>
					</div>
				</section>

				<section className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/20">
					<h3 className="text-2xl font-semibold text-white">Leadership Principles</h3>
					<ul className="mt-6 grid gap-6 md:grid-cols-2">
						{principles.map((principle) => (
							<li
								key={principle}
								className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80"
							>
								{principle}
							</li>
						))}
					</ul>
				</section>
			</section>
		</main>
	);
}
