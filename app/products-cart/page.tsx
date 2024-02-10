import ButtonNav from "@/components/buttonNav/buttonNav";
import products from "@/productCart.json";
export default function page() {
	return (
		<div className="min-h-screen bg mx-4">
			<div className="w-full text-center p-4 mb-2 text-xl">
				سبد خرید من
			</div>
			{products.products.map((e: any) => (
				<div className="flex w-full h-28  border-y border-y-slate-300 border-dotted ">
					<div className="bg-re-900 p-2 w-1/3 ">
						<img
							src={e.image}
							alt="IMAGE"
							className=" w-24 rounded-lg"
						/>
					</div>
					<div className="bg-sk-900 p-2 w-2/3 flex flex-col justify-between">
						<div className="text-md p-2 font-extrabold text-xl">
							{e.name}
						</div>
						<div className="flex justify-between px-4 py-2">
							<div className="text-customGreen font-extrabold  p-2">
								<button className="btn btn-square btn-outline btn-sm text-2xl">-</button>
                <span className="mx-2 text-2xl text-black">2</span>
								<button className="btn btn-square btn-outline btn-sm text-2xl">+</button>
							</div>
							<div>ریال {e.price}</div>
						</div>
					</div>
				</div>
			))}
      <button className="btn btn-block bg-customGreen text-white border-0 fixed bottom-20 left-0">Go to chekout</button>
			<ButtonNav />
		</div>
	);
}
