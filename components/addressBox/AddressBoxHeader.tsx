

export default function AddressBoxHeader() {
  return (
    <div className="flex items-center justify-between p-2">
                    <div className="flex">
                    <div className="text-customGreen p-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-geo-alt-fill"
                            viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <div>آدرس انتخابی</div>
                        <div className="text-xs text-gray-300">خ.آزادی</div>
                    </div>
                    </div>

                    <div className="btn btn-ghost text-sky-500">
                    تغییر آدرس
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                    </svg>
                    </div>
                </div>
  )
}
