"use client"

import { useEffect ,useState} from "react"
import style from "../../../css/Products/product-details/product_detail.module.css"
// import style from "@/app/css/Products/product-details/product_detail.css"
const ProductDeatil = ({params}) => {
    const [productData, setProductData] = useState(null)
    const [loader, setLoader] = useState(true)
    
    const fetchProduct = async () => {
        try {
        const url = "http://localhost:3000"+"/api/product/"+params.id 
        console.log("Process Env  : ",url)
    
        const result = await fetch(url,{
          method: "GET"
        })
        if(result.ok){
          const response = await result.json()
          setProductData(response.message)
          setLoader(false)
          console.log("Response : ",response) 
        }
        else{
          console.log("Note FOund")
        }
        
        } catch (error) {
          console.log(error)
        }
      }
      useEffect(() => {
         fetchProduct()
      
        
      }, [])
  return (
      <>
    <div className={style.container}>
    
        <h1>This is Get Product</h1>
        {loader ? (
        <>Loading...</>
      ) : productData ? (
        <div>
          <h2>Product Details</h2>
          <p><strong>Title:</strong> {productData.title}</p>
          <p><strong>Description:</strong> {productData.description}</p>
          <img src={productData.image} alt={productData.title} style={{ maxWidth: "300px", maxHeight: "300px" }} />
        </div>
      ) : (
        <p>No product data available.</p>
      )}
    </div>
    </>
  )
}

export default ProductDeatil