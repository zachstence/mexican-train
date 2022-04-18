<script lang="ts">
    import Domino from "../lib/components/Domino.svelte";
    import { ws } from "$lib/stores/ws.store";
import Players from "$lib/components/Players.svelte";

    ws.send({
        type: "join",
        name: "zach",
    });
</script>

<Domino head={1} tail={2} />

<Players />

{JSON.stringify($ws, null, 2)}