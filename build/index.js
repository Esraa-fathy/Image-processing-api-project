"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var server_1 = __importDefault(require("./Router/server"));
var app = (0, express_1.default)();
var port = 4000;
app.use('/ss', server_1.default);
app.listen(port, function () {
    console.log("server started at localhost:".concat(port));
});
exports.default = app;
