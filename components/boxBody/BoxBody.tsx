import Image from "next/image";
import { useState } from "react";

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
	backgroundColor,
	off,
}: any) {
	// add product counter to Second card
	const [Counter2, setCounter2] = useState(1);
	const [ShowForm2, setShowForm2] = useState(false);

	const increaseCounter2 = () => {
		setCounter2(Counter2 + 1);
		if (Counter2 > 0) {
			setShowForm2(true);
		}
	};
	const minusCounter2 = () => {
		if (Counter2 != 0) {
			setCounter2(Counter2 - 1);
		}
		if (Counter2 === 1) {
			setShowForm2(false);
		}
	};
	// add product counter to Frist card
	const [Counter1, setCounter1] = useState(1);
	const [ShowForm1, setShowForm1] = useState(false);

	const increaseCounter1 = () => {
		setCounter1(Counter1 + 1);
		if (Counter1 > 0) {
			setShowForm1(true);
		}
	};
	const minusCounter1 = () => {
		if (Counter1 != 0) {
			setCounter1(Counter1 - 1);
		}
		if (Counter1 === 1) {
			setShowForm1(false);
		}
	};
	const clickHandelProps = (
		infoProduct: any,
		imageProduct: any,
		id: number
	) => {
		clickFunc(infoProduct, imageProduct);
		id === 1 && setShowForm1(true);
		id === 2 && setShowForm2(true);
	};
	return (
		<div className={`p-2 ${backgroundColor}`}>
			<div
				className={
					backgroundColor === "bg-customGreen"
						? "flex justify-between items-center h-10 text-white"
						: "flex justify-between items-center h-10 "
				}>
				<div className="text-xl">{title}</div>
				<div className=" btn btn-ghost text-lg">
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
			<div className="flex w-full justify-evenly items-center h-60 md:h-80 my-8 p-1 border-b border-customGreen">
				<form className="m-2 flex flex-col justify-between bg-white p-4 px-5 w-2/4 rounded-lg relative">
					<div className="image w-full h-40 flex justify-center">
						<Image
							className="w-full"
							src={fristImage}
							alt="IMAGE"
						/>
					</div>
					<div className="name text-lg p-2">
						{fristProductInformation[1].name}
					</div>

					<div className="price w-full flex justify-between ">
						<div
							className="text-md p-2 flex justify-content-between items-center  w-full"
							dir="rtl">
							<span>تومان{fristProductInformation[1].price}</span>
							<span
								className={`w-10 mx-2 flex justify-center items-center rounded-full h-10 text-lg bg-red-500 text-white ${
									off ? "block" : "hidden"
								}`}>
								۲۰٪
							</span>
						</div>
						{!ShowForm1 && (
							<div
								onClick={() =>
									clickHandelProps(
										fristProductInformation[0],
										fristImage,
										1
									)
								}
								className="absolute left-1 bottom-24  bg-customGreen w-10 h-10 flex  justify-center items-center rounded-full hover:w-9 hover:h-9">
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
						)}
						{ShowForm1 && (
							<div className="absolute left-1 bottom-24 bg-orange-400 rounded-full p-2 w-24 flex justify-between">
								<a
									className="cursor-pointer text-white  rounded-full"
									onClick={increaseCounter1}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										fill="currentColor"
										className="bi bi-plus"
										viewBox="0 0 16 16">
										<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
									</svg>
								</a>
								<span className="text-white text-xl">
									{Counter1}
								</span>
								<a
									className="cursor-pointer text-white  rounded-full"
									onClick={minusCounter1}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										fill="currentColor"
										className="bi bi-dash"
										viewBox="0 0 16 16">
										<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
									</svg>
								</a>
							</div>
						)}
					</div>
				</form>
				<form className="m-2 flex flex-col justify-between bg-white p-4 px-5 w-2/4 rounded-lg relative">
					<div className="image w-full h-40 flex justify-center">
						<Image className="w-full" src={secondImage} alt="IMAGE"/>
					</div>
					<div className="name text-lg p-2">
						{secondProductInformation[1].name}
					</div>

					<div className="price w-full flex justify-between ">
						<div
							className="text-md p-2 flex justify-content-between items-center  w-full"
							dir="rtl">
							<span>
								تومان{secondProductInformation[1].price}
							</span>
							<span
								className={`w-10 mx-2 flex justify-center items-center rounded-full h-10 text-lg bg-red-500 text-white ${
									off ? "block" : "hidden"
								}`}>
								۲۰٪
							</span>
						</div>
						{!ShowForm2 && (
							<div
								onClick={() =>
									clickHandelProps(
										secondProductInformation[0],
										secondImage,
										2
									)
								}
								className="absolute left-1 bottom-24  bg-customGreen w-10 h-10 flex  justify-center items-center rounded-full hover:w-9 hover:h-9">
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
						)}
						{ShowForm2 && (
							<div className="absolute left-1 bottom-24 bg-orange-400 rounded-full p-2 w-24 flex justify-between">
								<a
									className="cursor-pointer text-white  rounded-full"
									onClick={increaseCounter2}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										fill="currentColor"
										className="bi bi-plus"
										viewBox="0 0 16 16">
										<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
									</svg>
								</a>
								<span className="text-white text-xl">
									{Counter2}
								</span>
								<a
									className="cursor-pointer text-white  rounded-full"
									onClick={minusCounter2}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										fill="currentColor"
										className="bi bi-dash"
										viewBox="0 0 16 16">
										<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
									</svg>
								</a>
							</div>
						)}
					</div>
				</form>
			</div>
		</div>
	);
}
// DMXO
