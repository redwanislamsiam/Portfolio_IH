import { useEffect, useState } from 'react';
import useAuthContext from '../hooks/useAuthContext';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import SuccessAlert from '../components/alerts/SuccessAlert';
import ErrorAlert from '../components/alerts/ErrorAlert';

const Login = () => {
    const { loginUser, errorMsg, setErrorMsg } = useAuthContext();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");
	const navigate = useNavigate();
	const location = useLocation();



	useEffect(() => {
        setSuccessMsg("");
		if (location.state?.response?.message) {
			setSuccessMsg(location.state.response.message);
		} else if (location?.state?.message) {
			setSuccessMsg(location.state.message);
		}
		const timer = setTimeout(() => {
			navigate(location.pathname, { replace: true, state: null });
		}, 3000);
		return () => clearTimeout(timer);
    }, [location.state, location.pathname]);




    useEffect(() => {
        if (errorMsg) {
			const timer = setTimeout(() => {
				setErrorMsg(null);
			}, 3000);

			return () => clearTimeout(timer);
		}
    },[errorMsg])
    



	const onSubmit = async (data) => {
		setSuccessMsg("");
		setLoading(true);
		try {
			const response = await loginUser(data);
			if (response.success) {
				navigate("/");
			}
		} catch (error) {
			console.log("Login Error: ", error);
		} finally {
			setLoading(false);
		}
	}; 

	
    return (
		<div className="flex min-h-screen items-center justify-center px-4 py-12 bg-gradient-to-br from-[#1B262C] to-[#897123]">
			<div className="card w-full max-w-md bg-gradient-to-t from-[#563907] shadow-xl">
				<div className="card-body">
					<h2 className="card-title text-2xl font-bold text-white">Sign In</h2>
					<p className="text-white/80"> Enter your username and password to access your account</p>
					{errorMsg && <ErrorAlert err={errorMsg} />}
					{successMsg && <SuccessAlert err={successMsg} />}
					<form action="" className="space-y-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
						<div className="">
							<label htmlFor="username" className="label text-lg">
								<span className="label-text text-white/80">Username</span>
							</label>
							<input
								id="username"
								type="username"
								placeholder="username"
								className={`input input-bordered w-full outline-none ${errors.username ? "input-error" : ""}`}
								{...register("username", { required: "username is required" })}
							/>
							{errors.username && (
								<span className="label-text-alt text-error">{errors.username.message}</span>
							)}
						</div>
						<div>
							<label htmlFor="password" className="label text-lg text-white/80">
								<span>Password</span>
							</label>
							<input
								id="password"
								type="password"
								placeholder=". . . . . . . . . ."
								className={`input input-bordered w-full outline-none ${errors.username ? "input-error" : ""}`}
								{...register("password", { required: "Password is required" })}
							/>
							{errors.password && (
								<span className="label-text-alt text-error">{errors.password.message}</span>
							)}
						</div>

						<button
							type="submit"
							className="text-shadow-gray-600 text-sm lg:text-lg items-center my-10 lg:my-20 mx-auto btn bg-linear-to-l from-[#926114] hover:from-[#724d12] border-0 rounded-xl  w-full"
							disabled={loading}>
							{loading ? "Logging in..." : "Login"}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;