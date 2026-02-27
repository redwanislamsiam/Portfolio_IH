import { Link } from "react-router";
import useAuthContext from "../../hooks/useAuthContext";



const InterNationalConferenceCard = ({ data, deleteConference }) => {
	const { user } = useAuthContext(); 

    return (
		<div className="mt-10 mb-10 lg:mb-20 mx-10 md:mx-5">
			<div className="bg-red-950/60 shadow-xl shadow-red-800/10 p-4 h-full rounded-lg text-center">
				<div className="relative z-10 flex flex-col h-full justify-between">
					<h3 className="text-sm md:text-xl font-bold text-[#FFCF71] uppercase mb-3 border-b border-[#FFCF71]/50 pb-2">
						{data.short_title}
					</h3>
					<h3 className="text-sm md:text-xl font-bold text-[#FFCF71] uppercase mb-3 border-b border-[#FFCF71]/50 pb-2">
						{data.title}
					</h3>
					<p className="text-sm md:text-md text-[#FFCF71] border-b border-[#FFCF71]/50 pb-2">
						{data.description}
					</p>

					<ul className={`list-disc list-inside space-y-1 mb-1 border-b border-[#FFCF71]/50 pb-2`}>
						<h1 className="text-2xl text-[#FFCF71] font-semibold">Organizers</h1>
						{data.organizers?.split(",").map((name, idx) => (
							<li key={idx} className="text-[#FFCF71]/70 text-xs md:text-lg font-semibold">
								{name}
							</li>
						))}
					</ul>
					<p className="text-[10px] md:text-sm italic text-[#FFCF71]">{data.date}</p>
				</div>
			</div>
			{user && (
				<div className="grid grid-cols-2">
					<Link to={`/editConference/${data.id}`}>
						<button className="btn btn-ghost hover:bg-blue-950 border-0 text-white mt-2 w-full">
							Edit
						</button>
					</Link>
					<button
						onClick={() => deleteConference(data.id)}
						className="btn btn-ghost hover:bg-red-950 border-0 text-white mt-2 w-full">
						Delete
					</button>
				</div>
			)}
		</div>
	);
};

export default InterNationalConferenceCard;