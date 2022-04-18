import type { GameStatus } from "./Game";

interface BaseMessage {
    type: string;
}

export interface JoinMessage extends BaseMessage {
    type: "join";
    name: string;
}

export interface StatusMessage extends BaseMessage {
    type: "status";
    status: GameStatus;
}

export type Message = JoinMessage | StatusMessage;
