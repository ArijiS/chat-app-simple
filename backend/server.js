import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { app, server } from "./socket/socket.js";

import connectToMongoDB from "./db/connectToMongoDb.js";



dotenv.config();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT||5000;

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

const startServer = async () => {
    try{
        await connectToMongoDB();
        server.listen(PORT, ()=>{
            console.log(`Server started on the port :${PORT}`);
        });
    }
    catch(err){
        console.log("Couldn't start the server" ,err);
    }
};

startServer();

