const fs=require('fs')

const path=require('path')

const dirPath=path.join(__dirname,'crud');

const filePath=`${dirPath}/mit.txt`
// // fs.writeFileSync(filePath,'this is data');

// fs.readFile(filePath,'utf8',(err,data)=>{
//     console.log(data)
// })

const updateData='this is updated data by anas'

// fs.appendFile(filePath,updateData,(err)=>{
//     if(!err){
//         console.log('file updated')
//     }
// })


// fs.rename(filePath,`${dirPath}/mit.txt`,(err)=>{
//     if(err){
//         console.log('rename successfully',err)
//     }
// })

// fs.unlinkSync(`${dirPath}/mit.txt`)

