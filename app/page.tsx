"use client";
//  import component from "../public/components/"
import SearchBox from "../components/searchBoxHedaer/SearchBoxHeader";
import AddressBox from "../components/addressBox/AddressBoxHeader";
import HeaderSlider from "../components/headerSlider/HeaderSlider";
import Categories from "@/components/categories/Categories";
import ShowDiscountedProducts from "@/components/showDiscountedProducts/ShowDiscountedProducts";

export default async function Home() {
	return (
		<div dir="rtl" className="flex flex-col items-center w-full bg-white">
			<header className="hedaer w-full flex flex-col justify-center">
				{/* search box */}
				<SearchBox />
				{/* header */}
				<AddressBox />
				{/* component slider with swiper */}
				<HeaderSlider />
				{/* categories component */}
				<Categories />
				{/* Show Discounted Products */}
				<ShowDiscountedProducts/>
			</header>
		</div>
	);
}	
