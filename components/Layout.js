import Link from "next/link";

export default function Layout({ children }) {
	let thisYear = new Date().getFullYear();
	return (
		<div className="layout">
			<nav>
				<Link href="/">
					<a>
						<p>start</p>
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
			</nav>

			<div className="page-content">{children}</div>

			<footer>
				<p>Copyright {thisYear} Moa Hamner</p>
			</footer>
		</div>
	);
}
