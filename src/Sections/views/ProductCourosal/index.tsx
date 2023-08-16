//  "use client"
// import "slick-carousel/slick/slick.css"; 
// import React, { Component, ReactNode } from "react";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { FC } from "react"
// import { oneProductType } from "@/utils/ProductsDataArrayAndType";
// import Cardss from "../Cardss";
// // const ProductCorousal:FC<{ProductData:Array<oneProductType>}>=({ProductData})=>{
     
// //     return(
// //         <div className="flex">
// //             {ProductData.map((item:oneProductType,index:number)=>(
// //                 <Cardss singleProductData={item}/>
// //             ))}
             
// //         </div>
// //     )
// // }
// //  export default ProductCorousal
// export default class ProductCourosal extends Component<{ProductData:Array<oneProductType>}>{
//     render():ReactNode{
//         const settings = {
//             dots: true,
//             infinite: true,
//             speed: 500,
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             responsive: [
//                 {
//                   breakpoint: 1024,
//                   settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                   }
//                 }
//               ]
//           };
//         return(
//             <div>
//              <div className="max-w-7xl mx-auto mt-16">
// <p className='text-blue-700 font-bold text-center'>PRODUCTS</p>
// <p className='text-black font-bold text-2xl lg:text-3xl text-center pt-3'>Check What We Have</p>
//     </div>
//     <div className="mt-16">
//             <Slider {...settings}>
//             {this.props.ProductData.map((item:oneProductType,index:number)=>(
//                  <Cardss singleProductData={item}/>
//              ))}
//             </Slider></div>
//           </div>
//         )
//     }
// }


"use client"
import { oneProductType } from "@/utils/ProductsDataArrayAndType"
import { Component, FC, ReactNode } from "react"
import Cardss from "../Cardss"

const ProductCarousel: FC<{ ProductData: Array<oneProductType> }> = ({ ProductData }) => {
    let initialX: number;
    let isDragging = false;
    let tabBox: any;

    const isBrowser = () => typeof window !== "undefined";

    if (isBrowser()) {
        tabBox = document.querySelector(".scrollGrab");
    }

    // Desktop functions
    function mouseMoves(e: any) {
        if (!isDragging) return;
        if (tabBox) {
            tabBox.scrollLeft -= e.movementX;
        }
    };
    function mouseDown() {
        isDragging = true;
    }
    function mouseUp() {
        isDragging = false
    }

    // mobile functions
    function mouseMovesForMobile(e: any) {
        if (!isDragging) return;
        if (tabBox) {
            var currentX = e.touches[0].clientX;
            var movementX = currentX - initialX;
            tabBox.scrollLeft -= movementX / 5;
        }
    };
    function mouseDownForMobile(e: any) {
        isDragging = true;
        initialX = e.touches[0].clientX;
    };
    let dataToItrate = ProductData.slice(0, 15);

    return (
        <div className="space-y-4">
            <div className="text-center space-y-3">
                <p className="text-blue-800 text-sm">PROMOTIONS</p>
                <h3 className="text-3xl text-gray-800 font-bold">Our Promotions Events</h3>
            </div>
            <div
                onMouseMove={mouseMoves}
                onMouseDown={mouseDown}
                onMouseUp={mouseUp}
                className="select-none flex gap-4 overflow-x-hidden scrollGrab py-4 overflow-y-hidden"
                onTouchMove={mouseMovesForMobile}
                onTouchStart={mouseDownForMobile}
                onTouchEnd={mouseUp}
            >
                {dataToItrate.map((item: oneProductType, index: number) => (
                    <Cardss key={index + 4} singleProductData={item} />
                ))}
            </div>
        </div>
    )
}

export default ProductCarousel