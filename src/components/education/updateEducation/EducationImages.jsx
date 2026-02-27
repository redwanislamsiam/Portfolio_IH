import  { useEffect, useState } from 'react';
import authAPIClient from '../../../services/auth-api-client';
import useEducationContext from '../../../hooks/useEducationContext';

const EducationImages = ({educationId}) => {
	const [oldImages, setOldImages] = useState([]);
	const [images, setImages] = useState([]);
	const [previewImages, setPreviewImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const { setSMsg } = useEducationContext(); 

    const getImages = async () => {
		try {
            const res = await authAPIClient.get(`/educations/${educationId}/images/?user_id=2`);
            console.log(res); 
			setOldImages(res.data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getImages();
    }, [educationId]);
    


    const handleDeleteImage = async (id) => {
		try {
			const res = await authAPIClient.delete(`/educations/${educationId}/images/${id}/?user_id=2`);
			setOldImages((prevImages) => prevImages.filter((img) => img.id !== id));
			alert("Image deleted successfully!");
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};



	const handleImageChange = (e) => {
		const files = Array.from(e.target.files);
		setImages(files);
		setPreviewImages(files.map((file) => URL.createObjectURL(file)));
    };
    


    const handleImageUpload = async () => {
		setLoading(true);
		if (!images.length) return alert("No image was selected!");
		try {
			for (const image of images) {
				const formData = new FormData();
				formData.append("image", image);
				const res = await authAPIClient.post(`/educations/${educationId}/images/?user_id=2`, formData);
				getImages();
				setPreviewImages([]);
				if (res.status === 201) {
					setSMsg("Image Uploaded Successfully!");
				}
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
    };
    


    return (
		<div className="p-5">
			<label className="text-white text-xs lg:text-sm"> Click on the photo to delete it</label>
			{oldImages?.length > 0 && (
				<div className="flex flex-wrap gap-5 mt-2 justify-around">
					{oldImages.map((image, index) => (
						<button
							key={index}
							className="cursor-pointer group relative my-2"
							onClick={() => handleDeleteImage(image.id)}>
							<img
								src={image.image}
								alt="Preview"
								className="w-20 h-20 lg:w-30 lg:h-30 rounded-sm bg-white p-0.5 transition-all duration-200 group-hover:scale-105"
							/>

							{/* Red blur overlay */}
							<div className="absolute inset-0 bg-red-500/20 w-20 h-20 lg:w-30 lg:h-30 opacity-0 group-hover:opacity-100 transition-all duration-200 rounded-sm"></div>
						</button>
					))}
				</div>
			)}
			<input
				type="file"
				multiple
				accept="image/*"
				className="file-input file-input-bordered w-full text-xs lg:text-sm"
				onChange={handleImageChange}
			/>
			{previewImages.length > 0 && (
				<div className="flex flex-wrap gap-2 mt-2 justify-around">
					{previewImages.map((image, index) => (
						<img
							key={index}
							src={image}
							alt="Preview"
							className="w-20 h-20 lg:w-30 lg:h-30 my-2 rounded-sm bg-white p-0.5"
						/>
					))}
				</div>
			)}
			<button
				type="button"
				onClick={handleImageUpload}
				disabled={loading}
				className="btn btn-primary btn-xs lg:btn-md w-full px-6 mt-2">
				{loading ? "Uploading images..." : "Upload Images"}
			</button>
		</div>
	);
};

export default EducationImages;