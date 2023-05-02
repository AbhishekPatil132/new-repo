const dbConnect = require('./Mongo_Connection');

const insert = async ()=>{
    const db = await dbConnect();
    const result = await db.insertMany(
       [
        {Name: 'max', Branch:'js', Rollno: 1010}, {Name: 'pro', Branch:'fi', Rollno: 76}
       ]
    );
    
     // result contains following information if data successfully inserted
     //  {
     //    acknowledged: true,
     //    insertedId: new ObjectId("644e13d5539fb02663b7f348")
     // }
    
    if (result.acknowledged){
        console.log("Data inserted...");
    }
}

insert();