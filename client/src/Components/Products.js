import React from "react";

function Products({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ffc107",
        padding: "10px",
        height: "100%",
      }}
    >
      <img src={product.image} alt="Product" style={{ width: "99%" }} />
      <h4
        style={{
          textDecoration: "none",
          color: "black",
        }}
      >
        {product.name}
      </h4>
      <h5>Rs. {product.price}</h5>
      <h5>Stock : {product.stock}</h5>
      <p># {product._id}</p>
    </div>
  );
}

export default Products;
