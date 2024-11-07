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

  const res = await fetch(url);

  if (!res.ok) {
    console.error('Failed to fetch products:', res.statusText);
    throw new Error('Failed to fetch products');
  }

  const data = await res.json();
  console.log('Fetched products:', data);

  return data;
};

export default getProducts;
