const dbConnect = require('./Mongo_Connection');

const deleteData = async ()=>{
    let result = await dbConnect();
    let data = await result.deleteOne(
        { Name: 'pro' }
    )

    if(data.acknowledged){
        console.log("Data deleted...")
    }
}

deleteData();