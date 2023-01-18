const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
  const ProductsSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String,
  });

  const ProductModel = new mongoose.model("products", ProductsSchema);
  let data = new ProductModel({
    name: "Sony Phone",
    brand: "mobile",
    price: 25000,
    category: "mobile",
  });
  let result = await data.save();

  console.log(result);
};

main();

//time 6:33
