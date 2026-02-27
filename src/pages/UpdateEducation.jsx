import React, { useEffect, useState } from 'react';
import EducationDegree from '../components/education/updateEducation/EducationDegree';
import EducationDescription from '../components/education/updateEducation/EducationDescription';
import EducationInstitution from '../components/education/updateEducation/EducationInstitution';
import EducationCgpa from '../components/education/updateEducation/EducationCgpa';
import EducationStartTime from '../components/education/updateEducation/EducationStartTime';
import EducationEndTime from '../components/education/updateEducation/EducationEndTime';
import authAPIClient from '../services/auth-api-client';
import { useParams } from 'react-router';
import useEducationContext from '../hooks/useEducationContext';
import SuccessAlert from '../components/alerts/SuccessAlert';
import EducationImages from '../components/education/updateEducation/EducationImages';
import LoadingSpinner from '../components/Common/LoadingSpinner';

const UpdateEducation = () => {
    const [loading, setLoading] = useState(false); 
    const [education, setEducation] = useState(null); 
    const { educationId } = useParams();
    const smSize = 23
    const { updateEducation, sMsg, setSMsg } = useEducationContext();


    const fetchEducation = async () => {
        setLoading(true);
		try {
			const res = await authAPIClient.get(`/educations/${educationId}/?user_id=2`);
			console.log(res.data);
			setEducation(res.data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
    }
    useEffect(() => { fetchEducation() }, []); 

    useEffect(() => {
		if (sMsg) {
			const timer = setTimeout(() => {
				setSMsg(null);
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [sMsg]);
    

    
    return (
		<div className='lg:w-1/2 mx-auto mb-40'>
			<h1 className="text-xl lg:text-3xl text-gray-300 font-bold my-10 lg:my-20 headTitle text-center">
				Education Editing Form
            </h1>
            {loading && <LoadingSpinner/>}
			{sMsg && <SuccessAlert err={sMsg} />}
            <div className="bg-[#161515d5] rounded-xl p-2">
                <EducationImages educationId={educationId} />
				<EducationDegree e={education} smSize={smSize} onSave={updateEducation} />
				<EducationDescription e={education} smSize={smSize} onSave={updateEducation} />
				<EducationInstitution e={education} smSize={smSize} onSave={updateEducation} />
				<EducationCgpa e={education} smSize={smSize} onSave={updateEducation} />
				<EducationStartTime e={education} smSize={smSize} onSave={updateEducation} />
				<EducationEndTime e={education} smSize={smSize} onSave={updateEducation} />
			</div>
		</div>
	);
};

export default UpdateEducation;