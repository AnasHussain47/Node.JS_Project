const dbConnect=require('./mongodb');


const deteleData= async()=>{

const data=await dbConnect();
let result=await data.deleteMany({brand:'infinix'})

if(result.deletedCount==0){
    console.log("Record not exits")
}
else{
    console.log("Record deleted total is:",result.deletedCount)
}
}



deteleData()

