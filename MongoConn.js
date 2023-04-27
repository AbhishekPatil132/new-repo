const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const databaseName = 'Ab';
const collectionName = 'coll1';

const client = new MongoClient(url);

async function getData() {
  try {
    await client.connect();
    const db = client.db(databaseName);
    const collection = db.collection(collectionName);
    const data = await collection.find().toArray();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

getData();
