import express from "express";
import { createServer } from "http";
import WebSocket from "ws";

export class WS {
    private _wss: WebSocket.Server;

    constructor() {
        const server = createServer(express());
        this._wss = new WebSocket.Server({ server });

        server.listen(3001, () => {
            console.log("Server started!");
            
            this._wss.on("connection", (ws) => {
                console.log("New connection");
                ws.on("message", this.onMessage);
            })
        });
    }

    private onMessage(data: WebSocket.RawData): void {
        console.log(`Received ${JSON.stringify(data.toString())}`);
    }
}