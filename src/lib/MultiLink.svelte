<script lang="ts">
    import {Modal} from "$lib/landing";

    let className = "";

    // Props
    export let target: Modal | string = "#";
    export {className as class};

    const openModal = () => {
        (target as Modal).open();
    };

</script>

{#if typeof target !== "string"}
    <button type="button" tabindex="0" class={className} on:click={() => openModal()}>
        <slot />
    </button>

{:else}
    <a href={target} role="button" tabindex="0" class={className}>
        <slot />
    </a>

{/if}