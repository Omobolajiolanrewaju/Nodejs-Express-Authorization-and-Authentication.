const express = require("express");
const itemRouter = require("./items/item-router");
const userRouter = require("./users/users-router");

const PORT = 4002;

const app = express();

app.use("/items", itemRouter);

app.use("/users", userRouter);

app.get("*", (req, res) => {
  res.status(404).json({
    data: null,
    error: "Route not found",
  });
});

app.listen(PORT, () => {
  // starts server & listen for connections
  console.log(`Listening on port: localhost:${PORT}`);
});