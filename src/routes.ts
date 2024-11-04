import { Router } from "express";
import { GetIAsController } from "./modules/ia/getAll/getAllController";
import { CreatePromptController } from "./modules/ia/promptsRegister/promptsRegisterController";

const routes = Router();

const getIAsController = new GetIAsController();
const registerPrompt = new CreatePromptController();

routes.get("/ias", getIAsController.handle);
routes.post("/registeprompt", registerPrompt.handle);

export { routes };
