"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const app = (0, express_1.default)();
const port = 3005;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
try {
    app.use("/users", user_routes_1.default);
}
catch (error) {
    console.log(`Error: ${error}`);
}
app.listen(port, () => {
    console.log(`Controle-Mensal API running on port ${port}`);
});
exports.default = app;
