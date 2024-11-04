import { Router } from "express";
import { GetIAsController } from "./modules/ia/getAll/getAllController";

const routes = Router();

const getIAsController = new GetIAsController();

routes.get("/ias", getIAsController.handle);

export { routes };
