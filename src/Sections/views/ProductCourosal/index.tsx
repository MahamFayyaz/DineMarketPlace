"use client"
import { FC } from "react"
import { oneProductType } from "@/utils/ProductsDataArrayAndType";
import Cardss from "../Cardss";
const ProductCorousal:FC<{ProductData:Array<oneProductType>}>=({ProductData})=>{
    console.log(ProductData);  
    return(
        <div>
            {ProductData.map((item:oneProductType,index:number)=>(
                <Cardss singleProductData={item}/>
            ))}
             
        </div>
    )
}
export default ProductCorousal