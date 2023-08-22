import BASE_PATH_FORAPI from "@/Component/shared/BasePath";
import AllProductsCompo from "@/Sections/views/AllProducts";

async function fetchAllProductData() {
    let res = await fetch(`${BASE_PATH_FORAPI}/api/productsann?start=0&end=10`, {
        next: {
            revalidate: 120
        }
    })
    if (!res.ok) {
        throw new Error("Failed to fetch")
    }
    return res.json();
};

const allProductsData = async () => {
    const ProdutcData = await fetchAllProductData()
    console.log(ProdutcData)
    return (
        <AllProductsCompo ProdutcData={ProdutcData} />
    )
}

export default allProductsData
