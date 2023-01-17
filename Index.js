   const dbConnect=require('./mongodb');
   
   const dData=async()=>{
        let data=await dbConnect();
        let result=await data.find({}).toArray();
        console.log(result);
      
   }

   dData()

