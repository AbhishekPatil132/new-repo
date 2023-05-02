const dbConnect = require('./Mongo_Connection');

const updateData = async ()=>{
    let result = await dbConnect();
    let data = await result.updateOne(
        {Name:'OP'},
        { $set:{Name:'Over', Branch:'CS', Rollno:111} }
    );

    if(data.acknowledged)
    {
        console.log("Data updated....");
    }
}

updateData();