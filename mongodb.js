const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  let db = result.db("e-com");
  return db.collection("products");
  // let response= await collection.find({}).toArray()
  //  console.log(response);
}

// dbConnect().then((resp)=>{
//     resp.find({}).toArray().then((data)=>{
//         console.warn(data);
//     })
// });

module.exports = dbConnect;
