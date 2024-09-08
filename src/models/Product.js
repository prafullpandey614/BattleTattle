import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        trim: true
    },
    description : {
        type : String,
        required : true,
        trim: true
    },
    image_url : {
        type : String,
        required : true,
        trim: true
    }
})
const Product = mongoose.models.Product || mongoose.model('Product',productSchema)
export default Product;