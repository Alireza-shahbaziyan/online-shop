import Image from "next/image";
import proteinImage from "@/public/images/categories/Protein.webp";
import BeveragesImage from "@/public/images/categories/Beverages.webp";
import BreadsImage from "@/public/images/categories/Breads.webp";
import VegetablesImage from "@/public/images/categories/Vegetables.webp";

import iceCreamesImage from "@/public/images/categories/ice-creams.webp";
import plants from "@/public/images/categories/plants.webp";
import sweets from "@/public/images/categories/sweets.png";
import stationery from "@/public/images/categories/stationery.webp";

import db from "@/db.json";

export default function Categories() {
	const categoriesData = db.store.categories;
	return (
		<>

			<div className="flex justify-around p-4">
				<div className="flex justify-center items-center flex-col w-32">
					<Image
						src={proteinImage}
						alt="Picture of the author"
						width={52}
						height={52}
					/>
					<div>{categoriesData.Protein.name.fa}</div>
				</div>
				<div className="flex justify-center items-center flex-col w-32">
					<Image
						src={VegetablesImage}
						alt="Picture of the author"
						width={52}
						height={52}
					/>
					<div>{categoriesData.Fruit.name.fa}</div>
				</div>
				<div className="flex justify-center items-center flex-col w-32">
					<Image
						src={BeveragesImage}
						alt="Picture of the author"
						width={52}
						height={52}
					/>
					<div>{categoriesData.Beverage.name.fa}</div>
				</div>
				<div className="flex justify-center items-center flex-col w-32">
					<Image
						src={BreadsImage}
						alt="Picture of the author"
						width={52}
						height={52}
					/>
					<div>{categoriesData.Bread.name.fa}</div>
				</div>
			</div>
			<div className="flex justify-around p-4">
				<div className="flex justify-center items-center flex-col w-32">
					<Image
						src={sweets}
						alt="Picture of the author"
						width={52}
						height={52}
					/>
					<div>{categoriesData.Sweets.name.fa}</div>
				</div>
				<div className="flex justify-center items-center flex-col w-32">
					<Image
						src={iceCreamesImage}
						alt="Picture of the author"
						width={52}
						height={52}
					/>
					<div>{categoriesData["Ice Cream"].name.fa}</div>
				</div>
				<div className="flex justify-center items-center flex-col w-32">
					<Image
						src={stationery}
						alt="Picture of the author"
						width={52}
						height={52}
					/>
					<div>{categoriesData.Stationery.name.fa}</div>
				</div>
				<div className="flex justify-center items-center flex-col w-32">
					<Image
						src={plants}
						alt="Picture of the author"
						width={52}
						height={52}
					/>
					<div>{categoriesData.Plants.name.fa}</div>
				</div>
			</div>
		</>
	);
}
