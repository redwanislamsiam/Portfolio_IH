import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Beams from '../components/Home/Beams';

const AdminLayout = () => {
    return (
		<div className="font-saira">
			<Navbar />
			<div className="relative w-full min-h-screen overflow-hidden">
				<div className="absolute inset-0 -z-10">
					<Beams
						beamWidth={2}
						beamHeight={20}
						beamNumber={1000}
						lightColor="#F6CE71"
						speed={1.5}
						noiseIntensity={5}
						scale={0.2}
						rotation={0}></Beams>
				</div>
				<div className=" container lg:max-w-7xl mx-auto">
					<Outlet/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default AdminLayout;