import styles from "../../css/Home/MainContent.module.css";
import ProductCard from "./ProductCard";
import community_img from "../../../../public/6365457.jpg"
import { useState, useEffect } from "react";

const MainContent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  console.log("Iamge Path : ",community_img)
  // useEffect(() => {
  //   // const fetchProducts = async () => {
  //   //   console.log("i fire once");
  //   //   try {
  //   //     const result = await fetch("http://localhost:3000/api/dummy");
  //   //     const response = await result.json(); // Correct this line
  //   //     setData(response.message);
  //   //   } catch (error) {
  //   //     console.error("Error fetching data:", error);
  //   //   } finally {
  //   //     setLoading(false);
  //   //   }
  //   };

  //   fetchProducts();
  // }, []);
  console.log(data);
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <h1>Roast Here !</h1>
        <h1> Toast Here !</h1>
        <p>Be Anonymous, Keep It Clean 😊</p>
        
        <br />
        <button>Early Access</button>
      </div>
      <div className={styles.right}>
        <img src={community_img.src} alt="" />
      </div>












      {/* <div className={styles.title}>
        <h1>Make Your Product Visible to Everyone</h1>
        <div className={styles.container}>
          <div className={styles.productGrid}>
            {data.map((prod) => (
              <ProductCard prod={prod} key={prod.id} />
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MainContent;
