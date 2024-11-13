
import getBanner from "@/actions/get-banner";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import BannerCarousel from "../../components/BannerCarousel";

export const revalidate = 0;

const HomePage = async () => {
  try {
    const products = await getProducts({ isFeatured: true });
    const bannerIds = [
      "fde47bb6-aa59-44b1-bb9f-85563daaf957",
      "201f8e9f-d90d-4ae4-bdea-256929b7eeca",
      "abc2c244-5de3-4bab-a511-946a672645d0",
    ];
    const banners = await Promise.all(bannerIds.map(id => getBanner(id)));



    return (
      <Container>
        <div className="space-y-10 pb-10">
          <BannerCarousel banners={banners} />
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
