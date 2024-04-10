import getProducts from "@/actions/get-products";
import getProduct from "@/actions/get-product";
import Container from "@/components/ui/container";
import ProductsList from "@/components/products-list";
import Gallery from "@/components/gallery";
import { Separator } from "@/components/ui/separator";

interface ProductPageProps {
    params: {
        productId: string;
    };
}

const ProductPage = async ({ params }: ProductPageProps) => {
    const product = await getProduct(params.productId);

    const currentProducts = await getProducts({
        categoryId: product?.category?.id,
    });

    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-8">
                        <Gallery images={product.images} />
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            {/* Info */}
                            <h3>Info</h3>
                        </div>
                    </div>
                    <Separator />
                    <ProductsList
                        title="Related Items"
                        items={currentProducts}
                    />
                </div>
            </Container>
        </div>
    );
};

export default ProductPage;
