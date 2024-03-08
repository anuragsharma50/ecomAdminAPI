import express from "express";
import { connectDB } from "./config/db.js";
import ProductRouter from "./src/product/product.routes.js";

const server = express();

// to parse Json recieved from Postman
server.use(express.json());

// products route
server.use('/products',ProductRouter);

server.listen(process.env.PORT,() => {
    connectDB();
    console.log("Server is up and running in port ",process.env.PORT);
})
