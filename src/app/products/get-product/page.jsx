"use client"

import { useEffect ,useState} from "react"
const ProductDeatil = (props) => {
    const [productData, setProductData] = useState('')
    
    const fetchProduct = async () => {
        try {
        const url = "http://localhost:3000"+"/api/product/"+props.id 
        console.log("Process Env  : ",url)
    
        const result = await fetch(url,{
          method: "GET"
        })
        if(result.ok){
          const response = await result.json()
          setProductData(response)
          console.log("Response : ",response)
        }
        else{
          console.log("Note FOund")
        }
        
        } catch (error) {
          console.log(error)
        }
      }
      useEffect(async () => {
         await fetchProduct()
      
        return () => {
          second
        }
      }, [])
  return (
    <div>
        <h1>This is Get Product</h1>
        {productData}
    </div>
  )
}

export default ProductDeatil