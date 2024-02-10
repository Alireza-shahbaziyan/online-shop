// use image library next-js
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
//  import images from public/images
import fristSlide from "../../public/images/sliderImage/sliderImage2.webp";
import secondSlide from "../../public/images/sliderImage/sliderImage3.webp";
import threeSlide from "../../public/images/sliderImage/sliderImage1.webp";

import "./styles.css";

// import required modules
import { Scrollbar } from "swiper/modules";

export default function App() {
	return (
		<div className="h-52">
			<Swiper
				scrollbar={{
					hide: true,
				}}
				modules={[Scrollbar]}
				className="mySwiper">
				<SwiperSlide >
					<Image 
						src={fristSlide}
						alt="Picture of the author"
						width={500}
						height={500}
					/>
				</SwiperSlide>
        <SwiperSlide >
					<Image
						src={secondSlide}
						alt="Picture of the author"
						//width={500}
						//height={500}
					/>
				</SwiperSlide>
        <SwiperSlide >
					<Image
						src={threeSlide}
						alt="Picture of the author"
						//width={500}
						//height={500}
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
