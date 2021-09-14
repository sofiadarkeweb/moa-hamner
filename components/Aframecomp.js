import React from "react";
import Head from "next/head";
import { Entity, Scene } from "aframe-react";
import * as Tone from "tone";

// const synth = new Tone.Synth().toDestination();

// function playSynth() {
// 	synth.TriggerAttackRelease("C2", "8n");
// }

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			appRendered: false,
			color: "#FFC903",
		};
	}

	componentDidMount() {
		if (typeof window !== "undefined") {
			require("aframe");
			require("aframe-particle-system-component");
			this.setState({ appRendered: true });
		}
	}

	changeColor() {
		const colors = ["#c8553d", "#2d6a4f", "#FFB703", "#FB8500"];
		this.setState({
			color: colors[Math.floor(Math.random() * colors.length)],

			// sound: { playSynth },
		});
	}

	render() {
		return (
			<div style={{ height: "100%", width: "100%" }}>
				<Head>
					<meta charset="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					{/* <title>A-Frame React animation</title> */}
				</Head>

				{this.state.appRendered && (
					<div>
						<Scene shadow="type: pcfsoft">
							<Entity primitive="a-light" type="ambient" color="#F72585" />
							<Entity
								primitive="a-light"
								type="point"
								intensity="1"
								position="2 4 4"
							/>

							{/* <Entity
								text={{ value: "Moa", align: "center" }}
								position={{ x: 0, y: 2, z: -1 }}
							/> */
							/*tetrahedron*/}

							<Entity
								id="tetrahedron"
								geometry={{ primitive: "tetrahedron" }}
								material={{ color: this.state.color, opacity: 0.8 }}
								animation__rotate={{
									property: "rotation",
									dur: 80000,
									loop: true,
									to: "360 360 360",
									easing: "linear",
								}}
								position={{ x: 0, y: 2, z: -0.8 }}
								events={{ click: this.changeColor.bind(this) }}
							></Entity>
							<Entity
								id="box"
								geometry={{ primitive: "cone" }}
								material={{ color: "#FB8500", opacity: 0.8 }}
								animation__rotate={{
									property: "rotation",
									dur: 60000,
									loop: true,
									to: "360 360 360",
									easing: "linear",
								}}
								position={{ x: -1, y: 2, z: -0.5 }}
								events={{ click: this.changeColor.bind(this) }}
							></Entity>

							<Entity primitive="a-camera">
								<Entity
									primitive="a-cursor"
									animation__click={{
										property: "scale",
										startEvents: "click",
										from: "0.1 0.1 0.1",
										to: "1 1 1",
										dur: 150,
									}}
								/>
							</Entity>
							{/* dodecahedron */}
							<Entity
								geometry={{ primitive: "dodecahedron" }}
								material={{ color: "#6a040f", opacity: 0.8 }}
								position={{ x: 0.5, y: 1, z: -2 }}
								animation__rotate={{
									property: "rotation",
									dur: 50000,
									loop: true,
									to: "360 360 360",
								}}
								events={{ click: this.changeColor.bind(this) }}
							/>
							<Entity
								geometry={{ primitive: "cone" }}
								material={{ color: this.state.color, opacity: 0.6 }}
								position={{ x: 1, y: 1, z: -1 }}
								animation__rotate={{
									property: "rotation",
									dur: 40000,
									loop: true,
									to: "360 360 360",
								}}
								events={{ click: this.changeColor.bind(this) }}
							/>
							{/* <Entity particle-system={{ preset: "snow" }} /> */}
							<Entity light={{ type: "point" }} />
						</Scene>
					</div>
				)}
			</div>
		);
	}
}

// import "aframe";
// import "aframe-particle-system-component";
// import { Entity, Scene } from "aframe-react";
// import React from "react";
// import ReactDOM from "react-dom";

// class VRScene extends React.Component {
// 	render() {
// 		return (
// 			<Scene>
// 				<Entity
// 					geometry={{ primitive: "box" }}
// 					material={{ color: "red" }}
// 					position={{ x: 0, y: 0, z: -5 }}
// 				/>
// 				<Entity particle-system={{ preset: "snow" }} />
// 				<Entity light={{ type: "point" }} />
// 				<Entity gltf-model={{ src: "virtualcity.gltf" }} />
// 				<Entity text={{ value: "Hello, WebVR!" }} />
// 			</Scene>
// 		);
// 	}
// }

// ReactDOM.render(<VRScene />, document.querySelector("#sceneContainer"));

// import React from "react";
// import "aframe";

// const Aframecomp = () => {
// 	return (
// 		<div>
// 			<a-scene>
// 				<a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" />
// 				<a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E" />
// 				<a-cylinder
// 					position="1 0.75 -3"
// 					radius="0.5"
// 					height="1.5"
// 					color="#FFC65D"
// 				/>
// 				<a-plane
// 					position="0 0 -4"
// 					rotation="-90 0 0"
// 					width="4"
// 					height="4"
// 					color="#7BC8A4"
// 				/>
// 			</a-scene>
// 		</div>
// 	);
// };

// export default Aframecomp;
