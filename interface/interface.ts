export interface Product {
	name: string;
	quantity: string;
	price: number;
	discount: boolean;
	discount_percentage?: number;
    detail?:string;
}

export interface Category {
	name: {
		fa: string;
		en: string;
	};
	products: Product[];
}

export interface Store {
	categories: {
		[category: string]: Category;
	};
}

export interface DiscountedProduct {
	category: string;
	name: string;
	discountPercentage: number;
	price: number;
}
