import websocketStore from "svelte-websocket-store";
import { browser } from "$app/env";
import { writable, type Writable } from "svelte/store";
import type { Message } from "$lib/types/Server.types";

const createWs = () => {
    let _ws: Writable<Message> = writable();

    const send = (m: Message) => {
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