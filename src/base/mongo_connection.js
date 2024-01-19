const { MongoClient } = require('mongodb');

console.log(process.env.MONGOURI)
// Database Name

const databaseName = 'class_management_system'

async function mongo_connection(){
    const client =new MongoClient(process.env.MONGOURI)
    await client.connect();
   console.log("Mongo is connected")
   const db=client.db(databaseName)
//    console.log(db)
   return db;
     
}
module.exports=mongo_connection