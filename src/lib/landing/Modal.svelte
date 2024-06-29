<script lang="ts">
    import { BiCircleFill, BiX } from "$lib/icons";
    import Icon from "$lib/Icon.svelte";

    let dialog: HTMLDialogElement;
    let panel: HTMLDivElement;
    $: closeClass = "modal-close-icon-back";


    const focusCloseButton = () => {
        closeClass = "modal-close-icon-back-hover";
    };

    const leaveCloseButton = () => {
        closeClass = "modal-close-icon-back";
    };

    const closeDialog = () => {
        let scrollPosition = window.scrollY;
        dialog
            .animate([{ top: "10vh", opacity: 0 }], { duration: 400 })
            .finished.then(animation => {
                animation.commitStyles();
                dialog.close();
            });
        window.scrollTo(0, scrollPosition);
    };

    // Props
    export function open() {
        if (dialog) {
            dialog.showModal();
            dialog.animate([
                    { top: "-10vh", opacity: 0 },
                    { top: "0vh", opacity: 1 }
                ], { duration: 400 });
        }
    }

</script>

<dialog tabindex="-1" aria-hidden="true" bind:this={dialog} on:click={() => closeDialog()}>
    <div class="modal-panel-container">
        <div class="modal-panel" role="none" bind:this={panel} on:click={(event) => event.stopPropagation()}>
            <slot />
        </div>
        <button type="button" tabindex="0" class="modal-close-button"
                on:click={closeDialog}
                on:mouseover={focusCloseButton} on:focus={focusCloseButton}
                on:mouseout={leaveCloseButton} on:blur={leaveCloseButton}>

            <Icon icon={BiX} width={32} height={32} class="modal-close-icon-center" />
            <Icon icon={BiCircleFill} width={32} height={32} class={closeClass} />

        </button>
    </div>
</dialog>

<style>
    :global(html:has(dialog[open])) {
        overflow:hidden;
    }

    dialog::backdrop {
        background: rgb(0 0 0 / 0.4);
        backdrop-filter: blur(3px);
    }

    dialog {
        position: fixed;
        max-height: 100vh;
        max-width: 100vw;
        overflow: visible;
        background-color: transparent;
        box-sizing: border-box;
    }

    .modal-panel-container {
        position: relative;
        width: 100vw;
        height: 100vh;
        box-sizing: border-box;
    }

    .modal-panel {
        border-radius: 0;
        height: 100vh;
        background-color: white;
        box-sizing: border-box;
        padding: 1px;
    }

    .modal-close-button {
        position: absolute;
        top: 1rem;
        right: 1rem;
        box-sizing: border-box;
        /*background: radial-gradient(*/
        /*        circle at center,*/
        /*        rgb(96 96 96 / 0.6) 0,*/
        /*        rgb(96 96 96 / 0.1) 10px,*/
        /*        transparent 13px);*/
    }

    :global(.modal-close-icon-back) {
        position: absolute;
        z-index: 50;
        top: 0;
        color: rgb(0 0 0 / 0);
    }

    :global(.modal-close-icon-back-hover) {
        position: absolute;
        z-index: 50;
        top: 0;
        color: rgb(56 56 56 / 0.1);
    }

    :global(.modal-close-icon-center) {
        color: rgb(0 0 0);
        z-index: 51;
    }

    @media (min-width: 640px) {
        dialog {
            position: fixed;
            background-color: transparent;
            max-height: none;
            max-width: none;
        }

        .modal-panel-container {
            display: flex;
            align-items: start;
            justify-content: center;
            background-color: transparent;
            top: auto;
            left: auto;
            width: auto;
            height: auto;
        }

        .modal-panel {
            position: relative;
            border-width: 1px;
            border-radius: 10px;
            outline-style: none;
            background-color: white;
            min-width: 24rem;
            min-height: 12rem;
            height: auto;
            padding: 0;
        }

        .modal-close-button {
            position: relative;
            top: 0;
            left: 0;
            margin-top: -3px;
            margin-left: 0.5rem;
            overflow: visible;
            background: radial-gradient(
                    circle at center,
                    rgb(225 225 225 / 0.25) 0,
                    transparent 15px);
        }

        :global(.modal-close-icon-back) {
            color: rgb(0 0 0 / 0.5);
        }

        :global(.modal-close-icon-back-hover) {
            color: rgb(80 80 80 / 0.25);
        }

        :global(.modal-close-icon-center) {
            color: rgb(255 255 255);
        }
    }

</style>