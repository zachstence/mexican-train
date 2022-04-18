import { Domino } from "./Domino";

export class Train {
    private _tail: number;
    
    public hasTrain: boolean;

    constructor(start: number) {
        this._tail = start;
    }
    
    public play(domino: Domino): void {
        if (this._tail !== domino.head) throw new Error(`Cannot play ${domino.head} on train with tail ${this._tail}`);

        this._tail = domino.tail;
    }

    public get tail(): number {
        return this._tail;
    }
}