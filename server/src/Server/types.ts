interface BaseMessage {
    type: string;
}

export interface JoinMessage extends BaseMessage {
    type: "join";
    name: string;
}

export type Message = JoinMessage;
