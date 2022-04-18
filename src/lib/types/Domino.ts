export class Domino {
    constructor(
        private _head: number,
        private _tail: number,
    ) {}

    public get head() {
        return this._head;
    }

    public get tail() {
        return this._tail;
    }

    public get isDouble(): boolean {
        return this._head === this._tail;
    }

    public flip(): void {
        const tmp = this._head;
        this._head = this._tail;
        this._tail = tmp;
    }
}