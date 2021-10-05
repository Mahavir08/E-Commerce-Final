import React, { useState, useEffect } from "react";

export default function Delete() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/data")
      .then((response) => response.json())
      .then((info) => setData(info.results));
  }, []);

  const del = (id) => {
    fetch(`http://localhost:4000/delete/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) =>
        // this is the data we get after putting our data,
        console.log(data)
      );
  };

  return (
    <>
      <h4 className="mt-4">Click any Product you want to delete</h4>
      <div className="row mt-4" style={{ textAlign: "left" }}>
        {data &&
          data.map((product) => (
            <div key={product._id} className="col-md-2 m-4">
              <div
                style={{
                  border: "1px solid #ffc107",
                  padding: "10px",
                  height: "100%",
                }}
              >
                <img
                  src={product.image}
                  alt="content"
                  style={{ width: "99%" }}
                />
                <h4>
                  <a
                    href="/delete"
                    onClick={() => del(product._id)}
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    {product.name}
                  </a>
                </h4>
                <h5>Rs. {product.price}</h5>
                <h5>Stock : {product.stock}</h5>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
