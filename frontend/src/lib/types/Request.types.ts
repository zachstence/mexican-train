interface BaseRequest {
    type: string;
}

export interface JoinRequest extends BaseRequest {
    type: "join";
    name: string;
}

export type Request = JoinRequest;
