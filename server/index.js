require("dotenv").config();
const express = require("express");
const massive = require("massive");
const app = express();
const { PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

app.post("/api/tweets", async (req, res) => {
  const db = req.app.get("db");
  const { tweets } = req.body;
  console.log(req.body, tweets);

  const success = await db.add_tweets([tweets]);
  console.log(success);
  res.status(200).send(success);
});

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
}).then((dbInstance) => {
  app.set("db", dbInstance);
  console.log("db connected");
});

app.listen(PORT, () => {
  console.log("The answer is always:", PORT);
});
