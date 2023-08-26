import { oneProductType } from "@/utils/ProductsDataArrayAndType";
import { responseType } from "@/utils/ProductsDataArrayAndType";
import CardAll from "@/Sections/views/CardAll";
import { FC } from "react"
import AddtoCart from "@/components/ui/AddtoCart";

async function fetchAllProductsData() {
    let res=await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-07-02/data/query/production?query=*[_type == "productsan"]`
, {
    next: {
      revalidate: 60
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch")
  }

  return res.json();
}


const Male = async ({ params }: { params: { ftype: string } }) => {
    let res: responseType = await fetchAllProductsData();
    return (
        <div
            className="grid grid-cols-2 md:grid-cols-3 py-10 lg:grid-cols-4 gap-4"
        >
            {res.result.map((items: oneProductType, index: number) => (
                <CardAll key={index} singleProductData={items} />
                
            ))}
            
        </div>
    )
}

export default Male