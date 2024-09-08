import { NextResponse } from "next/server"
import connectDB from "@/lib/connectDB"
import Product from "@/models/Product"
import mongoose from "mongoose"

const Dummydata = [
    {
        "title" : "Arctic Club",
        "description" : "Join Us and get ready for a bang in dance Industry...",
        "image" : "https://th.bing.com/th/id/R.92d2f52fabb6e1a1a667e80f64bc2e0a?rik=AhiLoQ0uCj7uXA&riu=http%3a%2f%2fi.dailymail.co.uk%2fi%2fpix%2f2015%2f09%2f05%2f08%2f2BFA1AE400000578-0-image-a-18_1441437377914.jpg&ehk=SuK1hn7I2c9lpfnK2yjSsJ9q4qDugNo4R9%2bHwW%2bnUEA%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        "title" : "Humanoid Bot",
        "description" : "Freaky Tailor Bot Guide for all your collections",
        "image" : "https://th.bing.com/th/id/OIP.jTE__cmysmzZ0II90oD0PwHaLI?rs=1&pid=ImgDetMain"
    },
    {
        "title" : "ChargeBee",
        "description" : "Phone Fueling Services , Surprised ! Yeah Dude :) why not",
        "image" : "https://cdn.fcglcdn.com/brainbees/images/products/583x720/18025244a.webp"
    },
    {
        "title" : "Curiopsy",
        "description" : "Kids are Bids , let them know whatever they want to know !!",
        "image" : "https://th.bing.com/th/id/OIP.4UE2iZoqXgp9WhILUj-g-wHaE9?rs=1&pid=ImgDetMain"
    }
]

const  GET = async(req)=>{
    await connectDB();
    const response = await Product.find();
    // console.log("Server Side Console : ",Dummydata)
    return NextResponse.json({"message" : response},{status:200})
}
export { GET };