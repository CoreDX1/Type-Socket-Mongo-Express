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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.excuteQueries = void 0;
const mongoose_1 = require("mongoose");
const User_1 = __importDefault(require("./User"));
function connectDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const db = yield (0, mongoose_1.connect)('mongodb://127.0.0.1:27017/ChatMessage');
            console.log('database is connection', db.connection.db.databaseName);
        }
        catch (err) {
            console.log(err);
        }
    });
}
function excuteQueries() {
    return __awaiter(this, void 0, void 0, function* () {
        // const user = new UserModel({
        //   name: "Juan",
        //   message: "Buenos"
        // })
        // await user.save()
        // console.log(user)
        const getAll = yield User_1.default.find();
        console.log(getAll);
    });
}
exports.excuteQueries = excuteQueries;
exports.default = connectDB;
