import { writable } from "svelte/store";

export { ws } from "./ws.store";
import type { GameStatus } from "$lib/types/Game.types";
import { ws } from "./ws.store";
import type { Request } from "$lib/types/Request.types";
import type { Response } from "$lib/types/Response.types";

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

    ws.subscribe((m: Request | Response) => {
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