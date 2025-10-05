import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("Users endpoint hit");
  response.json(["Victor", "Antonio", "Barbosa", "Silva"]);
});

app.listen(3333);
