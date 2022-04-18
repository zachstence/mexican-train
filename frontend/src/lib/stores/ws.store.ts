import websocketStore from "svelte-websocket-store";
import { browser } from "$app/env";
import { writable, type Writable } from "svelte/store";

const createWs = () => {
    let _ws: Writable<object> = writable();

    const send = (data: object) => {
        if (!_ws) return;

        _ws.set(data);
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