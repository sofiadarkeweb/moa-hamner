import React from "react";
import * as Tone from "tone";

const synth = new Tone.Synth().toDestination();

console.log(synth);

function playSynth() {
	synth.TriggerAttackRelease("C2", "8n");
}

const SoundTone = () => {
	return (
		<div>
			<button onClick={playSynth}>synth</button>
		</div>
	);
};

export default SoundTone;
