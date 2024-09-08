import style from "../../css/Home/productcard.module.css";
import Link from "next/link"

const ProductCard = ({ prod }) => {
  
  return (
    <>
      <div>
        <div className={style.card}>
          <div className={style.img}>
            <img src={prod.image} alt="Product" />
          </div>
          <div className={style.text}>
            <h2>{prod.title}</h2>
            <p>{prod.description}</p>
          </div>
        </div>
        <br />
        <Link href={`http://localhost:3000/products/get-product/${prod._id}`}>Get It</Link>
        <button className={style.prod_btn} >Get Product Details</button>
      </div>
    </>
  );
};

export default ProductCard;
