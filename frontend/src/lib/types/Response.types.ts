import type { GameStatus } from "./Game.types";

export interface BaseResponse {
    type: string;
}

export interface StatusResponse extends BaseResponse {
    type: "status";
    status: GameStatus;
}

export type Response = StatusResponse;
