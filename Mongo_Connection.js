const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const databaseName = 'Ab';
const collectionName = 'coll1';

const client = new MongoClient(url);
let db; // Declare db variable

async function dbConnect() {
  if (!db) {
    // Connect to the MongoDB server if db is not already set
    await client.connect();
    db = client.db(databaseName);
  }

  return db.collection(collectionName);
}

module.exports = dbConnect;


//dbConnect().then((res)=>{
//    res.find().toArray().then((data)=>{
//        console.warn(data)
//    })
//})

//let main = async ()=>{
//  let data = await dbConnect();
//    data = await data.find().toArray();
//    console.warn(data);
//}

//main();
