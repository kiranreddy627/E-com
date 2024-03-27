import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js';
//configure env
dotenv.config();

//database config
connectDB();

//rest object
const app = express()

//middlewares
app.use(morgan('dev')); //log requests to the console
app.use(express.json()); //parse incoming requests of content type application/json

//routes
app.use('/api/v1/auth',authRoutes)
//rest api
app.get('/', (req, res) => {
    res.send('<h1>This is Ecommerce</h1>')
})

//PORT 
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`.bgCyan.white);
})