<script lang="ts">
import { onMount } from "svelte";

    import Domino from "../lib/components/Domino.svelte";

    onMount(() => {
        const ws = new WebSocket("ws://localhost:3001");

        ws.addEventListener("open", () => {
            ws.send("bing bong");
        })
    });

</script>

<Domino head={1} tail={2} />