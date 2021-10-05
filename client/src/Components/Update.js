import React, { useState } from "react";

function Update() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (id) => {
    const data = { name, price, stock, image, description };
    fetch(`http://localhost:4000/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((info) => (window.location.href = info.redirect))
      .catch((error) => (window.location.href = error.redirect));
  };

  return (
    <>
      <div className="title mt-4">
        <h3>Update A Product</h3>
      </div>
      <div className="row mt-5">
        <div className="col-md-4 offset-md-4" style={{ textAlign: "left" }}>
          <form onSubmit={() => handleSubmit(id)}>
            <div className="mb-3">
              <label>Product Id:#</label>
              <input
                type="text"
                className="form-control"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
              />
            </div>
            {/* <button className="btn btn-success mb-3">Check</button> */}
            <div className="mb-3">
              <label>Name :</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label>Price :</label>
              <input
                type="text"
                className="form-control"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                required
              />
            </div>
            <div className="mb-3">
              <label>Stock :</label>
              <input
                type="number"
                className="form-control"
                value={stock}
                onChange={(e) => {
                  setStock(e.target.value);
                }}
                required
              />
            </div>
            <div className="mb-3">
              <label>Image URL :</label>
              <input
                type="text"
                className="form-control"
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                }}
                required
              />
            </div>
            <div className="mb-3">
              <label>Description :</label>
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary" href="/">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Update;
