import { oneProductType } from "@/utils/ProductsDataArrayAndType";
import CardAll from "@/Sections/views/CardAll";
import { responseType } from "@/utils/ProductsDataArrayAndType";
import { FC } from "react"

async function fetchAllProductsData() {
    let res=await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-07-02/data/query/production?query=*[_type == "productsan" ]`
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