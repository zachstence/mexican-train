import { GameStatus, GameStatusDebug } from "lib";
import { v4 as uuid } from "uuid";

import { Domino } from "./Domino";
import { Player } from "./Player";

export class Game {
    private _pool: Array<Domino> = [];

    private _players: Record<string, Player> = {};

    private _playerTurnId: string | undefined;

    constructor(size: number = 12) {
        // Create dominoes
        for (let i = 1; i <= size; i++) {
            for (let j = i; j <= size; j++) {
                const d = new Domino(i, j);
                this._pool.push(d);
            }
        }
    }

    public join(name: string) {
        const p = new Player(name);
        const id = uuid();
        this._players[id] = p;
    }

    public kick(playerId: string) {
        delete this._players[playerId];
    }

    public getPool(): Array<Domino> {
        return this._pool;
    }

    public getGameStatus(): GameStatus {
        return {
            players: Object.values(this._players),
        }
    }

    public getGameStatusDebug(): GameStatusDebug {
        return {
            players: this._players,
            playerTurn: this._playerTurnId,
            pool: this._pool,
        }
    }
}
