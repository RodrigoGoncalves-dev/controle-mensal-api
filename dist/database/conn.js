"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const access = {
    host: "localhost",
    user: "root",
    password: "",
    database: "controle_mensal"
};
const connect = mysql2_1.default.createConnection(access);
exports.default = connect;
