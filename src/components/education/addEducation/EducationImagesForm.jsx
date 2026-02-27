import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import SuccessAlert from '../../alerts/SuccessAlert';
import authAPIClient from '../../../services/auth-api-client';

const EducationImagesForm = () => {
    const [previewImages, setPreviewImages] = useState([]);
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(false);
	const [degree, setDegree] = useState("");
	const { educationId } = useParams();
	const navigate = useNavigate();
	const [msg, setMsg] = useState("");
    const location = useLocation();
    


	useEffect(() => {
		if (location.state?.sMsg) {
			setMsg(location.state?.sMsg);
			setDegree(location.state?.degree); 
			const timer = setTimeout(() => {
				setMsg(null);
			}, 3000);
			return () => clearTimeout(timer);
		}
    }, [location.state]);
    



	const handleImageChange = (e) => {
		const files = Array.from(e.target.files);
		setImages(files);
		setPreviewImages(files.map((file) => URL.createObjectURL(file)));
	};



	const handleImageUpload = async () => {
		if (!images.length) {
			return alert("No image was selected!");
		}
		setLoading(true);
		try {
			for (const image of images) {
				const formData = new FormData();
				formData.append("image", image);
				const res = await authAPIClient.post(`/educations/${educationId}/images/?user_id=2`, formData);
				if (res.status === 201) {
					navigate("/");
				}
			}
			alert("Images uploaded successfully!");
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};



    return (
		<div className="lg:w-1/2 mx-auto my-20 lg:my-50 px-2">
			{msg && <SuccessAlert err={msg} />}
			<h3 className="text-xl lg:text-3xl text-gray-300 font-bold my-10 lg:my-20 headTitle text-center">
				Upload {degree} Images
			</h3>
			{previewImages.length > 0 && (
				<div className="flex gap-2 mt-2 flex-wrap justify-around">
					{previewImages.map((src, index) => (
						<img
							key={index}
							src={src}
							alt="Preview"
							className="w-20 h-20 my-2 rounded-sm bg-amber-50 p-0.5 object-cover"
						/>
					))}
				</div>
			)}
			<input
				type="file"
				multiple
				accept="image/*"
				className="file-input file-input-bordered text-xs lg:text-sm outline-none  w-full"
				onChange={handleImageChange}
			/>

			<button
				onClick={handleImageUpload}
				disabled={loading}
				className="btn  btn-xs lg:btn-md btn-primary w-full mt-2">
				{loading ? "Uploading images..." : "Upload Images"}
			</button>
		</div>
	);
};

export default EducationImagesForm;