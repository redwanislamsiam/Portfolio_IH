import { useEffect } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import defaultImg from "../../assets/default.jpg";
import useEducationContext from "../../hooks/useEducationContext";
import useAuthContext from "../../hooks/useAuthContext";
import { Link } from "react-router";
import { PiPlus } from "react-icons/pi";
import SuccessAlert from "../alerts/SuccessAlert";

const Phd = () => {
	const { user } = useAuthContext();
	const { fetchEducation, educations, deleteEducation, sMsg, setSMsg } = useEducationContext();


	useEffect(() => {
		fetchEducation();
	}, []);


	useEffect(() => {
		if (sMsg) {
			const timer = setTimeout(() => {
				setSMsg(null);
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [sMsg]);

	console.log(educations); 
	return (
		<div>
			{user && (
				<Link to={"addEducation"}>
					<button className="text-shadow-gray-600 text-sm lg:text-lg flex justify-between items-center my-10 lg:my-20 mx-auto btn bg-linear-to-l from-[#926114] hover:from-[#724d12] border-0 rounded-xl px-10 py-2 gap-3">
						<span>Add New Degree</span>
						<PiPlus size={23} className="stroke-20" />
					</button>
				</Link>
			)}
			{sMsg && <SuccessAlert err={sMsg} />}
			{educations?.map((e, index) => (
				<div key={index} className="grid grid-cols-1 md:grid-cols-2 my-10 md:my-40">
					<div className="w-72 md:w-150 mx-auto bg-amber-600/20 rounded-xl shadow-xl shadow-white/15 p-2">
						<Swiper
							spaceBetween={30}
							centeredSlides={true}
							autoplay={{
								delay: 2500,
								disableOnInteraction: false,
							}}
							pagination={{
								clickable: true,
								dynamicBullets: true,
							}}
							modules={[Autoplay, Pagination, Navigation]}
							className="mySwiper">
							{e?.images.length === 0 ?
								<SwiperSlide>
									<div className="aspect-[3/2] w-full">
										<img
											src={defaultImg}
											alt="default"
											className="w-full h-full object-cover rounded-xl"
										/>
									</div>
								</SwiperSlide>
							:	e.images.map((img, index) => (
									<SwiperSlide key={index}>
										<div className="aspect-[3/2] w-full">
											<img
												src={img.image || defaultImg}
												alt="image"
												className="w-full h-full object-cover rounded-xl"
											/>
										</div>
									</SwiperSlide>
								))
							}
						</Swiper>
					</div>
					<div className="flex flex-col justify-between gap-5 lg:gap-10 my-auto text-center mx-10 rounded-xl shadow-lg shadow-gray-700 mt-5 lg:mt-10  px-10 bg-gray-700/30 py-5 text-xs md:text-lg">
						<p className="text-white">{e.description}</p>
						{user && (
							<div className="grid grid-cols-2">
								<Link to={`editEducation/${e.id}`}>
									<button className="btn btn-ghost hover:bg-blue-950 border-0 text-white mt-3 w-full">
										Edit
									</button>
								</Link>
								<button
									onClick={() => deleteEducation(e.id)}
									className="btn btn-ghost hover:bg-red-950 border-0 text-white mt-3 w-full">
									Delete
								</button>
							</div>
						)}
					</div>
				</div>
			))}
		</div>
	);
};

export default Phd;
