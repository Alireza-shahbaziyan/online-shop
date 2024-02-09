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
  
  
  // Function to find and sort discounted products
 export default function findAndSortDiscountedProducts(data: { store: Store }): DiscountedProduct[] {
    let discountedProducts: DiscountedProduct[] = [];
  
    // Iterate through each category
    for (const category in data.store.categories) {
      // Iterate through each product in the category
      data.store.categories[category].products.forEach((product) => {
        // Check if the product has a discount
        if (product.discount) {
          discountedProducts.push({
            category: category,
            name: product.name,
            discountPercentage: product.discount_percentage || 0,
            price: product.price,
          });
        }
      });
    }
  
    // Sort discounted products based on discount percentage in descending order
    discountedProducts.sort((a, b) => b.discountPercentage - a.discountPercentage);
  
    return discountedProducts;
  }