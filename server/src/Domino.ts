import { IDomino } from "lib";

export class Domino implements IDomino {
    private _head: number;
    private _tail: number;

    constructor(head: number,tail: number) {
        this._head = head;
        this._tail = tail;
    }

    public flip(): void {
        const tmp = this._head;
        this._head = this._tail;
        this._tail = tmp;
    }

    public get head(): number {
        return this._head;
    }

    public get tail(): number {
        return this._tail;
    }

    public get isDouble(): boolean {
        return this._head === this._tail;
    }
}
