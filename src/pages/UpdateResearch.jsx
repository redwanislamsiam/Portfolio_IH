import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useResearchContext from '../hooks/useResearchContext';
import authAPIClient from '../services/auth-api-client';
import LoadingSpinner from '../components/Common/LoadingSpinner';
import SuccessAlert from '../components/alerts/SuccessAlert';
import ResearchDate from '../components/Research/updateResearch/ResearchDate';
import ResearchDescription from '../components/Research/updateResearch/ResearchDescription';
import ResearchTitle from '../components/Research/updateResearch/ResearchTitle';
import ResearchLink from '../components/Research/updateResearch/ResearchLink';
import ResearchJournal from '../components/Research/updateResearch/ResearchJournal';
import Researchers from '../components/Research/updateResearch/Researchers';
import ResearchVolumeAndPage from '../components/Research/updateResearch/ResearchVolumeAndPage';

const UpdateResearch = () => {
    const [loading, setLoading] = useState(false);
	const [research, setResearch] = useState(null);
	const { researchId } = useParams();
	const smSize = 23;
	const { updateResearch, sMsg, setSMsg } = useResearchContext();

	const fetchResearch = async () => {
		setLoading(true);
		try {
			const res = await authAPIClient.get(`/researches/${researchId}/?user_id=2`);
			console.log(res.data);
			setResearch(res.data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		fetchResearch();
	}, []);

	useEffect(() => {
		if (sMsg) {
			const timer = setTimeout(() => {
				setSMsg(null);
			}, 3000);
			return () => clearTimeout(timer);
		}
    }, [sMsg]);
    

    return (
		<div className="lg:w-1/2 mx-auto mb-40">
			<h1 className="text-xl lg:text-3xl text-gray-300 font-bold my-10 lg:my-20 headTitle text-center">
				Research Editing Form
			</h1>
			{loading && <LoadingSpinner />}
			{sMsg && <SuccessAlert err={sMsg} />}
			<div className="bg-[#161515d5] rounded-xl p-2">
				<ResearchTitle e={research} smSize={smSize} onSave={updateResearch} />
				<ResearchDescription e={research} smSize={smSize} onSave={updateResearch} />
				<ResearchDate e={research} smSize={smSize} onSave={updateResearch} />
				<Researchers e={research} smSize={smSize} onSave={updateResearch} />
				<ResearchLink e={research} smSize={smSize} onSave={updateResearch} />
				<ResearchJournal e={research} smSize={smSize} onSave={updateResearch} />
				<ResearchVolumeAndPage e={research} smSize={smSize} onSave={updateResearch} />
			</div>
		</div>
	);
};

export default UpdateResearch;