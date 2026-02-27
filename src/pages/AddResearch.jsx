import React from 'react';
import { useForm } from 'react-hook-form';
import useResearchContext from '../hooks/useResearchContext';
import { useNavigate } from 'react-router';

const AddResearch = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { createResearch } = useResearchContext(); 
    const navigate = useNavigate(); 

    

    const handleAddResearch= async (data) => {
        try {

            const formData = {
				...data,
				link: data.link?.trim() || null,
				volume_page: data.volume_page?.trim() || null,
			};
            const res = await createResearch(formData)
            if (res) {
                navigate(`/research`, { state: { sMsg: "New Degree Added Successfully!" } });
            }
        } catch (error) {
            console.log(error);
        }
    };



    return (
		<div className="w-5/6 lg:w-1/2 mx-auto">
			<h1 className="text-xl lg:text-3xl text-gray-300 font-bold my-10 lg:my-20 headTitle text-center">
				Add Research
			</h1>
			<form
				onSubmit={handleSubmit(handleAddResearch)}
				className="space-y-4 text-white bg-gray-500/30 p-5 rounded-2xl shadow-xl text-xs lg:text-sm">
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

				{/* Researchers */}
				<div>
					<label className="block text-xs lg:text-sm font-medium">Researchers</label>
					<textarea
						{...register("researchers", { required: "This field is required" })}
						className="input input-bordered text-xs lg:text-sm w-full bg-gray-400/40 text-white outline-none"
					/>
					{errors.researchers && <p className="text-red-500 text-xs">{errors.researchers.message}</p>}
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

				{/* Journal */}
				<div>
					<label className="block text-xs lg:text-sm font-medium">Journal</label>
					<input
						type="text"
						className="input input-bordered w-full bg-gray-400/40 text-white text-xs lg:text-sm outline-none"
						placeholder="journal"
						{...register("journal", { required: "This field is required" })}
					/>
					{errors.journal && <p className="text-red-500 text-xs">{errors.journal.message}</p>}
				</div>

				{/* Volume And Page */}
				<div>
					<label className="block text-xs lg:text-sm font-medium">Volume And Page</label>
					<input
						type="text"
						className="input input-bordered w-full bg-gray-400/40 text-white text-xs lg:text-sm outline-none"
						placeholder="Volume and Page"
						{...register("volume_page")}
					/>
					{errors.volume_page && <p className="text-red-500 text-xs">{errors.volume_page.message}</p>}
				</div>

				<button
					type="submit"
					className="text-shadow-gray-600 text-sm lg:text-lg items-center  mx-auto btn bg-linear-to-l from-[#926114] hover:from-[#724d12] border-0 rounded-xl  w-full">
					Add Research
				</button>
			</form>
		</div>
	);
};

export default AddResearch;