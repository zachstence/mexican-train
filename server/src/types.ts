export interface Message {
    type: "join";
    playerId: string;
}

export interface JoinMessage extends Message {
    type: "join";
}
