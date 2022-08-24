const express = require("express");
const dbConnect = require("./mongodb");
const mongodb = require("mongodb");
const app = express();

app.use(express.json());

app.get("/getallrecords", async (req, resp) => {
  let data = await dbConnect();
  let result = await data.find().toArray();
  resp.send(result);
});

app.post("/addrecords", async (req, resp) => {
  let data = await dbConnect();
  let result = await data.insert(req.body);
  resp.send({ message: "Added Successfully" });
});

app.put("/updaterecords", async (req, resp) => {
  let data = await dbConnect();
  let result = await data.updateOne(
    { name: req.body.name },
    { $set: req.body }
  );
  resp.send({ result: "Updated Successfully" });
});

app.delete("/deleterecordbyid/:id", async (req, resp) => {
  let data = await dbConnect();
  let result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  resp.send({ result: "Deleted Successffully" });
});

app.listen(3000);
