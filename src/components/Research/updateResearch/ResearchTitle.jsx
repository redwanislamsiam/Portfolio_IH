import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CiEdit } from "react-icons/ci";
import { LiaSave } from "react-icons/lia";
import { MdOutlineCancel } from "react-icons/md";

const ResearchTitle = ({ smSize, e, onSave }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const [editing, setEditing] = useState(false);

	useEffect(() => {
		reset({ title: e?.title });
	}, [e, reset]);

	const onCancel = () => {
		reset({ title: e?.title });
		setEditing(false);
	};

	const handleSave = (data) => {
		onSave(e.id, data);
		setEditing(false);
	};
	return (
		<div className=" grid grid-cols-5 items-center gap-5 rounded-xl shadow-lg py-2 hover:shadow-amber-700 outline-none shadow-gray-700 text-sm lg:text-lg mx-5 px-2 md:px-5 my-2 lg:my-5 bg-gray-700/30 transition-all">
			<div className=" col-span-4">
				<label className="label mx-2 lg:mx-5 mb-1 text-white">Title</label>
				<input
					type="text"
					className="input bg-gray-700/30 p-2 text-xs lg:text-sm border-0 w-full text-white outline-none resize-none whitespace-pre-wrap break-words"
					id="title"
					disabled={!editing}
					defaultValue={e?.title}
					{...register("title", {
						required: true,
					})}
				/>
			</div>
			{errors.title && <span className="label-text-alt text-error">{errors.title.message}</span>}
			{editing ?
				<div className="flex justify-center items-center gap-5 border-l-2 border-black pl-3">
					<button
						className=" text-green-600 hover:scale-105 hover:bg-[#7b5e1582] rounded-full p-2 transition-all duration-200"
						onClick={handleSubmit(handleSave)}>
						<LiaSave size={smSize} />
					</button>
					<button className="text-red-700 hover:scale-105 hover:bg-[#7b5e1582] rounded-full p-2 transition-all duration-200">
						<MdOutlineCancel size={smSize} onClick={onCancel} />
					</button>
				</div>
			:	<div className="flex justify-center items-center gap-5 border-l-2 border-black pl-3">
					<button
						className="text-white hover:scale-105 hover:bg-[#7b5e1582] rounded-full p-2  transition-all duration-200"
						onClick={() => setEditing(true)}>
						<CiEdit size={smSize} />
					</button>
				</div>
			}
		</div>
	);
};

export default ResearchTitle;
