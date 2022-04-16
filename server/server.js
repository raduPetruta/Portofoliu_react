const express = require("express");
const app = express();
const mongoose = require("mongoose");
const imgModel = require("./models/imgModel");
const cors = require("cors");

const envConfig = require("../client/src/components/env.json");
const mongoURL = envConfig.MONGO_DB_URL;

app.use(cors());
app.use(express.json());

mongoose.connect(`${mongoURL}`);

app.get("/images", (req, res) => {
  imgModel.find({ type: "main" }, (err, result) => {
    if (err) {
      console.log(err);
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.get("/street", (req, res) => {
  imgModel.find({ type: "street" }, (err, result) => {
    if (err) {
      console.log(err);
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.get("/portrait", (req, res) => {
  imgModel.find({ type: "portrait" }, (err, result) => {
    if (err) {
      console.log(err);
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.listen(3001, console.log("Server started!"));
