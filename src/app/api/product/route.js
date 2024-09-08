// const { NextRequest, NextResponse } = require("next/server");
// import connectDB from "@/lib/connectDB";
// import Product from "@/models/Product";


// const GET = async(req) => {
//     try {
//         await connectDB();
//         console.log("Request Object  :  ",req);
//         return NextResponse.json({"messaege" : "Success"})
//     } catch (error) {
//         console.log("Error Occured : ",error)
//     }
// }


// const POST = async (req)=>{
//     try {
//         // Connect to the database
//         await connectDB();
    
//         // Parse the request body to get the product data
//         const { title, description, image_url } = await req.json();
    
//         // Validate input
//         if (!title || !description || !image_url) {
//           return NextResponse.json(
//             { error: "All fields are required (title, description, image_url)" },
//             { status: 400 }
//           );
//         }
    
//         // Create a new Product document
//         const newProduct = new Product({
//           title,
//           description,
//           image_url,
//         });
    
//         // Save the new product to the database
//         await newProduct.save();
    
//         // Respond with success
//         return NextResponse.json({ message: "Product added successfully!" });
//       } catch (error) {
//         // Handle errors
//         console.error("Error adding product:", error);
//         return NextResponse.json(
//           { error: "Failed to add product. Please try again later." },
//           { status: 500 }
//         );
//       }
// }
// export  {POST,GET}