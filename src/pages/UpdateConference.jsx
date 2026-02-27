import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useConferenceContext from "../hooks/useConferenceContext";
import authAPIClient from "../services/auth-api-client";
import ConferenceTitle from "../components/conference/updateConference/ConferenceTitle";
import ConferenceDate from "../components/conference/updateConference/ConferenceDate";
import Organizers from "../components/conference/updateConference/Organizers";
import ConferenceLink from "../components/conference/updateConference/ConferenceLink";
import ConferenceShortTitle from "../components/conference/updateConference/ConferenceShortTitle";
import LoadingSpinner from "../components/Common/LoadingSpinner";
import SuccessAlert from "../components/alerts/SuccessAlert";
import ConferenceDescription from "../components/conference/updateConference/ConferenceDescription";

const UpdateConference = () => {
	const [loading, setLoading] = useState(false);
	const [conference, setConference] = useState(null);
	const { conferenceId } = useParams();
	const smSize = 23;
	const {updateConference, sMsg, setSMsg } = useConferenceContext();

	const fetchConference = async () => {
		setLoading(true);
		try {
			const res = await authAPIClient.get(`/conferences/${conferenceId}/?user_id=2`);
			console.log(res.data);
			setConference(res.data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		fetchConference();
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
				Conference Editing Form
			</h1>
			{loading && <LoadingSpinner />}
			{sMsg && <SuccessAlert err={sMsg} />}
			<div className="bg-[#161515d5] rounded-xl p-2">
				<ConferenceShortTitle e={conference} smSize={smSize} onSave={updateConference} />
				<ConferenceTitle e={conference} smSize={smSize} onSave={updateConference} />
				<ConferenceDescription e={conference} smSize={smSize} onSave={updateConference} />
				<ConferenceDate e={conference} smSize={smSize} onSave={updateConference} />
				<Organizers e={conference} smSize={smSize} onSave={updateConference} />
				<ConferenceLink e={conference} smSize={smSize} onSave={updateConference} />
			</div>
		</div>
	);
};

export default UpdateConference;
