import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  console.log('Fetching products from URL:', url);

  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error('Failed to fetch products:', res.statusText);
      throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      throw new Error("Invalid products data format");
    }

    console.log('Fetched products:', data);
    return data;

    

  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }

  
};


export default getProducts;
