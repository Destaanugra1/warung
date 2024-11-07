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

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(
        `Failed to fetch products: ${res.status} ${res.statusText}`
      );
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      throw new Error("Invalid products data format");
    }

    console.log("Fetched products:", data);
    return data;
  } catch (error) {
    throw error;
  }
};

export default getProducts;
