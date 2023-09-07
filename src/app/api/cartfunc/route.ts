import { NextResponse } from "next/server";
import { db } from "@/lib/drizzle";
import cartTableDrizzle from "@/lib/drizzle";
export async function GET() {
    try{
        let allCartData=await db.select().from(cartTableDrizzle);
        console.log("data:",allCartData);
        return NextResponse.json({message:"no"})
    }catch(error){
        console.log("error",(error as{message:string}).message)
        return NextResponse.json({error})
    }
}