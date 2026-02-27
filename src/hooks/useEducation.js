import { useState } from "react";
import authAPIClient from "../services/auth-api-client";


const useEducation = () => {
    const [educations, setEducations] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [sMsg, setSMsg] = useState("");
    

    
    const fetchEducation = async () => {
		setLoading(true);
		try {
			const res = await authAPIClient.get("/educations/?user_id=2");
			console.log(res.data);
			setEducations(res.data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
    };
    


	const createEducation = async (data) => {
		console.log(data);
		const formData = { ...data, end_time: data.end_time || null, description: data.description || null }
		try{
			const res = await authAPIClient.post(`/educations/`, formData);
			console.log(res);
			if (res.status === 201) {
				setSMsg("Created Successfully!");
				await fetchEducation();
				return {educationId: res.data.id, degree: res.data.degree}
			}
		} catch (error) {
			console.log(error);
		}
    };
    


	const updateEducation = async (id, data) => {
		try {
			if ("end_time" in data) {
				data = { ...data, end_time: data.end_time || null };
			}
			const res = await authAPIClient.patch(`/educations/${id}/?user_id=2`, data);
			if (res.status === 200) {
				setSMsg("Updated Successfully!");
				await fetchEducation();
			}
		} catch (error) {
			console.log(error);
		}
    };
    


	const deleteEducation = async (id) => {
		try {
			const res = await authAPIClient.delete(`/educations/${id}/?user_id=2`);
			if (res.status === 204) {
				setSMsg("Deleted Successfully!");
				await fetchEducation();
			}
		} catch (error) {
			console.log(error);
		}
	};




    return {createEducation, loading, educations, setLoading, fetchEducation, updateEducation, deleteEducation, sMsg, setSMsg}; 
};

export default useEducation;