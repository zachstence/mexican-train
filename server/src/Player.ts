import { v4 as uuid } from "uuid";

export class Player {
    private _id: string;

    constructor(private name: string) {
        this._id = uuid();
    }

    public get id(): string {
        return this._id;
    }
}
