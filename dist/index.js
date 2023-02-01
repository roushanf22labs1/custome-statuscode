"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const error_route_1 = require("./src/routes/error.route");
const PORT = process.env.PORT || 8080;
let app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/', error_route_1.statusRouter);
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
