"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var routes_1 = require("./routes");
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, morgan_1.default)("dev"));
app.use(routes_1.routes);
var errorHandler = function (err, req, res, next) {
    if (err instanceof Error) {
        res.status(400).json({
            message: err.message,
        });
        return;
    }
    res.status(500).json({
        message: "Internal server error",
    });
};
app.use(errorHandler);
app.listen(3333, function () {
    console.log("Server started on port 3333");
});
