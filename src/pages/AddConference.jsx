import React from 'react';
import { useForm } from 'react-hook-form';
import useConferenceContext from '../hooks/useConferenceContext';
import { useNavigate } from 'react-router';

const AddConference = () => {
    const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { createConference } = useConferenceContext();
    const navigate = useNavigate();
    


    const handleAddConference = async (data) => {
		try {
			const res = await createConference(data);
			if (res) {
				navigate(`/conference`, { state: { sMsg: "New Conference Added Successfully!" } });
			}
		} catch (error) {
			console.log(error);
		}
    };


    
    return (
		<div className="w-5/6 lg:w-1/2 mx-auto">
			<h1 className="text-xl lg:text-3xl text-gray-300 font-bold my-10 lg:my-20 headTitle text-center">
				Add Conference
			</h1>
			<form
				onSubmit={handleSubmit(handleAddConference)}
				className="space-y-4 text-white bg-gray-500/30 p-5 rounded-2xl shadow-xl text-xs lg:text-sm">
				{/* Short Title */}
				<div>
					<label className="block text-xs lg:text-sm font-medium">Short Title</label>
					<input
						className="input input-bordered w-full bg-gray-400/40 text-white text-xs lg:text-sm outline-none"
						placeholder="Short Title"
						{...register("short_title", { required: true })}
					/>
					{errors.short_title && <p className="text-red-500 text-xs">This field is required</p>}
				</div>

				{/* Title */}
				<div>
					<label className="block text-xs lg:text-sm font-medium">Title</label>
					<input
						className="input input-bordered w-full bg-gray-400/40 text-white text-xs lg:text-sm outline-none"
						placeholder="Title"
						{...register("title", { required: true })}
					/>
					{errors.title && <p className="text-red-500 text-xs">This field is required</p>}
				</div>

				{/* DESCRIPTION */}
				<div>
					<label className="block text-xs lg:text-sm font-medium">Description</label>
					<textarea
						{...register("description")}
						className="textarea textarea-bordered w-full bg-gray-400/40 text-white text-xs lg:text-sm outline-none"
						placeholder="Description"></textarea>
					{errors.description && <p className="text-red-500 text-xs">{errors.description.message}</p>}
				</div>

				{/* LINK */}
				<div>
					<label className="block text-xs lg:text-sm font-medium">Link</label>
					<input
						id="link"
						type="text"
						{...register("link", {
							pattern: {
								value: /^(https?:\/\/)/i,
								message: "Enter a valid URL (must start with http:// or https://)",
							},
						})}
						className="input input-bordered text-xs lg:text-sm w-full bg-gray-400/40 text-white outline-none"
					/>
					{errors.link && <p className="text-red-500 text-xs">{errors.link.message}</p>}
				</div>

				{/* Organizers */}
				<div>
					<label className="block text-xs lg:text-sm font-medium">Organizers</label>
					<textarea
						{...register("organizers", { required: "This field is required" })}
						className="input input-bordered text-xs lg:text-sm w-full bg-gray-400/40 text-white outline-none"
					/>
					{errors.organizers && <p className="text-red-500 text-xs">{errors.organizers.message}</p>}
				</div>

				{/* Date */}
				<div>
					<label className="block text-xs lg:text-sm font-medium">Publishing Date</label>
					<input
						type="date"
						className="input input-bordered w-full bg-gray-400/40 text-white text-xs lg:text-sm outline-none"
						{...register("date", { required: "This field is required" })}
					/>
					{errors.date && <p className="text-red-500 text-xs">{errors.date.message}</p>}
				</div>

				<button
					type="submit"
					className="text-shadow-gray-600 text-sm lg:text-lg items-center  mx-auto btn bg-linear-to-l from-[#926114] hover:from-[#724d12] border-0 rounded-xl  w-full">
					Add Conference
				</button>
			</form>
		</div>
	);
};

export default AddConference;