const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/e-comm");

  const ProductsSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String,
  });

  const SaveInDB = async () => {
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

const UndateInDB=async()=>{
    const ProductModel = new mongoose.model("products", ProductsSchema);

    let data=await ProductModel.update(
        {name:'m10'},
        {$set:{name:'Anas'}}
    )
    console.log("Updated",data)
}


const delteInDB=async()=>{
    const Product=new mongoose.model('products',ProductsSchema);
    let data=await Product.deleteMany({brand:'apple'});
    console.log("Deleted",data)
}


const SeachInDB=async()=>{
    const Product=new mongoose.model('products',ProductsSchema);
    let data=await Product.find({price:25000});
    console.log("data",data)
    
}

SeachInDB()