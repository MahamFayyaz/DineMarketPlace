'use client'
import { Button } from "./button"
import { useDispatch } from "react-redux"
import { cartActions } from "@/store/slice/CartSlice"
export default function AddtoCart() {
    const dispatch=useDispatch()
    const addItem=()=>{
      dispatch(cartActions.addToCart({ product: {}, quantity: 1 }));
    }
  return (
    <div>
        <Button onClick={addItem}>Add to Cart</Button>
    </div>
  )
}
