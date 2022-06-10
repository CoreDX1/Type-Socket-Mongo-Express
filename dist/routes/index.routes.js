"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class Routes {
    constructor() {
        this.path = '/';
        this.api = '/google';
        this.router = (0, express_1.Router)();
        this.getApi = (_req, res) => {
            res.send({ Hellow: "Api" });
        };
        this.getMessage = (_req, res) => {
            res.send('Routesr');
        };
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.get(this.path, this.getApi);
        this.router.get(this.api, this.getMessage);
    }
}
exports.default = Routes;
