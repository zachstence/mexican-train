<script lang="ts">
import { goto } from "$app/navigation";

    import { ws } from "$lib/stores/ws.store";

    let name: string;

    const join = () => {
        ws.send({
            type: "join",
            name,
        });

        goto("/");
    }
</script>

<input type="text" bind:value={name} />
<button on:click={join}>Join</button>
