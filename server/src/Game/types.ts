import { Domino } from "../Domino";
import { Player } from "../Player";

export interface GameStatus {
    players: Array<Player>;
}

export interface GameStatusDebug {
    players: Record<string, Player>;
    playerTurn: string | undefined;
    pool: Array<Domino>;
}
