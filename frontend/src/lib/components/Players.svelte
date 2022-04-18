<script lang="ts">
    import { game } from "$lib/stores/game.store";
</script>


{#each $game.players as p}
    <div>{p.name}</div>
{/each}