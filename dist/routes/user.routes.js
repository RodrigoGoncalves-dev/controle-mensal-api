"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const routes = (0, express_1.Router)();
routes.get("/:userId", async (req, res) => {
    let { userId } = req.params;
    const getUser = await user_controller_1.default.getUserById(parseInt(userId));
    return res.status(200).send(getUser);
});
exports.default = routes;
