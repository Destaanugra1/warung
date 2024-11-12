import getBanner from "@/actions/get-banner";
import getProducts from "@/actions/get-products";
import Banner from "@/components/banner";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  try {
    const products = await getProducts({ isFeatured: true });
    const banner = await getBanner("fde47bb6-aa59-44b1-bb9f-85563daaf957");

    // console.log("Fetched banner:", banner);
    // console.log("Fetched products:", products);

    return (
      <Container>
        <div className="space-y-10 pb-10">
          <Banner data={banner} />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Produk Unggulan" items={products} />
          </div>
        </div>
      </Container>
    );
  } catch (error) {
    console.error("Error in HomePage:", error);
    return <div>Error loading page</div>;
  }
};

export default HomePage;
