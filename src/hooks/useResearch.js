import { useState } from 'react';
import authAPIClient from '../services/auth-api-client';

const useResearch = () => {
    const [loading, setLoading] = useState(false); 
    const [researches, setResearches] = useState([]); 
    const [sMsg, setSMsg] = useState(""); 
    const [totalPages, setTotalPages] = useState(0); 


    const fetchResearch = async (
		currentPage = 1,
		debouncedSearch = "",
		sortOrder = "",
	) => {
        setLoading(true);
        const url = `/researches/?search=${debouncedSearch}&page=${currentPage}&ordering=${sortOrder}&user_id=2`;
		try {
			const res = await authAPIClient.get(url);
			console.log(res);
            setResearches(res.data.results);
            setTotalPages(Math.ceil(res.data.count / 12));
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
    };
    

    
    const createResearch = async (data) => {
        console.log(data); 
        try {
            const res = await authAPIClient.post(`/researches/`, data);
            console.log(res); 
            if (res.status === 201) {
                await fetchResearch();
                return true; 
            }
        } catch (error) {
            console.log(error);
        }
    }

    

    const updateResearch = async (id, data) => {
        try {
            if ("volume_page" in data) {
				data = { ...data, volume_page: data.volume_page || null };
			}
            const res = await authAPIClient.patch(`/researches/${id}/?user_id=2`, data); 
            if (res.status === 200) {
                setSMsg("Updated Successfully!"); 
                await fetchResearch(); 
            }
        }
        catch (error) {
            console.log(error); 
        }
    }



    const deleteResearch = async (id) => {
        try {
            const res = await authAPIClient.delete(`/researches/${id}/?user_id=2`);
            if (res.status === 204) {
                setSMsg("Deleted Successfully!");
                await fetchResearch();
            }
        } catch (error) {
            console.log(error);
        }
    }



    return {researches, totalPages, loading, updateResearch, setSMsg, sMsg, fetchResearch, deleteResearch, createResearch}
};

export default useResearch;