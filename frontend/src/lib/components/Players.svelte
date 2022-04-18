<script lang="ts">
    import { game } from "$lib/stores/game.store";

    $: console.log($game);
</script>


{#each $game.players as p}
    <div>{p.name}</div>
{/each}