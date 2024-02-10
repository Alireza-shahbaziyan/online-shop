import Image from "next/image";


export interface Product {
	name: string;
	quantity: string;
	price: number;
	discount: boolean;
	discount_percentage?: number;
}

export interface Category {
	name: {
		fa: string;
		en: string;
	};
	products: Product[];
}

export default function BoxBody({
	fristProductInformation,
	secondProductInformation,
	title,
	fristImage,
	secondImage,
	clickFunc,
}: any) {
	const clickHandelProps = (infoProduct:any,imageProduct:any)=>{
		clickFunc(infoProduct,imageProduct);
	}
	return (
		<div className="p-2">
			<div className="flex justify-between items-center h-10">
				<div className="text-xl">{title}</div>
				<div className="text-customGreen btn btn-ghost text-lg">
					See all
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="bi bi-arrow-left-short"
						viewBox="0 0 16 16">
						<path
							fill-rule="evenodd"
							d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
						/>
					</svg>
				</div>
			</div>
			{/* cards */}
			<div className="flex w-full justify-evenly items-center h-60 md:h-72 my-8 p-1 ">
				<form action={""} className="m-2 flex flex-col justify-between">
					<div className="image">
						<Image
							src={fristImage}
							alt="IMAGE"
							width={200}
							height={200}
						/>
					</div>
					<div className="name text-lg">
						{fristProductInformation[1].name}
					</div>

					<div className="price w-full flex justify-between">
						<div className="text-md p-2" dir="ltr">
							{" "}
							ریال{fristProductInformation[1].price}
						</div>
						<div
							onClick={()=>clickHandelProps(fristProductInformation[0],fristImage)}
							className="bg-customGreen w-10 h-10 flex justify-center items-center rounded-full hover:w-9 hover:h-9">
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
				</form>
				<form action={""} className="m-2">
					<div className="image">
						<Image
							src={secondImage}
							alt="IMAGE"
							width={200}
							height={200}
						/>
					</div>
					<div className="name text-lg">
						{secondProductInformation[0].name}
					</div>

					<div className="price w-full flex justify-between">
						<div className="text-md p-2" dir="ltr">
							{" "}
							ریال{secondProductInformation[0].price}
						</div>
						<div
							onClick ={()=>clickHandelProps(secondProductInformation[0],secondImage)}
							className="bg-customGreen w-10 h-10 flex justify-center items-center rounded-full hover:w-9 hover:h-9">
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
				</form>
			</div>
		</div>
	);
}
// DMXO
