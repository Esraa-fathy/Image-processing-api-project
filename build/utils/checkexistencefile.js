"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = require("fs");
var check_image = function (imgname, foldername) {
    try {
        var pathofimage = path_1.default.resolve("images/".concat(foldername, "/").concat(imgname));
        var check_path = (0, fs_1.existsSync)(pathofimage);
        return (check_path);
    }
    catch (err) {
        console.log(err);
        return false;
    }
};
exports.default = check_image;
