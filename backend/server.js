import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import express, { json, response } from 'express';
import cors from 'cors'

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/sigma", (req, res) => {
    res.send("This is semple try of code");
})



const start = async () => {
    const monconnection = await mongoose.connect(process.env.MONGO_URL);
    app.listen(PORT, (req, res) => {
        console.log(` Server run on this port ${PORT}`)
    })
}

start();

