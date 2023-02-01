"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusRouter = void 0;
const express_1 = __importDefault(require("express"));
const statusRouter = express_1.default.Router();
exports.statusRouter = statusRouter;
statusRouter.get('/:id', (req, res) => {
    res.status(parseInt(req.params.id)).send({ message: 'custome status code for GET' });
});
statusRouter.post('/:id', (req, res) => {
    res.status(parseInt(req.params.id)).send({ message: 'custome status code for POST' });
});
statusRouter.patch('/:id', (req, res) => {
    res.status(parseInt(req.params.id)).send({ message: 'custome status code for PATCH' });
});
statusRouter.put('/:id', (req, res) => {
    res.status(parseInt(req.params.id)).send({ message: 'custome status code for PUT' });
});
statusRouter.delete('/:id', (req, res) => {
    res.status(parseInt(req.params.id)).send({ message: 'custome status code for DELETE' });
});
