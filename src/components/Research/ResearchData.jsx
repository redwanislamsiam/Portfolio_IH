import { useEffect, useState } from "react";
import ResearchCard from "./ResearchCard";
import useResearchContext from "../../hooks/useResearchContext";
import LoadingSpinner from "../Common/LoadingSpinner";
import FilteringSection from "./FilteringSection";
import ResearchPagination from "./ResearchPagination";
import useAuthContext from "../../hooks/useAuthContext";
import { Link } from "react-router";
import { PiPlus } from "react-icons/pi";
import SuccessAlert from "../alerts/SuccessAlert";



const ResearchData = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [searchQuery, setSearchQuery] = useState("");
	const [debouncedSearch, setDebouncedSearch] = useState(searchQuery);
	const [sortOrder, setSortOrder] = useState("");
	const { researches, fetchResearch, loading, totalPages, deleteResearch, sMsg, setSMsg } = useResearchContext(); 
	const { user } = useAuthContext(); 



	useEffect(() => {
		fetchResearch(currentPage, debouncedSearch, sortOrder);
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
		deleteResearch(id); 
		setCurrentPage(1); 
	}

	if (loading) return <LoadingSpinner />;
	

    return (
		<div>
			<h1 className="text-white text-center text-2xl md:text-5xl mt-15 my-10 md:my-20 font-bold">
				My Researches
			</h1>
			{sMsg && <SuccessAlert err={sMsg}/>}
			
			<div className="mb-10 lg:mb-20">
				<FilteringSection
					handleSorting={setSortOrder}
					sortOrder={sortOrder}
					searchQuery={searchQuery}
					handleSearchQuery={setSearchQuery}
				/>
			</div>

			{user && (
				<Link to={"/addResearch"}>
					<button className="text-shadow-gray-600 text-sm lg:text-lg flex justify-between items-center my-10 lg:my-20 mx-auto btn bg-linear-to-l from-[#926114] hover:from-[#724d12] border-0 rounded-xl px-10 py-2 gap-3">
						<span>Add New Research</span>
						<PiPlus size={23} className="stroke-20" />
					</button>
				</Link>
			)}

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{researches?.map((data, index) => (
					<ResearchCard key={index} data={data} deleteResearch={handleDelete} />
				))}
			</div>
			<ResearchPagination totalPages={totalPages} handlePageChange={setCurrentPage} currentPage={currentPage} />
		</div>
	);
};

export default ResearchData;


// const datas = [
// 	{
// 		title: "Board Gender Diversity and the Portfolio Credit Risk of Microfinance Institutions (MFIs): A Critical Mass Theory Perspective",
// 		researchers: ["Md Imran Hossain", "Md Aslam Mia"],
// 		journalName: "Business and Society Review",
// 		journalPage: "Vol. 131, No. 1, e70034",
// 		link: "https://doi.org/10.1111/basr.70034",
// 	},
// 	{
// 		title: "Does the efficiency wage reduce the credit risk of microfinance institutions? Global evidence",
// 		researchers: ["Md Imran Hossain", "Md Aslam Mia", "Chee Wooi Hooy"],
// 		journalName: "Annals of Public and Cooperative Economics",
// 		journalPage: "Article e70032",
// 		link: "https://doi.org/10.1111/apce.70032",
// 	},
// 	{
// 		title: "Board gender diversity and donations in the microfinance industry: evidence from emerging economies",
// 		researchers: ["Md Aslam Mia", "Sunil Sangwan", "Md Imran Hossain"],
// 		journalName: "Journal of Sustainable Finance & Investment",
// 		journalPage: "2024, pp. 1–31",
// 		link: "https://doi.org/10.1080/20430795.2024.2393237",
// 	},
// 	{
// 		title: "Data Envelopment Analysis in Microfinance Research: A Systematic Review",
// 		researchers: ["Md Imran Hossain", "Md Aslam Mia"],
// 		journalName:
// 			"Handbook on Data Envelopment Analysis in Business, Finance, and Sustainability (World Scientific Publishing)",
// 		journalPage: "pp. 307–348",
// 		link: "https://doi.org/10.1142/9781800615786_0010",
// 	},
// 	{
// 		title: "Predicting the financial performance of microfinance institutions with machine learning techniques",
// 		researchers: ["Tang Ting", "Md Aslam Mia", "Md Imran Hossain", "Khaw Khai Wah"],
// 		journalName: "Journal of Modelling in Management",
// 		journalPage: "Ahead-of-print",
// 		link: "https://doi.org/10.1108/JM2-10-2023-0254",
// 	},
// 	{
// 		title: "Sand or grease effect? The impact of Islamic banking on the social mission of microfinance institutions",
// 		researchers: ["Md Imran Hossain", "Adamu Jibir", "Md Aslam Mia", "Musa Abdu", "Swati Chauhan"],
// 		journalName: "International Journal of Islamic and Middle Eastern Finance and Management",
// 		journalPage: "Ahead-of-print",
// 		link: "https://doi.org/10.1108/IMEFM-04-2024-0191",
// 	},
// 	{
// 		title: "Determinants of digitalization: Evidence from Asia and the Pacific countries",
// 		researchers: ["Md Aslam Mia", "Md Imran Hossain", "Sunil Sangwan"],
// 		journalName: "Digital Transformation and Society",
// 		journalPage: "Ahead-of-print",
// 		link: "https://doi.org/10.1108/DTS-10-2023-0097",
// 	},
// 	{
// 		title: "Is it worth having more female managers? A portfolio risk perspective from the global microfinance industry",
// 		researchers: ["Md Imran Hossain", "Md Aslam Mia"],
// 		journalName: "Business Strategy & Development",
// 		journalPage: "Vol. 7, No. 1, e333",
// 		link: "https://doi.org/10.1002/bsd2.333",
// 	},
// 	{
// 		title: "A systematic review of gender diversity and its impact on the performance of Microfinance Institutions",
// 		researchers: ["Md Imran Hossain", "Md Aslam Mia", "Chee Wooi Hooy"],
// 		journalName: "Future Business Journal",
// 		journalPage: "Vol. 10, Art. No. 9 (2024)",
// 		link: "https://link.springer.com/article/10.1186/s43093-023-00294-1",
// 	},
// 	{
// 		title: "Employee Turnover and the Credit Risk of Microfinance Institutions (MFIs): International Evidence",
// 		researchers: ["Md Imran Hossain", "Md Aslam Mia", "Chee Wooi Hooy"],
// 		journalName: "Borsa Istanbul Review",
// 		journalPage: "Vol. 23, No. 4, pp. 936–952 (2023)",
// 		link: "https://doi.org/10.1016/j.bir.2023.04.001",
// 	},
// 	{
// 		title: "The Impact of Board Gender Diversity on the Financing Costs of Microfinance Institutions: A Global Evidence",
// 		researchers: [
// 			"Md Aslam Mia",
// 			"Tanzina Hossain",
// 			"Zinnatun Nesa",
// 			"Md Khaled Saifullah",
// 			"Rozina Akhter",
// 			"Md Imran Hossain",
// 		],
// 		journalName: "Journal of Financial Reporting and Accounting",
// 		journalPage: "Vol. 23, No. 3, pp. 876–901 (2022)",
// 		link: "https://www.emerald.com/insight/content/doi/10.1108/JFRA-04-2022-0125/full/html",
// 	},
// 	{
// 		title: "Effects of Non-Performing Loan on Financial Performance: A Hypothetical Evaluation on All Scheduled Banks in Bangladesh",
// 		researchers: ["Md Al-Amin", "Md Siddikur Rahman", "Md Imran Hossain"],
// 		journalName: "Journal of International Business and Management",
// 		journalPage: "Vol. 4, Issue 9, pp. 1–18 (2021)",
// 		link: "https://www.researchgate.net/publication/354528558_Effects_of_Non-Performing_Loan_on_Financial_Performance_A_Hypothetical_Evaluation_on_All_Scheduled_Banks_in_Bangladesh",
// 	},
// 	{
// 		title: "The relationship between corporate social responsibility and corporate financial performance: A study on IDLC Finance Limited",
// 		researchers: ["Md Imran Hossain", "Shaikh Masrick Hasan"],
// 		journalName: "Jagannath University Journal of Business Studies",
// 		journalPage: "Vol. 6, No. 1 & 2, pp. 171–182 (2018)",
// 		link: "https://www.researchgate.net/publication/341286858_The_relationship_between_corporate_social_responsibility_and_corporate_financial_performance_a_study_on_IDLC_Finance_Limited",
// 	},
// 	// {
// 	// 	title: "Impact of green banking factors in consumer choice and perception about banking industry in Bangladesh",
// 	// 	researchers: ["Bidyut Kumer Balo", "Md Imran Hossain"],
// 	// 	journalName: "City University Journal",
// 	// 	journalPage: "Vol. 3, No. 1, pp. 19–42 (2018)",
// 	// 	link: "N/A",
// 	// },
// 	// {
// 	// 	title: "Value Added Statement (VAS) in the context of Bangladesh: A study on problems experienced by management using the VAS",
// 	// 	researchers: ["Fakhrul Islam", "Mohammad Sogir Hossain Khandoker", "Md Imran Hossain"],
// 	// 	journalName: "Jagannath University Journal of Business Studies",
// 	// 	journalPage: "Vol. 5, No. 1 & 2, pp. 55–71 (2017)",
// 	// 	link: "N/A",
// 	// },
// ];