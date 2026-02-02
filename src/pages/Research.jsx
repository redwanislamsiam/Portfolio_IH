import React from 'react';
import Beams from '../components/Home/Beams';
import ResearchData from '../components/Research/ResearchData';
import InterNationalConferenceCard from '../components/Research/InterNationalConferenceCard';
import InterNationalConferencesData from '../components/Research/InterNationalConferencesData';

const Research = () => {
    return (
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
			<div className="container mx-auto">
				<ResearchData /> 
				<InterNationalConferencesData /> 
			</div>
		</div>
	);
};

export default Research;