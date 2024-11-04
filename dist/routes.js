"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express_1 = require("express");
var getAllController_1 = require("./modules/ia/getAll/getAllController");
var routes = (0, express_1.Router)();
exports.routes = routes;
var getIAsController = new getAllController_1.GetIAsController();
routes.get("/ias", getIAsController.handle);
