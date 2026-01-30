import React from 'react';
import Beams from '../components/Home/Beams';
import Hero from '../components/Home/Hero';
import Phd from '../components/Home/Phd';
import Expertise from '../components/Home/Expertise';

const Home = () => {
    return (
		<>
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
				<div className='container mx-auto'>
					<Hero />
					<Phd />
					<Expertise /> 
				</div>
			</div>
		</>
	);
};

export default Home;