import React from 'react';
import Beams from '../components/Home/Beams';

const Contact = () => {
    return (
		<div>
			<div className="relative w-full min-h-screen overflow-hidden">
				<div className="absolute inset-0 -z-10">
					<Beams
						beamWidth={0.4}
						beamHeight={20}
						beamNumber={1000}
						lightColor="#F6CE71"
						speed={1.5}
						noiseIntensity={5}
						scale={0.2}
						rotation={45}></Beams>
				</div>
				<div className=" mx-auto">
					<h1 className="text-white text-center text-2xl md:text-5xl mt-15 my-10 md:my-20 font-bold">
						Contact
					</h1>
					<iframe
						className="mx-auto mt-20 mb-20 w-full max-w-3xl h-[75vh] md:h-[120vh] border-0"
						src="https://docs.google.com/forms/d/e/1FAIpQLScwNeHTzWBtqQfUWpXMays6_LIKfvqzMof9bf-dUgjh-mXEag/viewform?embedded=true">
						Loading…
					</iframe>
				</div>
			</div>
		</div>
	);
};

export default Contact;

