import db from "@/db.json";
import findAndSortDiscountedProducts, {
	DiscountedProduct,
} from "../discountedProduct";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./sliderDiscounted.css";
import { Pagination } from "swiper/modules";

import './sliderDiscounted.css'

export default function ShowDiscountedProducts() {
	// Call the function and get the sorted discounted products
	const sortedDiscountedProducts: DiscountedProduct[] =
		findAndSortDiscountedProducts(db);

	// Print the sorted discounted products
	console.log("====================================");
	console.log(sortedDiscountedProducts);
	console.log("====================================");
	// sortedDiscountedProducts.forEach((product) => {
	//   console.log(`${product.category} - ${product.name}: Discount ${product.discountPercentage}%, Price ${product.price}`);
	// });

	return (
		<div className="bg-customGreen h-96 p-2">
      <div className="text-2xl text-white m-1"> تخفیفات شگفت انگیز</div>
			<Swiper
				slidesPerView={4}
				spaceBetween={30}
				centeredSlides={true}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className="mySwiper">
				{sortedDiscountedProducts.map((e) => (
					<SwiperSlide>
            <div>
              <div> <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="" /></div>
              <div>
                <div>{e.name}</div>
                <div>{e.price}</div>
                <div>{e.discountPercentage}</div>
              </div>
            </div>
					</SwiperSlide>
				))}
				{/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide> */}
			</Swiper>
		</div>
	);
}
