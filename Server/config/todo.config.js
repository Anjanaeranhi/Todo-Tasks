const {connect} = require("mongoose")

const connectdb = async () =>{
    try{
        const {connection} = await connect('mongodb://localhost:27017/',{
            dbName : "sample1_db"
        })
        console.log("Connected DB", connection.db.databaseName)
    }catch(err){
        console.log(err);
    }
}

module.exports = {connectdb}