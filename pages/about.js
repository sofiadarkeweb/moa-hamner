import React from "react";
import Head from "next/head";
import Image from "next/image";

const about = () => {
	return (
		<>
			<Head>
				<title> Moa Hamner | About</title>
				<meta name="keywords" content="Moa Hamner - about and contact" />
			</Head>

			<div className="about-section">
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
