import { useEffect, useState } from 'react';
import useConferenceContext from '../../hooks/useConferenceContext';
import InterNationalConferenceCard from './InterNationalConferenceCard';
import useAuthContext from '../../hooks/useAuthContext';
import FilteringSection from '../Research/FilteringSection';
import SuccessAlert from '../alerts/SuccessAlert';
import { PiPlus } from 'react-icons/pi';
import { Link } from 'react-router';
import ResearchPagination from '../Research/ResearchPagination';
import LoadingSpinner from '../Common/LoadingSpinner';

const InterNationalConferencesData = () => {
    const [currentPage, setCurrentPage] = useState(1);
	const [searchQuery, setSearchQuery] = useState("");
	const [debouncedSearch, setDebouncedSearch] = useState(searchQuery);
    const [sortOrder, setSortOrder] = useState("");
    const { conferences, fetchConference, loading, totalPages, deleteConference, sMsg, setSMsg } = useConferenceContext(); 
    const { user } = useAuthContext();
    console.log(conferences); 


	useEffect(() => {
		fetchConference(currentPage, debouncedSearch, sortOrder);
    }, [currentPage, debouncedSearch, sortOrder]);
    


	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedSearch(searchQuery);
			setCurrentPage(1);
		}, 2000);
		return () => clearTimeout(timer);
    }, [searchQuery]);
    


	useEffect(() => {
		if (sMsg) {
			const timer = setTimeout(() => {
				setSMsg(null);
			}, 3000);
			return () => clearTimeout(timer);
		}
    }, [sMsg]);
    


	const handleDelete = (id) => {
		deleteConference(id);
		setCurrentPage(1);
    };
    

	if (loading) return <LoadingSpinner />;
      
    return (
		<div className="mb-20">
			<h1 className="text-white text-center text-2xl md:text-5xl mt-15 my-10 md:my-20 font-bold">
				International Conferences
			</h1>
			<div className="mb-10 lg:mb-20">
				<FilteringSection
					handleSorting={setSortOrder}
					sortOrder={sortOrder}
					searchQuery={searchQuery}
					handleSearchQuery={setSearchQuery}
				/>
			</div>
			{sMsg && <SuccessAlert err={sMsg} />}
			{user && (
				<Link to={"/AddConference"}>
					<button className="text-shadow-gray-600 text-sm lg:text-lg flex justify-between items-center my-10 lg:my-20 mx-auto btn bg-linear-to-l from-[#926114] hover:from-[#724d12] border-0 rounded-xl px-10 py-2 gap-3">
						<span>Add New Conference</span>
						<PiPlus size={23} className="stroke-20" />
					</button>
				</Link>
			)}
			<div className="grid grid-cols-1 lg:grid-cols-2">
				{conferences?.map((data, index) => (
					<InterNationalConferenceCard key={index} data={data} deleteConference={handleDelete} />
				))}
			</div>
			<ResearchPagination totalPages={totalPages} handlePageChange={setCurrentPage} currentPage={currentPage} />
		</div>
	);
};

export default InterNationalConferencesData;


// const confData = [
// 	{
// 		conference_name: "BLM2-ICAM4",
// 		full_title: "International Joint E-Conference",
// 		organizers: ["Taylor's University", "University of Kelaniya"],
// 		date: "2021-09-11",
// 		year: 2021,
// 		type: "E-Conference",
// 	},
// 	{
// 		conference_name: "MFAIC2022",
// 		full_title: "24th Malaysian Finance Association International Conference",
// 		organizers: ["Malaysian Finance Association", "University Malaysia Sabah"],
// 		date: "2022-09-09",
// 		year: 2022,
// 		type: "International Conference",
// 	},
// 	{
// 		conference_name: "INPOS 2022",
// 		full_title: "International Postgraduate Research Symposium 2022",
// 		organizers: ["School of Management, Universiti Sains Malaysia"],
// 		date: "2022-10-25 to 2022-10-27",
// 		year: 2022,
// 		type: "Research Symposium",
// 	},
// 	{
// 		conference_name: "ICPC-EB 2023",
// 		full_title: "7th International Conference and PhD Colloquium for Economics and Business",
// 		organizers: ["Faculty of Economics and Business, Universitas Airlangga"],
// 		location: "Surabaya, Indonesia",
// 		date: "2023-10-04 to 2023-10-05",
// 		year: 2023,
// 		type: "International Conference & PhD Colloquium",
// 	},
// 	{
// 		conference_name: "INPOS 2023",
// 		full_title: "International Postgraduate Research Symposium 2023",
// 		organizers: ["School of Management, Universiti Sains Malaysia"],
// 		date: "2023-10-26 to 2023-10-27",
// 		year: 2023,
// 		type: "Research Symposium",
// 	},
// ];