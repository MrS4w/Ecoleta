import express from "express";
import ItemsController from "./controllers/itemsController";
import PointsController from "./controllers/pointsController";

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get("/items", itemsController.index);

routes.post("/points", pointsController.create);

export default routes;
