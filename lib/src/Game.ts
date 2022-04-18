import { IDomino } from "./Domino";
import { IPlayer } from "./Player";

export interface IGame {
    
}

export interface GameStatus {
    players: Array<IPlayer>;
}

export interface GameStatusDebug {
    players: Record<string, IPlayer>;
    playerTurn: string | undefined;
    pool: Array<IDomino>;
}
