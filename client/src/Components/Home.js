import React, { useState, useEffect } from "react";
import Products from "./Products";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/data")
      .then((response) => response.json())
      .then((info) => setData(info.results));
  }, []);

  return (
    <>
      <div className="title mt-3">
        <h2>Latest Products</h2>
      </div>
      <div className="row mt-4" style={{ textAlign: "left" }}>
        {data &&
          data.map((product) => (
            <div key={product._id} className="col-md-2 m-4">
              <Products product={product} />
            </div>
          ))}
      </div>
    </>
  );
}

export default Home;
