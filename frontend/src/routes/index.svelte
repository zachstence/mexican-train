<script lang="ts">
    import Domino from "../lib/components/Domino.svelte";
    import { ws } from "$lib/stores/ws.store";

    ws.send({ msg: "sending a message" })
</script>

<Domino head={1} tail={2} />


{JSON.stringify($ws, null, 2)}