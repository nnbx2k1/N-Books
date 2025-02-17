import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';
import { booksRoutes } from './routes/products.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'assets')));
app.set('view engine','ejs');

booksRoutes(app);

export {app}