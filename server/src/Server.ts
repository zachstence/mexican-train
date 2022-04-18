import express from "express";
import { createServer } from "http";
import WebSocket from "ws";
import { Game } from "./Game";

export class Server {
    private _wss: WebSocket.Server;

    private _game: Game = new Game();

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