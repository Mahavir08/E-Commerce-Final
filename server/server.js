const express = require("express");
const dotenv = require("dotenv");
const app = express();
const connectDatabase = require("./connectDatabase");
const Product = require("./model/products");
const cors = require("cors");
const path = require("path");

// app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

dotenv.config({ path: "config/config.env" });

// console.log(process.env.DB_ATLAS);

// if (process.env.NODE_ENV === "PRODUCTION") {
//   app.use(express.static(path.join(__dirname, "../client/build")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
//   });
// }

// if (process.env.NODE_ENV !== "PRODUCTION") {
//   dotenv.config({ path: "server/config/config.env" });
// }

app.get("/data", async (req, res, next) => {
  await Product.find()
    .then((results) => res.status(200).json({ results }))
    .catch((err) => console.log(err));
});

app.get("/product/:id", async (req, res, next) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  if (!product) {
    res.send("Product Not Found");
  } else {
    await Product.findById(id)
      .then((result) => res.send(result))
      .catch((err) => console.log(err));
  }
});

app.post("/add", async (req, res, next) => {
  const data = req.body;
  await Product.insertMany(data);
  console.log("Added Successfully");
  res.status(200).json({ redirect: "/" });
});

app.delete("/delete/:id", async (req, res, next) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  if (!product) {
    res.send("Not Found");
  } else {
    await Product.findByIdAndDelete(id);
    res.send("Product Deleted Succesfully");
    console.log("Product Deleted");
  }
});

app.put("/update/:id", async (req, res, next) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  if (!product) {
    res.status(404).json({ redirect: "/update" });
  } else {
    await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({ redirect: "/" });
  }
});

connectDatabase();

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server Connected To Port ${port}`);
});
