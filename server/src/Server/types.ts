import { GameStatus } from "../Game";

interface BaseMessage {
    type: string;
}

export interface JoinMessage extends BaseMessage {
    type: "join";
    name: string;
}

export type Message = JoinMessage;

export interface BaseResponse {
    type: string;
}

export interface StatusResponse extends BaseResponse {
    type: "status";
    status: GameStatus;
}

export type Response = StatusResponse;
