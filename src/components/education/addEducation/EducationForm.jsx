

const EducationForm = ({register, errors, handleSubmit, handleAddEducation}) => {
    return (
		<div className="w-5/6 lg:w-1/2 mx-auto">
			<h1 className="text-xl lg:text-3xl text-gray-300 font-bold my-10 lg:my-20 headTitle text-center">
				Add Education
			</h1>
			<form
				onSubmit={handleSubmit(handleAddEducation)}
				className="space-y-4 text-white bg-gray-500/30 p-5 rounded-2xl shadow-xl text-xs lg:text-sm">
				{/* DEGREE */}
				<div>
					<label className="block text-xs lg:text-sm font-medium">Degree</label>
					<input
						className="input input-bordered w-full bg-gray-400/40 text-white text-xs lg:text-sm outline-none"
						placeholder="Degree"
						{...register("degree", { required: true })}
					/>
					{errors.degree && <p className="text-red-500 text-xs">This field is required</p>}
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

				{/* START */}
				<div>
					<label className="block text-xs lg:text-sm font-medium">Started At</label>
					<input
						type="date"
						{...register("start_time", {
							required: "This Field is required",
						})}
						className="input input-bordered text-xs lg:text-sm w-full bg-gray-400/40 text-white outline-none"
					/>
					{errors.start_time && <p className="text-red-500 text-xs">{errors.start_time.message}</p>}
				</div>

				{/* END */}
				<div>
					<label className="block text-xs lg:text-sm font-medium">Finished At</label>
					<input
						type="date"
						{...register("end_time")}
						className="input input-bordered text-xs lg:text-sm w-full bg-gray-400/40 text-white outline-none"
					/>
					{errors.end_time && <p className="text-red-500 text-xs">{errors.end_time.message}</p>}
				</div>

				{/* INSTITUTION */}
				<div>
					<label className="block text-xs lg:text-sm font-medium">Institution</label>
					<input
						className="input input-bordered w-full bg-gray-400/40 text-white text-xs lg:text-sm outline-none"
						placeholder="Institution"
						{...register("institution", { required: true })}
					/>
					{errors.institution && <p className="text-red-500 text-xs">This field is required</p>}
				</div>

				{/* CPGA */}
				<div>
					<label className="block text-xs lg:text-sm font-medium">CGPA</label>
					<input
						type="number"
						className="input input-bordered w-full bg-gray-400/40 text-white text-xs lg:text-sm outline-none"
						placeholder="cgpa"
						{...register("cgpa", {
							required: "CGPA is required",
							valueAsNumber: true,
							min: { value: 0, message: "Minimum is 0" },
							max: { value: 4, message: "Maximum is 4.00" },
							validate: (value) => {
								if (!Number.isFinite(value)) return "Invalid number";
								if (!/^\d+(\.\d{1,2})?$/.test(value.toString()))
									return "Maximum 2 decimal places allowed";
								return true;
							},
						})}
					/>
					{errors.cgpa && <p className="text-red-500 text-xs">{errors.cgpa.message}</p>}
				</div>

				<button
					type="submit"
					className="text-shadow-gray-600 text-sm lg:text-lg items-center mx-auto btn bg-linear-to-l from-[#926114] hover:from-[#724d12] border-0 rounded-xl  w-full">
					Add Education
				</button>
			</form>
		</div>
	);
};

export default EducationForm;