import Link from "next/link";

export default function Layout({ children }) {
	return (
		<div className="layout">
			<nav>
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
				<Link href="/aframe">
					<a>
						<p>aframe</p>
					</a>
				</Link>
			</nav>

			<div className="page-content">{children}</div>

			<footer>
				<p>Copyright 2021 Moa Hamner</p>
			</footer>
		</div>
	);
}
