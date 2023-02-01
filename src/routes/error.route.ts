import express, { Request, Response } from "express";

const statusRouter = express.Router();

statusRouter.get('/:id', (req: Request, res: Response) => {
    res.status(parseInt(req.params.id)).send({message: 'custome status code for GET'});
})

statusRouter.post('/:id', (req: Request, res: Response) => {
    res.status(parseInt(req.params.id)).send({message: 'custome status code for POST'});
});

statusRouter.patch('/:id', (req: Request, res: Response) => {
    res.status(parseInt(req.params.id)).send({message: 'custome status code for PATCH'});
});

statusRouter.put('/:id', (req: Request, res: Response) => {
    res.status(parseInt(req.params.id)).send({message: 'custome status code for PUT'});
});

statusRouter.delete('/:id', (req: Request, res: Response) => {
    res.status(parseInt(req.params.id)).send({message: 'custome status code for DELETE'});
});

export { statusRouter };