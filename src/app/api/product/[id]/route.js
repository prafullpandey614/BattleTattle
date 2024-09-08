const { NextRequest, NextResponse } = require("next/server");
import connectDB from "@/lib/connectDB";
import Product from "@/models/Product";


const GET = async(req,{params}) => {
    try {
        await connectDB();
        console.log("Request Object  :  ",params);
        const obj = await Product.findById(params.id)
        return NextResponse.json({"message" : obj})
    } catch (error) {
        console.log("Error Occured : ",error)
    }
}

export {GET}