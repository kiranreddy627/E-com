import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.get('/', (req, res) => {
    res.send(
        "<h1>WELCOME TO ECOM</h1>"
    );
}
);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`.bgCyan.white);
});