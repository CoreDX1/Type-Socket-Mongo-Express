"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const morgan_1 = __importDefault(require("morgan"));
const MongoDB_1 = __importDefault(require("./models/MongoDB"));
const socket_io_1 = __importDefault(require("socket.io"));
const sockets_1 = __importDefault(require("./sockets"));
const http_1 = __importDefault(require("http"));
const path_1 = __importDefault(require("path"));
class Server {
    constructor(routeList, port) {
        this.app = (0, express_1.default)();
        this.port = port;
        this.hhtp = http_1.default.createServer(this.app);
        this.io = new socket_io_1.default.Server(this.hhtp);
        this.socketsio = (0, sockets_1.default)(this.io);
        this.listen();
        this.middlewares();
        this.MongoDB = (0, MongoDB_1.default)();
        this.initializeControllers(routeList);
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
    }
    initializeControllers(controllers) {
        controllers.forEach((controllers) => {
            this.app.use('/', controllers.router);
        });
    }
    listen() {
        this.hhtp.listen(this.port, () => {
            console.log('Server on ' + this.port);
        });
    }
}
new Server([new index_routes_1.default()], 8080);
