<script lang="ts">
    import {Modal} from "$lib/landing";

    let className = "";

    // Props
    export let target: Modal | string = "#";
    export {className as class};

    let externalHref: boolean = target.startsWith("http");
    let browsingContext: string = externalHref ? "_blank" : "_self";
    let rel: string = externalHref ? "noreferrer noopener" : "strict-origin";

    const openModal = () => {
        (target as Modal).open();
    };

</script>

{#if typeof target !== "string"}
    <button type="button" tabindex="0" class={className} on:click={() => openModal()}>
        <slot />
    </button>

{:else}
    <a href={target} role="button" tabindex="0"
       target={browsingContext} {rel}
       class={className}>
        <slot />
    </a>

{/if}