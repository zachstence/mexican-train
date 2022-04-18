import { writable } from "svelte/store";
import type { Message, GameStatus } from "lib";

import { ws } from "./ws.store";

const initialValue: GameStatus = {
    players: [],
}

const join = (name: string): void => {
    ws.send({
        type: "join",
        name,
    });
};

const createGame = () => {
    const { subscribe, set } = writable<GameStatus>(initialValue);

    ws.subscribe((m: Message) => {
        if (m && m.type === "status") {
            set(m.status);
        }
    });

    return {
        subscribe,
        join,
    }
};

export const game = createGame();