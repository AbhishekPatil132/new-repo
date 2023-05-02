const connection = require('./Mongo_Connection');

//dbConnect().then((res)=>{
//    res.find().toArray().then((data)=>{
//        console.warn(data)
//    })
//})

let main = async ()=>{
  let data = await connection();
    data = await data.find().toArray();
    console.warn(data);
}

main();