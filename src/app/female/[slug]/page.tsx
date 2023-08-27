import { oneProductType } from "@/utils/ProductsDataArrayAndType";
import CardAll from "@/Sections/views/CardAll";
import { responseType } from "@/utils/ProductsDataArrayAndType";
import { FC } from "react"
import AddtoCart from "@/components/ui/AddtoCart";

async function fetchAllProductsData() {
    let res=await fetch(`https://xcn24sra.api.sanity.io/v2023-07-02/data/query/production?query=*%5B_type%3D%3D%22productsan%22+%26%26+productTypes%5B0%5D%3D%3D%22Female%22%5D`
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


const Female = async ({ params }: { params: { ftype: string } }) => {
  let res: responseType = await fetchAllProductsData();
  if (params.ftype !== "Female") {
    let orginalSortedDataOfParams = res.result.filter((items: oneProductType) => items.productTypes[1] === params.ftype)
    res = { result: orginalSortedDataOfParams }
  }
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

export default Female