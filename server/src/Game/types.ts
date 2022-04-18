import { Domino } from "../Domino";
import { Player } from "../Player";

export interface GameStatus {
    players: Record<string, Player>;
    playerTurn: string | undefined;
}

export interface GameStatusDebug extends GameStatus {
    pool: Array<Domino>;
}
