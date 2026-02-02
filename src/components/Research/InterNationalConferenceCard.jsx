import React from 'react';
import SpotlightCard from '../Common/SpotlightCard';

const InterNationalConferenceCard = ({data}) => {
    return (
		<div className="mt-10 ">
			<div className="mt-5 mx-10 md:mx-5 bg-red-950/60 shadow-xl shadow-red-800/10 p-4 h-full rounded-lg text-center">
				<div className="">
					<div className="relative z-10 flex flex-col h-full justify-between">
						<h3 className="text-sm md:text-xl font-bold text-[#FFCF71] uppercase mb-3 border-b border-[#FFCF71]/50 pb-2">
							{data.conference_name}
						</h3>
						<h3 className="text-sm md:text-xl font-bold text-[#FFCF71] uppercase mb-3 border-b border-[#FFCF71]/50 pb-2">
							{data.full_title}
						</h3>

						<ul className={`list-disc list-inside space-y-1 mb-5 border-b border-[#FFCF71]/50 pb-2`}>
							<h1 className="text-2xl text-[#FFCF71] font-semibold">Organizers</h1>
							{data.organizers.map((name, idx) => (
								<li key={idx} className="text-[#FFCF71]/70 text-xs md:text-lg font-semibold">
									{name}
								</li>
							))}
						</ul>
						<p className="text-[10px] md:text-sm italic text-[#FFCF71]">{data.date}</p>
						<p className="text-[10px] md:text-sm italic text-[#FFCF71]">{data.type}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InterNationalConferenceCard;