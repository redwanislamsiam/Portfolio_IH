import { useState } from "react";
import authAPIClient from "../services/auth-api-client";

const useResearchDomain = () => {
    const [loading, setLoading] = useState(false); 
    const [researchDomains, setResearchDomains] = useState([]); 
    const [sMsg, setSMsg] = useState(""); 


    const fetchResearchDomain = async () => {
        setLoading(true); 
        try {
            const res = await authAPIClient.get("/research_domains/?user_id=2"); 
            // console.log(res.data);
            setResearchDomains(res.data); 
        }
        catch (error) {
            console.log(error); 
        }
        finally {
            setLoading(false); 
        }
    }



    const createResearchDomain = async (data) => {
        console.log(data); 
        try {
            const res = await authAPIClient.post(`/research_domains/`, data);
            // console.log(res); 
			if (res.status === 201) {
				setSMsg("Created Successfully!");
				await fetchResearchDomain();
			}
		} catch (error) {
			console.log(error);
		}
    }

    



    const updateResearchDomain = async (id, data) => {
        try {
            const res = await authAPIClient.patch(`/research_domains/${id}/?user_id=2`, data); 
            if (res.status === 200) {
                setSMsg("Updated Successfully!"); 
                await fetchResearchDomain(); 
            }
        }
        catch (error) {
            console.log(error); 
        }
    }



    const deleteResearchDomain = async (id) => {
        try {
            const res = await authAPIClient.delete(`/research_domains/${id}/?user_id=2`);
			if (res.status === 204) {
				setSMsg("Deleted Successfully!");
				await fetchResearchDomain();
			}
		} catch (error) {
			console.log(error);
		}
    }



    return {researchDomains, loading, updateResearchDomain, setSMsg, sMsg, fetchResearchDomain, deleteResearchDomain, createResearchDomain}
};

export default useResearchDomain;