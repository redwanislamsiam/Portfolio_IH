import React from "react";
import profileImg from "../../assets/images/Profile2.png";
import TextType from "./TextType";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaResearchgate } from "react-icons/fa6";
import { FaGoogleScholar } from "react-icons/fa6";
import { FaOrcid } from "react-icons/fa";
import logo from "../../assets/images/JUlogo.png"; 


const Hero = () => {

	return (
		<div className="flex flex-col-reverse md:grid md:grid-cols-2 justify-around gap-10  my-20 md:my-80 ">
			<div className="text-center mt-10 md:mt-20 ml-0 md:ml-20 mb-20 px-5 md:px-0">
				{/* <h2 className=" text-2xl  text-white">Font check</h2> */}
				<div className="h-20 md:h-full">
					<TextType
						text={[
							{
								value: "Hello! I am, ",
								className: "text-3xl font-saira md:text-6xl text-center font-semibold text-gray-300",
							},
							{
								value: "Md. Imran Hossain",
								className: "text-3xl md:text-7xl font-saira text-center font-bold text-gray-300",
							},
							{
								value: "I am an Associate Professor",
								className: "text-3xl md:text-6xl font-saira text-center font-semibold text-gray-300",
							},
						]}
						typingSpeed={30}
						pauseDuration={3500}
						showCursor
						cursorCharacter="_"
						texts={["Welcome to React Bits! Good to see you!", "Build some amazing experiences!"]}
						deletingSpeed={50}
						variableSpeedEnabled={false}
						variableSpeedMin={60}
						variableSpeedMax={120}
						cursorBlinkDuration={0.5}
					/>
				</div>
				<div className="mt-20 flex justify-around">
					<a href="https://www.facebook.com/jnuimraan" className="text-white">
						<FaFacebook size={30} />{" "}
					</a>
					<a href="https://www.linkedin.com/in/md-imran-hossain-22b06432/" className="text-white">
						<FaLinkedin size={30} />{" "}
					</a>
					<a href="https://www.researchgate.net/profile/Md-Hossain-1602" className="text-white">
						<FaResearchgate size={30} />{" "}
					</a>
					<a
						href="https://scholar.google.com/citations?user=vl--DpN2gyYC&hl=en"
						className="w-6 h-6 text-white">
						<FaGoogleScholar size={30} />{" "}
					</a>
					<a href="https://orcid.org/my-orcid?orcid=0000-0002-1926-5784" className="w-6 h-6 text-white">
						<FaOrcid size={30} />{" "}
					</a>
					<a href="https://jnu.ac.bd/fm/pview/10667">
						<img src={logo} className="w-8 h-8 bg-white rounded-sm p-0.5" alt="" />
					</a>
				</div>
			</div>
			<div className="relative mx-auto bg-black/50 w-40 md:w-100 h-40 md:h-100 rounded-full shadow-amber-500 shadow-md overflow-b-hidden">
				<img
					src={profileImg}
					alt="profile-image"
					className="
            
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            translate-y-0
            w-100
            h-auto
            object-cover
            rounded-b-full
            drop-shadow-md
            text-right
          "
				/>
			</div>
		</div>
	);
};

export default Hero;
