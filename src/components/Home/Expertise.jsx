import React, { useState } from 'react';

const Expertise = () => {
    const expertises = [
		{
			name: "Financial Institutions and Markets",
			description:
				"Analysis of the structure, behavior, and performance of financial institutions and markets, with a focus on efficiency, regulation, and their role in economic development.",
		},
		{
			name: "Microfinance",
			description:
				"Study of microfinance institutions and instruments aimed at providing financial services to underserved populations, emphasizing sustainability, outreach, and impact on poverty reduction.",
		},
		{
			name: "Financial Inclusion",
			description:
				"Research on access to and usage of formal financial services, examining policy frameworks, digital finance, and inclusion strategies for marginalized and low-income groups.",
		},
		{
			name: "Corporate Governance",
			description:
				"Investigation of governance mechanisms, ownership structures, and board dynamics, and their effects on firm performance, accountability, and stakeholder protection.",
		},
		{
			name: "Risk Management",
			description:
				"Assessment of financial, operational, and market risks faced by firms and financial institutions, focusing on measurement, mitigation strategies, and regulatory compliance.",
		}
	];

    const [value, setValue] = useState(null); 
    
    return (
		<div className='mb-40'>
			<h1 className="text-white text-center text-2xl md:text-5xl font-bold my-10">Research Domains</h1>
			<h3 className="text-white text-center mx-10 rounded-xl shadow-lg shadow-gray-700 my-10 text-sm md:text-xl px-10 bg-gray-700/30 py-5 mb-20">
				In my research career, I am flexible enough to work in any area of finance. However, I am most at ease
				in the following broad areas of research:
			</h3>
			{expertises.map((e, index) => (
				<div key={index} className="my-5">
					<div className={`grid grid-cols-1 w-full transition-all duration-500`}>
						{/* NAME */}
						<div className="flex justify-center items-center mb-5">
							<div
								className="text-white text-center rounded-xl shadow-lg hover:scale-105 hover:shadow-amber-700 shadow-gray-700 px-5 mx-5 md:px-10 py-5 bg-gray-700/30 transition-all"
								onMouseEnter={() => {
									setValue(index);
								}}
								onMouseLeave={() => {
									setValue(null);
								}}>
								<p className="text-xl md:text-3xl font-semibold cursor-pointer">{e.name}</p>
							</div>
						</div>

						{/* DESCRIPTION */}
						<div
							className={`flex justify-center items-center transition-all duration-500
            ${value === index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"}
          `}>
							<div className="text-white text-center rounded-xl shadow-lg shadow-amber-700 px-5 md:px-10 py-5 bg-gray-700/30 mx-10">
								<p className="text-sm md:text-lg">{e.description}</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Expertise;