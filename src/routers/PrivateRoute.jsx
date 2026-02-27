import { Navigate } from "react-router";
import LoadingSpinner from "../components/Common/LoadingSpinner";
import useAuthContext from "../hooks/useAuthContext";


const PrivateRoute = ({ children }) => {
	const { user, loading } = useAuthContext();
	if (loading) {
		return <LoadingSpinner />;
	}
	return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
