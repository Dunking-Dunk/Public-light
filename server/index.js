import "dotenv/config";

import express from 'express'
import bodyParser from "body-parser";
import "express-async-errors";
import mongoose from "mongoose";
import ErrorHandler from "./utils/errorHandler.js"
import Light from './routes/Light.js'
import cors from 'cors'

const app = express()

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("successfully connected to Mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

  app.use(
    cors({
      origin: ["*"],
      methods: ["GET", "POST", "DELETE", "PUT"],
    })
);
  

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/light",Light)



app.use(ErrorHandler);


app.listen(4000, () => {
    console.log('listening on port 4000')
})