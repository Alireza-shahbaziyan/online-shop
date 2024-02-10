import db from "@/db.json";
import Image from "next/image";
import fristProductImage from "@/public/images/product/Salmon.jpeg";
import secondProductImage from "@/public/images/product/chaklet.jpeg";
import findAndSortDiscountedProducts, {
	DiscountedProduct,
} from "../discountedProduct";

export default function ShowDiscountedProducts() {
	// Call the function and get the sorted discounted products
	const sortedDiscountedProducts: DiscountedProduct[] =
		findAndSortDiscountedProducts(db);
	// Print the sorted discounted products
	// sortedDiscountedProducts.forEach((product) => {
	//   console.log(`${product.category} - ${product.name}: Discount ${product.discountPercentage}%, Price ${product.price}`);
	// });
	const cardsList = sortedDiscountedProducts.slice(0, 2);
	return (
		<div className="bg-customGreen h-80 ">
			<div className="text-2xl text-white m-1"> تخفیفات شگفت انگیز</div>
			<div className="p-2 flex justify-evenly items-center">
				<div className="bg-white h-56 w-full m-2 rounded-xl p-2">
					<div>
						<Image
							src={fristProductImage}
							alt=""
							className="w-full h-32"
						/>
					</div>
					<div className="text-xl">{cardsList[1].name}</div>
					<div className="flex justify-content-between items-center w-full h-16 text-md">
						<div className="flex w-full justify-between">
							<div className="font-extrabold text-lg ">ریال{cardsList[1].price}</div>
							<a className="cursor-pointer bg-success rounded-2xl text-white">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="30"
									height="30"
									fill="currentColor"
									className="bi bi-plus"
									viewBox="0 0 16 16">
									<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
								</svg>
							</a>
						</div>
					</div>
				</div>
				<div className="bg-white h-56 w-full m-2 rounded-xl p-2">
					<div>
						<Image
							src={secondProductImage}
							alt=""
							className="w-full h-32"
						/>
					</div>
					<div className="text-xl">{cardsList[0].name}</div>
					<div className="flex justify-content-between items-center w-full h-16 text-md">
						<div className="flex w-full justify-between">
							<div className="font-extrabold text-lg ">ریال{cardsList[0].price}</div>
							<a className="cursor-pointer bg-success rounded-2xl text-white">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="30"
									height="30"
									fill="currentColor"
									className="bi bi-plus"
									viewBox="0 0 16 16">
									<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
