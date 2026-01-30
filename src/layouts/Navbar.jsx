import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { BiSolidContact } from "react-icons/bi";
import { GiArchiveResearch } from "react-icons/gi";
import { Link } from "react-router";

const Navbar = () => {

	const [open, setOpen] = useState(false);
	return (
		<>
			{/* Toggle Button for Mobile */}
			<button
				className="fixed top-2 left-2 md:left-5 z-20 md:hidden bg-white/20 px-2 py-2 rounded-sm shadow-lg"
				onClick={() => setOpen(!open)}>
				{/* Hamburger Icon */}
				<div className="w-4 h-0.5 bg-white mb-1"></div>
				<div className="w-4 h-0.5 bg-white mb-1"></div>
				<div className="w-4 h-0.5 bg-white"></div>
			</button>

			{/* Sidebar */}
			<div
				className={`fixed top-1/3 left-2 md:left-5 z-10 w-fit bg-white/20 shadow-lg px-2 md:px-3 py-2 md:py-5 rounded-full h-fit 
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-48"} 
        md:translate-x-0 md:block`}>
				<Link to="/" className="block my-5">
					<IoHome
						size={open ? 20 : 28}
						color="white"
						className="hover:drop-shadow-lg hover:scale-120 transition-transform"
					/>
				</Link>
				<Link to="/research" className="block my-5">
					<BiSolidContact
						size={open ? 20 : 28}
						color="white"
						className="hover:drop-shadow-lg hover:scale-120 transition-transform"
					/>
				</Link>
				<Link to="/archive" className="block my-5">
					<GiArchiveResearch
						size={open ? 20 : 28}
						color="white"
						className="hover:drop-shadow-lg hover:scale-120 transition-transform"
					/>
				</Link>
			</div>
		</>
	);
};

export default Navbar;
