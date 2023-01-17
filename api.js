const express = require("express");
const dbConnect = require("./mongodb");
const mongodb = require("mongodb");
const app = express();
app.use(express.json()); //using express.json() instead of bodyParser()

app.get("/", async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  resp.send({ data });
});

app.post("/", async (req, resp) => {
  let data = await dbConnect();
  let result = await data.insert(req.body);
  resp.send(result);
});

app.put("/:name", async (req, resp) => {
  let data = await dbConnect();
  let result = data.update({ name: req.params.name }, { $set: req.body });
  resp.send({ result: "Updated", data: req.body });
});

app.delete("/:id", async (req, resp) => {
  let data = await dbConnect();
  let result = data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
  console.log(req.params.id);

  resp.send({ name: "Deleted" });
});

app.listen(5000);
