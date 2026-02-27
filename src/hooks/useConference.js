import React, { useState } from "react";
import authAPIClient from "../services/auth-api-client";

const useConference = () => {
	const [loading, setLoading] = useState(false);
	const [conferences, setConferences] = useState([]);
	const [sMsg, setSMsg] = useState("");
	const [totalPages, setTotalPages] = useState(0);

	const fetchConference = async (currentPage = 1, debouncedSearch = "", sortOrder = "") => {
		setLoading(true);
		const url = `/conferences/?search=${debouncedSearch}&page=${currentPage}&ordering=${sortOrder}&user_id=2`;
		try {
			const res = await authAPIClient.get(url);
			console.log(res);
			setConferences(res.data.results);
			setTotalPages(Math.ceil(res.data.count / 12));
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const createConference = async (data) => {
		console.log(data);
		try {
			const res = await authAPIClient.post(`/conferences/`, data);
			console.log(res);
            if (res.status === 201) {
                setSMsg("Created Successfully!")
				await fetchConference();
				return true;
			}
		} catch (error) {
			console.log(error);
		}
	};

	const updateConference = async (id, data) => {
		try {
			if ("volume_page" in data) {
				data = { ...data, volume_page: data.volume_page || null };
			}
			const res = await authAPIClient.patch(`/conferences/${id}/?user_id=2`, data);
			if (res.status === 200) {
				setSMsg("Updated Successfully!");
				await fetchConference();
			}
		} catch (error) {
			console.log(error);
		}
	};

	const deleteConference = async (id) => {
		try {
			const res = await authAPIClient.delete(`/conferences/${id}/?user_id=2`);
			if (res.status === 204) {
				setSMsg("Deleted Successfully!");
				await fetchConference();
			}
		} catch (error) {
			console.log(error);
		}
	};

	return {
		conferences,
		totalPages,
		loading,
		updateConference,
		setSMsg,
		sMsg,
		fetchConference,
		deleteConference,
		createConference,
	};
};
export default useConference;
