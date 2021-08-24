import Link from "next/link";

export default function Layout({ children }) {
	return (
		<div className="layout">
			<header>
				<Link href="/">
					<a>
						<p>home</p>
					</a>
				</Link>
				<Link href="/about">
					<a>
						<p>about</p>
					</a>
				</Link>
				<Link href="/projects">
					<a>
						<p>projects</p>
					</a>
				</Link>
			</header>

			<div className="page-content">{children}</div>

			<footer>
				<p>Copyright 2021 Moa Hamner</p>
			</footer>
		</div>
	);
}
