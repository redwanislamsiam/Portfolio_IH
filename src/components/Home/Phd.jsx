import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../../assets/images/PhdImage/img1.jpg"; 
import img2 from "../../assets/images/PhdImage/img2.jpg"; 
import img3 from "../../assets/images/PhdImage/img3.jpg"; 
import img4 from "../../assets/images/PhdImage/img4.jpg"; 
import img5 from "../../assets/images/PhdImage/img5.jpg"; 
import defaultImg from "../../assets/default.jpg"; 


const Phd = () => {
    const imagesPhd= [img1, img2, img3, img4, img5]; 
    const imagesBBA = [defaultImg, defaultImg, defaultImg]; 
    
    const education = [
        {
            images: imagesPhd,
            description: "I am currently employed as an assistant professor in the Department of Finance at Jagannath University in Dhaka, Bangladesh. In addition to that, I am continuing my Ph.D. at the School of Management, Universiti Sains Malaysia. Also, I am working as a graduate research assistant (GRA) in the School of Management, Universiti Sains Malaysia.", 
        },
        {
            images: imagesBBA,
            description: "I have completed my bachelor's (BBA) and master's (MBA) degrees from Jagannath University, Dhaka, Bangladesh. I started working as a lecturer at the same university in 2016 and have been there ever since. As a faculty member in the Finance Department, I have grown my research interest in the financial sector.", 
        }
    ]


    return (
		<div>
			{education.map((e) => (
				<div className="grid grid-cols-1 md:grid-cols-2 my-10 md:my-40">
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
							{e.images.map((img, index) => (
								<SwiperSlide key={index} className="">
									<img src={img} alt="image" className="rounded-xl" />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
					<div className="my-auto text-center mx-10 rounded-xl shadow-lg shadow-gray-700 mt-20  px-10 bg-gray-700/30 py-5 text-xs md:text-lg">
						<p className="text-white">
							{e.description}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Phd;