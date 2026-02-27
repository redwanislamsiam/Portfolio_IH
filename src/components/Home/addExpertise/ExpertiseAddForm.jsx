import React from "react";
import { useForm } from "react-hook-form";
import { MdOutlineCancel } from "react-icons/md";

const ExpertiseAddForm = ({submit, setOpenForm, smSize}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
    } = useForm();
    
    const onSubmit = (data) => {
        submit(data);
        setOpenForm(false); 
    }

	return (
		<div className="flex flex-col justify-between gap-5 rounded-xl shadow-lg py-2 hover:shadow-amber-700 outline-none shadow-gray-700 text-sm lg:text-lg mx-5 px-2 md:px-5 my-2 lg:my-5 bg-gray-700/30 transition-all">
			<button
				className="text-white hover:text-gray-400 ml-auto mt-2 cursor-pointer"
				onClick={() => setOpenForm(false)}>
				<MdOutlineCancel size={smSize} />
			</button>
			<form action="" onSubmit={handleSubmit(onSubmit)} className="w-full">
				<div className="">
					<label className="label mx-2 lg:mx-5 mb-3 text-white">Title</label>
					<textarea
						className="input text-xs lg:text-lg bg-gray-700/30 p-2 border-0 w-full text-white outline-none resize-none whitespace-pre-wrap break-words"
						id="title"
						type="text"
						placeholder="Write the title of the new Research Domain"
						{...register("title")}
					/>
				</div>
				<div className=" col-span-4">
					<label className="label mx-2 lg:mx-5 mb-3 text-white">Description</label>
					<textarea
						className="input text-xs lg:text-lg bg-gray-700/30 p-2 border-0 w-full text-white outline-none resize-none h-30 whitespace-pre-wrap break-words"
						id="description"
						type="text"
						placeholder="Describe the new Research Domain"
						{...register("description")}
					/>
				</div>
				{errors.description && <span className="label-text-alt text-error">{errors.description.message}</span>}

				<button
					type="submit"
					className="text-shadow-gray-600 text-sm lg:text-lg items-center mx-auto btn bg-linear-to-l mt-2 from-[#926114] hover:from-[#724d12] border-0 rounded-xl  w-full">
					Add
				</button>
			</form>
		</div>
	);
};

export default ExpertiseAddForm;
