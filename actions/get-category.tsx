import { Category } from "@/types"

const URL = `${process.env.PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const url = `${URL}/${id}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Failed to fetch category: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    if (!data || typeof data !== 'object') {
      throw new Error("Invalid category data format");
    }

    console.log("Fetched category:", data);
    return data;
  } catch (error) {
    console.error("Error in getCategory:", error);
    throw error;
  }
};


export default getCategory;