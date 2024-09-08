"use client"
import style from "../../css/Products/create-product/CreateProductForm.module.css";
// import Product from "@/models/Product.js";
import React, { useState } from "react";

const CreateProductForm = () => {
  const [formData, setFormData] = useState({
    "title" : "",
    "description" : "",
    "image_url" : ""
  })
  const [responseMessage, setResponseMessage] = useState("");
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      // Make a POST request to the API
      const response = await fetch("http://localhost:3000/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send form data as JSON
      });

      if (response.ok) {
        const result = await response.json();
        setResponseMessage("Product Added successfully!");
        console.log("Response:", result);
        alert("Data Added successfully")
      } else {
        setResponseMessage("Error creating note. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("An error occurred. Please try again.");
    }
  };
  return (
    <div>
      <div className={style.main}>
        <h1>Add Your Product to the List</h1>
        <div className={style.form_container}>
          <form action="" onSubmit={handleSubmit}>
            <div className="item">
              <label className={style.label} htmlFor="title">Product Name : </label>
              <input
                className={style.input}
                type="text"
                name="title"
                id="name"
                placeholder="Ex : Xuke Box"
                onChange={handleChange}
              />
            </div>

            <br />
            <div className="item">
              <label className={style.label} htmlFor="description">Description : </label>
              <input
                onChange={handleChange}
                className={style.input}
                type="text"
                name="description"
                id="description"
                placeholder="Ex : XUke Box is an ultimate solution to Musicians and Music Producers"
              />
            </div>

            <br />
            <div className="item">
              <label className={style.label} htmlFor="image_url">Product Logo Url : </label>
              <input
                className={style.input}
                type="text"
                name="image_url"
                id="name"
                placeholder="Ex : Xuke Box"
                onChange={handleChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          {/* {responseMessage && <p>{responseMessage}</p>} */}
        </div>
      </div>
    </div>
  );
};

export default CreateProductForm;
