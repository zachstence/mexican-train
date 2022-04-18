<script lang="ts">
    import { game } from "$lib/stores/game.store";
</script>

{#if $game}
    {#each $game.players as p}
        <div>{p.name}</div>
    {/each}
{/if}
