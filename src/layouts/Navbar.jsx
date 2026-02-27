import React, { useState } from "react";
import { IoHome, IoKey } from "react-icons/io5";
import { BiSolidContact } from "react-icons/bi";
import { GiArchiveResearch } from "react-icons/gi";
import { Link } from "react-router";
import { CiLock, CiUnlock } from "react-icons/ci";
import useAuthContext from "../hooks/useAuthContext";
import { FaKey, FaPeopleGroup } from "react-icons/fa6";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const { user, logoutUser } = useAuthContext(); 
	const smSize = 23; 
	const lgSize = 28;

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
					<div className="relative group inline-block">
						<IoHome
							size={open ? smSize : lgSize}
							color="white"
							className="hover:drop-shadow-lg hover:scale-120 transition-transform"
						/>
						<div
							className="absolute -left-5 ml-3 top-10 -translate-x-1 
                    bg-gray-800 text-white text-sm px-3 py-1 rounded-md 
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-200 whitespace-nowrap z-50 pointer-events-none">
							Home
						</div>
					</div>
				</Link>
				<Link to="/research" className="block my-5">
					<div className="relative group inline-block">
						<GiArchiveResearch
							size={open ? smSize : lgSize}
							color="white"
							className="hover:drop-shadow-lg hover:scale-120 transition-transform"
						/>
						<div
							className="absolute -left-5 ml-3 top-10 -translate-x-1 
                    bg-gray-800 text-white text-sm px-3 py-1 rounded-md 
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-200 whitespace-nowrap z-50 pointer-events-none">
							Researchs
						</div>
					</div>
				</Link>
				<Link to="/conference" className="block my-5">
					<div className="relative group inline-block">
						<FaPeopleGroup
							size={open ? smSize : lgSize}
							color="white"
							className="hover:drop-shadow-lg hover:scale-120 transition-transform"
						/>
						<div
							className="absolute -left-5 ml-3 top-10 -translate-x-1 
                    bg-gray-800 text-white text-sm px-3 py-1 rounded-md 
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-200 whitespace-nowrap z-50 pointer-events-none">
							Conferences
						</div>
					</div>
				</Link>
				<Link to="/contact" className="block my-5 ">
					<div className="relative group inline-block">
						<BiSolidContact
							size={open ? smSize : lgSize}
							color="white"
							className="hover:drop-shadow-lg hover:scale-120 transition-transform"
						/>
						<div
							className="absolute -left-5 ml-3 top-10 -translate-x-1 
                    bg-gray-800 text-white text-sm px-3 py-1 rounded-md 
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-200 whitespace-nowrap z-50 pointer-events-none">
							Contact
						</div>
					</div>
				</Link>

				{user ?
					<div className="relative group inline-block">
						<button onClick={logoutUser} className="cursor-pointer">
							<CiUnlock
								size={open ? smSize : lgSize}
								color="white"
								className="hover:drop-shadow-lg hover:scale-120 transition-transform"
							/>
						</button>

						{/* Tooltip */}
						<div
							className="absolute -left-5 ml-3 top-10 -translate-x-1 
                    bg-gray-800 text-white text-sm px-3 py-1 rounded-md 
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-200 whitespace-nowrap z-50 pointer-events-none">
							Logout
						</div>
					</div>
				:	<Link to="/login" className="block my-5">
						<div className="relative group inline-block">
							<CiLock
								size={open ? smSize : lgSize}
								color="white"
								className="hover:drop-shadow-lg hover:scale-120 transition-transform"
							/>
							<div
								className="absolute -left-5 ml-3 top-10 -translate-x-1 
                    bg-gray-800 text-white text-sm px-3 py-1 rounded-md 
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-200 whitespace-nowrap z-50 pointer-events-none">
								Login
							</div>
						</div>
					</Link>
				}
				{user && (
					<Link to="/changePassword" className="block my-5">
						<div className="relative group inline-block">
							<IoKey
								size={open ? smSize : lgSize}
								color="white"
								className="hover:drop-shadow-lg hover:scale-120 transition-transform"
							/>
							<div
								className="absolute -left-5 ml-3 top-10 -translate-x-1 
				bg-gray-800 text-white text-sm px-3 py-1 rounded-md 
				opacity-0 group-hover:opacity-100 
				transition-opacity duration-200 whitespace-nowrap z-50 pointer-events-none">
								Change Password
							</div>
						</div>
					</Link>
				)}
			</div>
		</>
	);
};

export default Navbar;
