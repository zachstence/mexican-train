import websocketStore from "svelte-websocket-store";
import { browser } from "$app/env";
import { writable, type Writable } from "svelte/store";
import type { Request } from "$lib/types/Request.types";
import type { Response } from "$lib/types/Response.types";

const createWs = () => {
    let _ws: Writable<Request | Response> = writable();

    const send = (m: Request) => {
        if (!_ws) return;

        _ws.set(m);
    }

    if (browser) {
        _ws = websocketStore("ws://localhost:3001");
    }

    return {
        subscribe: _ws.subscribe,
        send,
    }
};

export const ws = createWs();