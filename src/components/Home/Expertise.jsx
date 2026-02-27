import { useEffect, useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import useResearchDomainContext from "../../hooks/useResearchDomainContext";
import LoadingSpinner from "../Common/LoadingSpinner";
import ExpertiseTtileForm from "./updateExpertise/ExpertiseTtileForm";
import SuccessAlert from "../alerts/SuccessAlert";
import ExpertiseDescritionForm from "./updateExpertise/ExpertiseDescritionForm";
import { PiPlus } from "react-icons/pi";
import ExpertiseAddForm from "./addExpertise/ExpertiseAddForm";

const Expertise = () => {
	const { user } = useAuthContext();
	const {
		researchDomains,
		loading,
		updateResearchDomain,
		sMsg,
		setSMsg,
		fetchResearchDomain,
		deleteResearchDomain,
		createResearchDomain,
	} = useResearchDomainContext();
	const [openForm, setOpenForm] = useState(false);

	const smSize = 23;
	// const lgSize = 28;
	// console.log(researchDomains);

	useEffect(() => {
		fetchResearchDomain();
	}, []);

	useEffect(() => {
		if (sMsg) {
			const timer = setTimeout(() => {
				setSMsg(null);
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [sMsg]);

	const [value, setValue] = useState(null);

	return (
		<div className="mb-40">
			<h1 className="text-white text-center text-2xl md:text-5xl font-bold my-10">Research Domains</h1>
			{loading && <LoadingSpinner />}
			{sMsg && <SuccessAlert err={sMsg} />}
			<h3 className="text-white text-center mx-10 rounded-xl shadow-lg shadow-gray-700 my-10 text-sm md:text-xl px-10 bg-gray-700/30 py-5 mb-20">
				In my research career, I am flexible enough to work in any area of finance. However, I am most at ease
				in the following broad areas of research:
			</h3>
			{}
			{researchDomains?.map((e, index) => (
				<div key={index} className="my-5">
					<div
						className={`grid grid-cols-1 w-full transition-all duration-500 ${user && "bg-gray-600/30 rounded-3xl shadow-xl mx-2"}`}>
						{/* TITLE */}
						{user ?
							<div>
								<ExpertiseTtileForm onSave={updateResearchDomain} smSize={smSize} e={e} />
							</div>
						:	<div className="flex justify-center items-center mb-5">
								<div
									className="text-white text-center rounded-xl shadow-lg hover:scale-105 hover:shadow-amber-700 shadow-gray-700 px-5 mx-5 md:px-10 py-5 bg-gray-700/30 transition-all"
									onMouseEnter={() => {
										setValue(index);
									}}
									onMouseLeave={() => {
										setValue(null);
									}}>
									<p className="text-xl md:text-3xl font-semibold cursor-pointer">{e.title}</p>
								</div>
							</div>
						}

						{/* DESCRIPTION */}
						{user ?
							<ExpertiseDescritionForm e={e} onSave={updateResearchDomain} smSize={smSize} />
						:	<div
								className={`flex justify-center items-center transition-all duration-500 ${value === index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"}`}>
								<div className="text-white text-center rounded-xl shadow-lg shadow-amber-700 px-5 md:px-10 py-5 bg-gray-700/30 mx-10">
									<p className="text-sm md:text-lg">{e.description}</p>
								</div>
							</div>
						}

						{/* DELETE */}
						{user && (
							<button
								onClick={() => deleteResearchDomain(e?.id)}
								className="btn btn-ghost hover:bg-red-950 border-0 text-white mt-3 rounded-3xl rounded-t-none">
								Delete
							</button>
						)}
					</div>
				</div>
			))}
			{user && (
				<div>
					<button
						className="text-shadow-gray-600 text-sm lg:text-lg flex justify-between items-center my-10 lg:my-20 mx-auto btn bg-linear-to-l from-[#926114] hover:from-[#724d12] border-0 rounded-xl px-10 py-2 gap-3"
						onClick={() => setOpenForm(true)}>
						<span>Add New Research Domain</span>
						<PiPlus size={smSize} className="stroke-20" />
					</button>
					{openForm && <ExpertiseAddForm smSize={smSize} submit={createResearchDomain} setOpenForm={setOpenForm} />}
				</div>
			)}
		</div>
	);
};

export default Expertise;
