import express from "express";

export const app = express();

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
