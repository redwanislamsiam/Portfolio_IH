import React, { useEffect, useState } from 'react';
import authAPIClient from '../services/auth-api-client';
import apiClient from '../services/api-client';

const useAuth = () => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [errorMsg, setErrorMsg] = useState("");

	const getToken = () => {
		const token = localStorage.getItem("authTokens");
		return token ? JSON.parse(token) : null;
	};
	const [authTokens, setAuthTokens] = useState(getToken());




	// Handle API error
	const handleAPIError = (error, defaultMessage = "Something went wrong!") => {
		if (error.response && error.response.data) {
			const errorMessage = Object.values(error.response.data).flat().join("\n");
			setErrorMsg(errorMessage);
			return { failure: true, message: errorMessage };
		} else {
			setErrorMsg(defaultMessage);
			return {
				failure: true,
				message: defaultMessage,
			};
		}
	};




	// Fetch User
	const fetchUserProfile = async (authTokens) => {
		try {
			const response = await apiClient.get("/auth/users/me/", {
				headers: { Authorization: `JWT ${authTokens?.access}` },
			});
			setUser(response.data);
		} catch (error) {
			console.log("fetchUserProfile Error: ", error.message);
			setUser(null);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		const checkAuth = async () => {
			if (authTokens) {
				await fetchUserProfile(authTokens);
			}
			else {
				setLoading(false); 
			}
		};

		checkAuth();
    }, [authTokens]);
    



	// Login User
	const loginUser = async (userData) => {
		setErrorMsg("");
		try {
			const res = await apiClient.post("/auth/jwt/create/", userData);
			setAuthTokens(res.data);
			localStorage.setItem("authTokens", JSON.stringify(res.data));
			await fetchUserProfile(res.data);
			return { success: true, message: "Login Successfull!" };
		} catch (error) {
			return handleAPIError(error, "Login Failed! Try Again!");
		}
    };
    



	// Logout User
	const logoutUser = () => {
		setAuthTokens(null);
		setUser(null);
		localStorage.removeItem("authTokens");
	};




	// Change Password
	const changePassword = async (data) => {
		console.log(data)
		setErrorMsg("");
		try {
			const res = await authAPIClient.post("/auth/users/set_password/", data);
			console.log(res); 
			if (res.status === 204) {
				return {success: true}
			}
		} catch (error) {
			console.log(error)
			return handleAPIError(error);
		}
	};




	return {
		user,
        setErrorMsg,
		authTokens,
		errorMsg,
		loginUser,
		logoutUser,
		changePassword,
		handleAPIError,
		loading,
	};
};;;

export default useAuth;