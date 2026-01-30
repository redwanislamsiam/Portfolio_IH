import React from 'react';
import SpotlightCard from '../Common/SpotlightCard';

const ResearchCard = ({data}) => {
    return (
		<div className='my-5 mx-10 md:mx-5'>
			<a href={data.link}>
				<SpotlightCard
					className="relative h-full text-white rounded-xl shadow-xl overflow-hidden hover:scale-105 transition-all"
					spotlightColor="rgb(255, 207, 113, 0.3)"
				>
					<div className="relative z-10 flex flex-col h-full justify-between">

						<h3 className="text-sm md:text-xl font-bold text-[#FFCF71] uppercase mb-3 border-b border-[#FFCF71]/50 pb-2">
							{data.title}
						</h3>

						<ul className={`list-disc list-inside space-y-1 mb-5`}>
							{data.researchers.map((name, idx) => (
								<li
									key={idx}
									className={`${name === "Md Imran Hossain" ? "text-[#FFCF71]" : "text-gray-300"} text-xs md:text-lg font-semibold`}>
									{name}
								</li>
							))}
						</ul>
						<p className="text-[10px] italic text-[#FFCF71]/90">
							{data.journalName}, {data.journalPage}
						</p>
					</div>
				</SpotlightCard>
			</a>
		</div>
	);
};

export default ResearchCard;