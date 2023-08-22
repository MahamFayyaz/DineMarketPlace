import { oneProductType } from "@/utils/ProductsDataArrayAndType";
import { createClient } from "next-sanity";
import { NextRequest, NextResponse } from "next/server";
import { SanityClient } from "sanity";

const client:SanityClient = createClient({
  projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`,
  dataset: `${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
  apiVersion: "2022-03-25",
  useCdn: false,
});

export async function GET(request:NextRequest) {
  const originalData:Array<oneProductType>=[];
  const url=request.nextUrl.searchParams
 

   
    // let response = await client.fetch(`*[_type=="productsan"]`);
    // return NextResponse.json({ response });
    let res=await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-07-02/data/query/production?query=*[_type == "productsan"]`)
    let dataFrom_APi = await res.json();
    originalData.push(...dataFrom_APi.result)

    if (url.has("start") || url.has("end")) {
        if (originalData[Number(url.get("start"))]) {
            let productArray = originalData.slice(Number(url.get("start")), Number(url.get("end")))
            return NextResponse.json({ productArray })
        }
        return NextResponse.json({ productArray: "Not found" })

    }

    return NextResponse.json({ originalData })
};