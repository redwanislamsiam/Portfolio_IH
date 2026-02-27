import axios from "axios";

const apiClient = axios.create({
	baseURL: "https://portfolio-backend-sigma-rouge.vercel.app/api/",
	// baseURL: "http://127.0.0.1:8000/api/",
});
    
export default apiClient;