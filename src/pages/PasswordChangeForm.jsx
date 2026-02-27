import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuthContext from '../hooks/useAuthContext';
import ErrorAlert from '../components/alerts/ErrorAlert';

const PasswordChangeForm = () => {
	const { register, handleSubmit, formState: {errors}, watch } = useForm(); 
	const [showPassword, setShowPassword] = useState(false); 
	const { changePassword, logoutUser} = useAuthContext(); 
	const [errMsg, setErrMsg] = useState("");


	const handleChangePassword = async (data) => {
		try {
			const res = await changePassword(data);
			if (res.success) {
				logoutUser(); 
			}
			if (res.failure) {
				setErrMsg("Wrong Attempt!"); 
			}
		} catch (error) {
			console.log(error);
		}
	};



	useEffect(() => {
		if (errMsg) {
			const timer = setTimeout(() => {
				setErrMsg(null);
			}, 3000);
			return () => clearTimeout(timer);
		}
	},[errMsg])


	return (
		<div className="lg:w-1/2 mx-5 lg:mx-auto ">
			<h1 className="text-xl lg:text-3xl text-gray-300 font-bold my-20 lg:my-40 headTitle text-center">
				Password Changing Form
			</h1>
			{errMsg && <ErrorAlert err={errMsg}/>}
			<form
				action=""
				onSubmit={handleSubmit(handleChangePassword)}
				className="rounded-xl p-2 outline-none shadow-gray-700 text-sm lg:text-lg mx-5 px-2 md:px-5 my-2 lg:my-5 bg-gray-700/60 transition-all">
				<div className="mt-3 space-y-3 pl-2 text-white">
					<div className="">
						<label htmlFor="" className="label ">
							Current Password
						</label>
						<div className="relative">
							<input
								type={showPassword ? "text" : "password"}
								className="input input-bordered bg-gray-700/30 shadow-lg py-2 hover:shadow-amber-700 text-white text-xs lg:text-sm w-full outline-none pr-10"
								{...register("current_password", { required: "Current Password is required" })}
							/>
						</div>
						{errors.current_password && <p className="text-red-500">{errors.current_password.message}</p>}
					</div>
					<div className="">
						<label htmlFor="" className="label text-xs lg:text-sm">
							New Password
						</label>
						<div className="relative">
							<input
								type={showPassword ? "text" : "password"}
								className="input input-bordered bg-gray-700/30 shadow-lg py-2 hover:shadow-amber-700 text-white text-xs lg:text-sm w-full outline-none pr-10"
								{...register("new_password", {
									required: "New Password is required",
									minLength: { value: 8, message: "Password must be at least 8 characters" },
								})}
							/>
						</div>
						{errors.new_password && <p className="text-red-500">{errors.new_password.message}</p>}
					</div>
					<div className="">
						<label htmlFor="" className="label text-xs lg:text-sm">
							Confirm New Password
						</label>
						<div className="relative">
							<input
								type={showPassword ? "text" : "password"}
								className="input input-bordered text-xs lg:text-sm shadow-lg py-2 hover:shadow-amber-700 bg-gray-700/30 text-white w-full outline-none pr-10"
								{...register("confirm_new_password", {
									validate: (value) => value === watch("new_password") || "Passwords do not match",
								})}
							/>
						</div>
						{errors.confirm_new_password && (
							<p className="text-red-500">{errors.confirm_new_password.message}</p>
						)}
					</div>

					{/* show Password checkbox */}
					<div className="">
						<label htmlFor="" className="label cursor-pointer">
							<span className=" text-xs lg:text-sm">Show Password</span>
							<input
								type="checkbox"
								className="toggle toggle-xs lg:toggle-sm"
								checked={showPassword}
								onChange={() => setShowPassword(!showPassword)}
							/>
						</label>
					</div>
					<button type="submit" className="btn btn-ghost btn-primary w-full">
						Save Password
					</button>
				</div>
			</form>
		</div>
	);
};

export default PasswordChangeForm;