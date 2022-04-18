<script lang="ts">
    import { goto } from "$app/navigation";
    import { game } from "$lib/stores/game.store";
    import { onMount } from "svelte";
    
    import Domino from "../lib/components/Domino.svelte";
    import Players from "$lib/components/Players.svelte";

    onMount(() => {
        if ($game === undefined) goto("/join");
    });
</script>

<Domino head={1} tail={2} />

<Players />
