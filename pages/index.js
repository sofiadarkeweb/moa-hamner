import Head from "next/head";
import Link from "next/link";
import Aframe from "../components/Aframecomp";

export default function Home() {
	return (
		<>
			<Head>
				<title> Moa Hamner | Sound Design</title>
				<meta name="keywords" content="Moa Hamner - sound design" />
			</Head>
			<div className="landing-page">
				<div className="texture"></div>
				<Link href="/about">
					<a>
						<h4>Sound designer</h4>{" "}
					</a>
				</Link>
				<h1>
					Moa
					<br /> Hamner
				</h1>

				<div className="aframe-scene">
					<Aframe />
				</div>

				{/* <div className="background-image">
					<Image
						src="/bakgrund_color.png"
						alt="hej"
						width={1300}
						height={900}
						// layout="fill"
					/>
				</div> */}
			</div>
		</>
	);
}
