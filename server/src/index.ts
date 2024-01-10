import express from "express";
import "dotenv/config";

const port = process.env.port;
const app = express();

app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`)
})