import express from "express";
import { createServer } from "http";
import WebSocket from "ws";
import { Game } from "./Game";
import { Message, StatusMessage } from "lib";

export class Server {
    private _wss: WebSocket.Server;
    private _ws: WebSocket.WebSocket | undefined;

    private _game: Game = new Game();

    constructor() {
        const server = createServer(express());
        this._wss = new WebSocket.Server({ server });

        server.listen(3001, () => {
            console.log("Server started!");
            
            this._wss.on("connection", (ws) => {
                console.log("New connection");

                this._ws = ws;

                ws.on("message", (d) => {
                    const raw = d.toString();

                    console.log(`Received ${raw}`);

                    const m = JSON.parse(raw) as Message;
                    this.onMessage(m);

                    console.log(this._game.getGameStatusDebug());
                    this.sendStatus();
                });
            })
        });
    }

    private onMessage(m: Message): void {
        switch (m.type) {
            case "join":
                this._game.join(m.name);
                break;
            default:
                console.error(`Cannot process message of type ${m.type}`);
                break;
        }
    }

    private sendStatus(): void {
        if (!this._ws) return;

        const response: StatusMessage = {
            type: "status",
            status: this._game.getGameStatus(),
        }

        this._ws.send(JSON.stringify(response));
    }
}
