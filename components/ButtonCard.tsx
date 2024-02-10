export default function ButtonCard({clickFunc}:any) {
	function clickHandelProps() {
		clickFunc()
	}
	return (
		<div onClick={clickHandelProps} className="bg-customGreen w-10 h-10 flex justify-center items-center rounded-full hover:w-9 hover:h-9">
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
	);
}
