import { Domino } from "./Domino";
import { Player } from "./Player";
import { Server } from "./Server";

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
        this._players[p.id] = p;
    }

    public kick(playerId: string) {
        delete this._players[playerId];
    }

    public getPool(): Array<Domino> {
        return this._pool;
    }
}