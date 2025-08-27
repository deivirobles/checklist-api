import express from "express";
import {router as api} from "./api/v1/index.js";

export const app = express();

//parse json request body
app.use(express.json());

//setup router and routes
app.use('/api/v1', api);
app.use("/api", api);


app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Checklist API"
  });
});

//No route found handler
app.use((req, res, next) => {
  next({status: 404, message: "Error, Route not found"});
});

//error handler
app.use((err, req, res, next) => {
  const {status = 500, message} = err;

  res.status(status);
  res.json({
    error : { status, message }
  });
});
