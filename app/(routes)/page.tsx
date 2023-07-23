import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

/* Components */
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/containter"

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true })
    const billboard = await getBillboard("eef4c20a-8f2e-4302-9957-e69111390f5a");
    return ( 
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products}/>
                </div>
            </div>
        </Container>
     );
}
 
export default HomePage;