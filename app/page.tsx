"use client"
import db from '@/db.json'
import axios from 'axios';
//  import component from "../public/components/"
import SearchBox from "../components/searchBoxHedaer/SearchBoxHeader";
import AddressBox from "../components/addressBox/AddressBoxHeader";
import HeaderSlider from "../components/headerSlider/HeaderSlider";
import Categories from "@/components/categories/Categories";
import ShowDiscountedProducts from "@/components/showDiscountedProducts/ShowDiscountedProducts";
import ButtonNav from "@/components/buttonNav/buttonNav";
import BoxBody from "@/components/boxBody/BoxBody";
import Image1 from "@/public/images/product/cardImage111.png"
import Image2 from "@/public/images/product/cardImage112.png"
import Image3 from "@/public/images/product/cardImage113.jpg"
import Image4 from "@/public/images/product/cardImage114.jpg"
import Image5 from "@/public/images/product/cardImage115.jpg"
import Image6 from "@/public/images/product/cardImage116.jpg"
import Image7 from "@/public/images/product/cardImage117.jpg"
import Image8 from "@/public/images/product/cardImage118.png"
import Footer from '@/components/footer/Footer';

export default async function Home() {
	const handleButtonClick=async (product:any,image:any) => {
		product.image = image.src
		try {
			await axios.post('http://localhost:5173/products', product);
			console.log('Product added to productCart.json');
		  } catch (error) {
			console.error('Error adding product to productCart.json', error);
		  }
	  };
   
	return (
		<div className="flex flex-col items-center w-full bg-white shadow-2xl relative">
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
				{/* best selling */}
				<BoxBody clickFunc={handleButtonClick} fristImage={Image1} secondImage={Image5} title="پر فروش ترین ها" fristProductInformation={db.store.categories.Protein.products} secondProductInformation={db.store.categories['Ice Cream'].products} />
				<BoxBody clickFunc={handleButtonClick} fristImage={Image2} secondImage={Image6} title="محبوب ترین" fristProductInformation={db.store.categories.Plants.products} secondProductInformation={db.store.categories.Beverage.products} />
				<BoxBody clickFunc={handleButtonClick} fristImage={Image3} secondImage={Image7} title="پر فروش ترین ها" fristProductInformation={db.store.categories.Stationery.products} secondProductInformation={db.store.categories.Fruit.products} />
				<BoxBody clickFunc={handleButtonClick} fristImage={Image4} secondImage={Image8} title="پر فروش ترین ها" fristProductInformation={db.store.categories.Bread.products} secondProductInformation={db.store.categories.Stationery.products} />
				<div className='mb-16'></div>
				<ButtonNav />
				<Footer/>

			</header>
		</div>
	);
}	
