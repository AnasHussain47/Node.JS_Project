const dbConnect=require('./mongodb');



const insert= async()=>{
    const db=await dbConnect();
    const result =await db.insert(
        [
            {name:"iphone x",brand:'apple',price:25000},
            {name:"iphone 11",brand:'apple',price:35000},
            {name:"iphone 12",brand:'apple',price:45000},
            {name:"iphone 12 pro",brand:'apple',price:52000},
            {name:"iphone 13 pro max",brand:'apple',price:90000}
        ]
    );
        if(result.acknowledged){
            console.log("inserted the total inserted record is ",result.insertedCount);
        }
};

insert();