<script lang="ts">
    import Icon from "$lib/Icon.svelte";
    import { FaExternalLinkSquareAlt } from "$lib/icons";

    let className = "";

    // Props
    export let href:string;
    export let iconSize:number = 16;
    export {className as class};

    /** CSS variable props
     * --external-link-icon-color: black
     */

</script>

<a {href} target="_blank" rel="noopener noreferrer" class={className}>
    <slot /><Icon icon={FaExternalLinkSquareAlt}
                  width={iconSize} height={iconSize}
                  class="external-link-icon" />
</a>

<style>

    a {
        color: var(--external-link-color, rgb(0, 105, 194));
    }

    a:hover {
        text-decoration: underline;
    }

    :global(.external-link-icon) {
        display: inline-block;
        color: var(--external-link-icon-color, var(--external-link-color, black));
        margin-right: 0.25rem;
        margin-bottom: 1rem;
    }
</style>