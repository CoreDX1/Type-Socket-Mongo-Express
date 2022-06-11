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
const User_1 = __importDefault(require("./models/User"));
const User_2 = __importDefault(require("./models/User"));
exports.default = (io) => {
    io.on('connection', (socket) => {
        const emitUser = () => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield User_2.default.find();
            io.emit('message_user', user);
        });
        emitUser();
        socket.on('message_chat', (data) => {
            const newMesage = () => __awaiter(void 0, void 0, void 0, function* () {
                const message = yield User_2.default.create({
                    name: data.name,
                    message: data.message,
                    date: data.date
                });
                message.save();
                const newdata = yield User_1.default.find();
                io.sockets.emit('message_user', newdata);
            });
            newMesage();
        });
    });
};
