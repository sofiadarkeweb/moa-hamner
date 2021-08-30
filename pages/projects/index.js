import React from "react";
import Image from "next/image";

const projects = () => {
	return (
		<div className="project-grid">
			<div className="img-in-grid">
				<Image src="/burkar.jpeg" width={1000} height={563} />
			</div>
			<div className="img-in-grid">
				<Image src="/project6.png" width={3354} height={2046} />
			</div>
			<div className="img-in-grid">
				<Image src="/soritoni.jpeg" width={1280} height={720} />
			</div>
			<div className="img-in-grid">
				<Image src="/undersokningen.jpeg" width={560} height={365} />
			</div>
			<div className="img-in-grid">
				<Image src="/uppdrag_gamling.jpg" width={774} height={629} />
			</div>
			<div className="img-in-grid">
				<Image src="/project8.png" width={3580} height={1908} />
			</div>
			<div className="img-in-grid">
				<Image src="/burkar.jpeg" width={1000} height={563} />
			</div>
		</div>
	);
};

export default projects;
