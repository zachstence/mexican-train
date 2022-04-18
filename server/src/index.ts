import express from "express";
import { createServer } from "http";
import WebSocket from "ws";

const app = express();

const server = createServer(app);

const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
    console.log("connection");

    ws.send("Hello");

    ws.on("message", (data) => {
        console.log(data.toString());
    })
});

server.listen(process.env.PORT || 3001, () => {
    console.log("Server started!");
});
