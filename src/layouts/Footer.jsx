import React from "react";
import logo from "../assets/images/JUlogo.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
const Footer = () => {
	return (
		<footer className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#222222] text-gray-300/80 p-10 text-center space-y-10">
			<nav>
				<h1 className="footer-title font-semibold">Email</h1>
				<p>jnuimran@fin.jnu.ac.bd</p>
				<p>jnuimran@gmail.com</p>
			</nav>
			<nav>
				<h1 className="footer-title font-semibold">Address</h1>
				<p className="">
					Room No-522, 4th Floor, Department of Finance New Academic Building Jagannath University,
					Dhaka-1100, Bangladesh.
				</p>
			</nav>
			<nav>
				<h1 className="footer-title font-semibold">Mobile</h1>
				<p>+8801918338326 (WhatsApp)</p>
			</nav>
			<nav>
				<h6 className="footer-title">Social Media</h6>
				<div className="flex flex-col pt-2 gap-5">
					<a href="https://www.facebook.com/jnuimraan" className="text-gray-300/80 mx-auto">
						<FaFacebook size={25} />{" "}
					</a>
					<a
						href="https://www.linkedin.com/in/md-imran-hossain-22b06432/"
						className="text-gray-300/80 mx-auto">
						<FaLinkedin size={25} />{" "}
					</a>
				</div>
			</nav>
		</footer>
	);
};

export default Footer;
