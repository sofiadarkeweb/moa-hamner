import React from "react";
import Head from "next/head";
import Image from "next/image";
// import SoundTone from "../components/SoundTone";

// import * as Tone from "tone";

// const synth = new Tone.MembraneSynth().toMaster();

// function playSynth() {
// 	synth.TriggerAttackRelease("C2", "8n");
// }

const about = () => {
	// const handleClick = () => {
	// 	console.log("Click happened");
	// };
	return (
		<>
			<Head>
				<title> Moa Hamner | About</title>
				<meta name="keywords" content="Moa Hamner - about and contact" />
			</Head>
			{/* <SoundTone /> */}
			<div className="about-section">
				{/* <button onClick={handleClick}>click</button> */}
				<div className="background-image">
					<Image
						src="/about.png"
						alt="hej"
						// width={1910}
						// height={1358}
						objectFit="cover"
						layout="fill"
					/>
				</div>
				{/* <h1>about</h1> */}
				<p className="about-text">
					Quisque a porta dui, ac aliquet lorem. Cras cursus ligula felis, nec
					gravida metus lobortis tincidunt. Morbi cursus arcu a urna auctor
					ullamcorper. Curabitur consequat convallis urna, id porta tortor
					volutpat sed. Nunc a odio luctus, sagittis felis et, mollis tellus.
					Curabitur efficitur nulla mauris, in ultrices arcu posuere a.
					Curabitur sagittis lacus urna, ut rutrum dui volutpat a.
					<br />
					<br />
					moahamner@hotmail.com
				</p>
			</div>
		</>
	);
};

export default about;
