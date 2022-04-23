"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var checkexistencefile_1 = __importDefault(require("../../utils/checkexistencefile"));
var ResizeingFile_1 = __importDefault(require("../../utils/ResizeingFile"));
var displayimg = express_1.default.Router();
displayimg.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var filename, w, h, width, height, File_1, Pathoffile, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 10, , 11]);
                filename = req.query.filename;
                w = req.query.width;
                h = req.query.height;
                width = parseInt(w);
                height = parseInt(h);
                File_1 = "".concat(filename, "_").concat(width, "_").concat(height, ".jpg");
                Pathoffile = void 0;
                if (!!(0, checkexistencefile_1.default)("".concat(filename, ".jpg"), 'orignal_images')) return [3 /*break*/, 1];
                res.send("Image does not exist");
                return [3 /*break*/, 9];
            case 1:
                if (!(req.query.width === undefined &&
                    req.query.height === undefined)) return [3 /*break*/, 2];
                res.sendFile(path_1.default.resolve("images/orignal_images/".concat(filename, ".jpg")));
                return [3 /*break*/, 9];
            case 2:
                if (!(width && !height)) return [3 /*break*/, 3];
                res.send("please enter the new height");
                return [3 /*break*/, 9];
            case 3:
                if (!(height && !width)) return [3 /*break*/, 4];
                res.send("please enter the new width");
                return [3 /*break*/, 9];
            case 4:
                if (!(isNaN(width) || isNaN(height))) return [3 /*break*/, 5];
                res.send('Enter valid values for width and height,please.');
                return [3 /*break*/, 9];
            case 5:
                if (!(0, checkexistencefile_1.default)(File_1, 'Resized_images')) return [3 /*break*/, 6];
                Pathoffile = path_1.default.resolve("images/orignal_images/".concat(File_1));
                return [3 /*break*/, 8];
            case 6: return [4 /*yield*/, (0, ResizeingFile_1.default)(filename, width, height)];
            case 7:
                Pathoffile = _a.sent();
                Pathoffile = path_1.default.resolve(Pathoffile);
                _a.label = 8;
            case 8:
                res.sendFile(Pathoffile);
                _a.label = 9;
            case 9: return [3 /*break*/, 11];
            case 10:
                err_1 = _a.sent();
                console.error(err_1);
                return [3 /*break*/, 11];
            case 11: return [2 /*return*/];
        }
    });
}); });
exports.default = displayimg;
