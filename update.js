const dbConnect=require('./mongodb');

const update= async()=>{

const data=await dbConnect();

let result =await data.update(
    {brand:'apple'},
    {$set:{brand:'mobile',price:99999}}
);

console.log(result)
}


update()