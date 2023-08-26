import CartSlice from '@/store/slice/CartSlice'
import Quantity from '@/utils/Quantity'
import React from 'react'
import AddtoCart from '@/components/ui/AddtoCart'
import { FC } from 'react'
import { responseType } from '@/utils/ProductsDataArrayAndType'
import { ProductDetail } from '@/Sections/views/ProductDetail'

async function fetchPreviewData(slug:string){
  let res=await fetch(`https://xcn24sra.api.sanity.io/v2023-07-02/data/query/production?query=*%5B_type%3D%3D%22productsan%22+%26%26+slug.current%3D%3D%22${slug}%22%5D`)
  return res.json()
}
const Catalog= async ({params}:{params:{slug:string}})  => {
      let data:responseType=await fetchPreviewData(params.slug)
      return(
        <div>
          <ProductDetail item={data.result[0]}/>
        </div>
      )
    
  }
  export default Catalog;


//  const Catalog:FC<{params:{slug:string}}> = ({params}) => {
//     console.log(params.slug)
//   return (
//     <div><div>{params.slug}
//     </div>
//    Quantity=<Quantity/>
//    <AddtoCart/>
//    </div>

//   )
// }
// export default Catalog;