import express from "express";

const routes = express.Router();

routes.get("/", (request, response) => {
  console.log("GET /");
  return response.json({ message: "Hello World" });
});

export default routes;
