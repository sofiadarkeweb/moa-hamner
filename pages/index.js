import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Aframe from "../components/Aframecomp";

import * as Tone from "tone";

export default function Home() {
	function playSynth() {
		// const synth = new Tone.MembraneSynth().toMaster();
		useEffect(() => {
			// Update the document title using the browser API
			// synth.triggerAttackRelease("C2", "8n");
			console.log("hej");
		}, []);
	}

	const [click, setClicked] = useState(0);

	const handleClick = () => {
		setClicked("Click happened");
		console.log(click);
	};
	// const [tonesynth, setToneSynth] = useState({synth});

	// Similar to componentDidMount and componentDidUpdate:

	return (
		<>
			<Head>
				<title> Moa Hamner | Sound Design</title>
				<meta name="keywords" content="Moa Hamner - sound design" />
			</Head>
			<div className="landing-page">
				{/* <div onClick={handleClick}>click me</div> */}
				{/* <Link href="./">
					<a className="test-btn" onClick={handleClick}>
						click me
					</a>
				</Link> */}
				<Link href="/about">
					<a>
						<h4>Sound designer</h4>
					</a>
				</Link>
				<div className="texture"></div>

				<h1 id="moa">
					Moa
					<br /> Hamner
				</h1>

				<div className="aframe-scene">
					/<Aframe />
				</div>
				{/* 
				<div className="background-image">
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
