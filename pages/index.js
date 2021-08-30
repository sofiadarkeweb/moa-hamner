import Head from "next/head";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Head>
				<title> Moa Hamner | Sound Design</title>
				<meta name="keywords" content="Moa Hamner - sound design" />
			</Head>
			<div className="landing-page">
				<h1 className="hero-text">Moa</h1>
				<h2>Sound designer</h2>
				<div className="background-image">
					<Image
						src="/bakgrund_color.png"
						alt="hej"
						width={1300}
						height={900}
						// layout="fill"
					/>
				</div>
			</div>
		</>
	);
}
