<script lang="ts">
    import { Dialog } from "bits-ui";
    import { BiXCircleFill, BiX } from "$lib/icons";
    import Icon from "$lib/Icon.svelte";

    export let dialogOpen = false;
</script>

<!-- By default, dialog is "portalled" or attached to the end of body, causing
     the bottom of the page to be shown behind the overlay when dialog is open.
     "portal=null" moves the dialog under the content div at the top. -->
<Dialog.Root portal={null} bind:open={dialogOpen}>
    <Dialog.Trigger />
    <Dialog.Portal>
        <Dialog.Overlay class="modal-overlay" />
        <Dialog.Content class="modal-panel-container">

            <div class="modal-panel">
                <slot />
            </div>

            <Dialog.Close class="modal-close-button">
                <!-- The second icon is the 'X' for added contrast. -->
                <Icon icon={BiXCircleFill} width={32} height={32} class="modal-close-icon-back" />
                <Icon icon={BiX} width={32} height={32} class="modal-close-icon-center" />
            </Dialog.Close>

        </Dialog.Content>
    </Dialog.Portal>
</Dialog.Root>

<style>
    :global(.modal-overlay) {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 50;
        background: rgb(0 0 0 / 0.4);
        backdrop-filter: blur(3px);
    }

    :global(.modal-panel-container) {
        display: flex;
        position: absolute;
        z-index: 50;
        align-items: start;
        justify-content: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    :global(.modal-panel) {
        position: relative;
        z-index: 50;
        padding: 1.25rem;
        border-width: 1px;
        border-radius: 10px;
        outline-style: none;
        background-color: white;
        min-width: 40vw;
        min-height: 20rem;
    }

    :global(.modal-close-button) {
        position: relative;
        z-index: 50;
        margin-top: 0;
        margin-left: 0.5rem;
    }

    :global(.modal-close-icon-back) {
        position: absolute;
        color: rgb(0 0 0 / 0.5);
    }

    :global(.modal-close-icon-center) {
        position: absolute;
        color: rgb(180 180 180 / 0.7);
    }
</style>