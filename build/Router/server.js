"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imgprocess_1 = __importDefault(require("./imgprocessing/imgprocess"));
var middleware = express_1.default.Router();
middleware.use('/esraa', imgprocess_1.default);
exports.default = middleware;
