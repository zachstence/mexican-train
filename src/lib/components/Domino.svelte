<script lang="ts">
    export let head: number;
    export let tail: number;
</script>


<div class="domino">
    <span>{head}</span>
    <span>{tail}</span>
</div>


<style lang="postcss">
    .domino {
        @apply
            w-16 h-32
            grid grid-flow-row items-center justify-center
            border border-black rounded-md;
    }

    span {
        @apply leading-none;
    }
</style>