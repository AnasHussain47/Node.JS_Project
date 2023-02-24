const express=require('express');
require('./config');
const Product=require('./product');


const app=express();
app.use(express.json())

app.post('/create',async(req,resp)=>{
    let data=new Product(req.body);
    let result=await data.save();
    resp.send(result)
    console.log ("saved",result)
})

app.listen(5000)