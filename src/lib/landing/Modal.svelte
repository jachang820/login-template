<script lang="ts">
    import { BiCircleFill, BiX, WhiteXOnBlackCircle } from "$lib/icons";
    import Icon from "$lib/Icon.svelte";

    // Deal with closing dialog when clicking on close button or overlay,
    // but leaving it open when the panel itself is clicked.
    let dialog: HTMLDialogElement;
    let panel: HTMLDivElement;


    const closeDialog = () => {
        // Save vertical scroll position on page.
        let scrollPosition = window.scrollY;

        // Slide dialog down while fading. Animate position is relative to the
        // fully loaded page state.
        dialog
            .animate([{ top: "10vh", opacity: 0 }], { duration: 400 })
            .finished.then(() => {
                dialog.close(); // from HTML dialog API

                // Load the saved scroll position so that it doesn't jump to the top or bottom of page.
                window.scrollTo(0, scrollPosition);
            });


    };

    // Props
    export function open() {
        if (dialog) {
            dialog.showModal(); // from HTML dialog API
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
                on:click={closeDialog}>

            <Icon icon={WhiteXOnBlackCircle} width={32} height={32} />

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
    }

    .modal-close-button {
        filter: opacity(0.75);
    }

    .modal-close-button:hover {
        filter: opacity(0.45);
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
        }
    }

</style>