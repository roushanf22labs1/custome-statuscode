import express, { Request, Response} from 'express';
import cors from 'cors';
import { statusRouter } from './src/routes/error.route';

const PORT = process.env.PORT || 8080;

let app = express();
app.use(cors());
app.use(express.json());

app.use('/', statusRouter);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})

