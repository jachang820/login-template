<script lang="ts">
    import type {Modal} from "$lib/landing";
    import MultiLink from "$lib/MultiLink.svelte";

    // Props
    export let header: string = "App Name";
    export let buttonText: string = "Try App now!";
    export let previewText: string = "";
    export let buttonTarget: Modal | string = "#";
    export let callToActionHref: string = "#";
    export let tile1: string = "https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80";
    export let tile2: string = "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80";
    export let tile3: string = "https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80";
    export let tile4: string = "https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80";
    export let tile5: string = "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80";

    /** CSS variable props
     * --panel-bg-color: white
     * --bg-gradient-bottom: #ff80b5
     * --bg-gradient-top: #9089fc
     * --header-text-color: #111827
     * --desc-text-color: #4B5563
     * --button-bg-color: #4F46E5
     * --button-hover-bg-color: #6366F1
     */

    /** Named slots
     *  description: Give an elevator pitch to app.
     */

</script>

<main class="outer">
    <div class="panel">
        <svg class="bg-grid" aria-hidden="true">
            <defs>
                <pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                    <path d="M.5 200V.5H200" fill="none" />
                </pattern>
            </defs>
            <svg x="50%" y="-1" class="bg-path">
                <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
            </svg>
            <rect width="100%" height="100%" stroke-width="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
        </svg>
        <div class="bg-right" aria-hidden="true">
            <div class="bg-gradient" style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)" />
        </div>
        <div class="panel-content">
            <div class="content-container">
                <div class="content">
                    <div class="text-content">
                        <h1 class="header">{header}</h1>
                        <p class="description">
                            <slot name="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa mollit anim id est laborum.
                            </slot>
                        </p>
                        <div class="actions">
                            <MultiLink target={buttonTarget} class="hero-button">{buttonText}</MultiLink>

                            {#if previewText}
                                <a href="{callToActionHref}" class="link">{previewText} <span aria-hidden="true">→</span></a>
                            {/if}
                        </div>
                    </div>
                    <div class="picture-columns">
                        <div class="right-picture-column">
                            <div class="tile-container">
                                <img src="{tile5}" alt="" class="tile" />
                                <div class="picture-box" />
                            </div>
                        </div>
                        <div class="left-picture-column">
                            <div class="tile-container">
                                <img src="{tile1}" alt="" class="tile" />
                                <div class="picture-box" />
                            </div>
                            <div class="tile-container">
                                <img src="{tile2}" alt="" class="tile" />
                                <div class="picture-box" />
                            </div>
                        </div>
                        <div class="middle-picture-column">
                            <div class="tile-container">
                                <img src="{tile3}" alt="" class="tile" />
                                <div class="picture-box" />
                            </div>
                            <div class="tile-container">
                                <img src="{tile4}" alt="" class="tile" />
                                <div class="picture-box" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<style>
    .outer {
        background-color: transparent;
    }

    .panel {
        isolation: isolate;
        position: relative;
        max-width: 85rem;
    }

    .bg-grid {
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        z-index: -10;
        width: 100%;
        height: 64rem;
        stroke: #e5e7eb;
        mask-image: radial-gradient(
                32rem 32rem at center,
                var(--panel-bg-color, white),
                transparent);
    }

    .bg-path {
        overflow: visible;
        fill: #f9fafb;
    }

    .bg-right {
        overflow: hidden;
        position: absolute;
        top: 0;
        right: 0;
        left: 50%;
        margin-left: -6rem;
        filter: blur(64px);
    }

    .bg-gradient {
        background-image: linear-gradient(
                to top right,
                var(--bg-gradient-bottom, #ff80b5),
                var(--bg-gradient-top, #9089fc));
        opacity: 0.3;
        aspect-ratio: 801/1036;
        width: 50.0625rem;
    }

    .panel-content {
        overflow: hidden;
    }

    .content-container {
        padding: 9rem 1.5rem 8rem;
        max-width: 80rem;
    }

    .content {
        column-gap: 3.5rem;
        max-width: 42rem;
    }

    .text-content {
        position: relative;
        width: 100%;
        max-width: 36rem;
    }

    .header {
        font-size: 2.25rem;
        line-height: 2.5rem;
        font-weight: 700;
        letter-spacing: -0.025em;
        color: var(--header-text-color, #111827);
    }

    .description {
        margin-top: 1.5rem;
        font-size: 1.125rem;
        line-height: 2rem;
        color: var(--desc-text-color, #4B5563);
    }

    .actions {
        display: flex;
        margin-top: 2.5rem;
        column-gap: 1.5rem;
        align-items: center;
    }

    :global(.hero-button) {
        padding: 0.625rem 0.875rem;
        border-radius: 0.375rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 600;
        color: var(--panel-bg-color, white);
        background-color: var(--button-bg-color, #4F46E5);
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    }

    :global(.hero-button:hover) {
        background-color: var(--button-hover-bg-color, #6366F1);
    }

    :global(.hero-button:focus-visible) {
        outline: var(--button-bg-color, #4F46E5) solid 2px;
        outline-offset: 2px;
    }

    :global(.hero-button:active) {
        transform: scale(0.95);
    }

    .link {
        font-size: 0.875rem;
        font-weight: 600;
        line-height: 1.5rem;
        color: var(--header-text-color, #111827);
    }

    .picture-box {
        position: absolute;
        inset: 0;
        border-radius: 0.75rem;
        box-shadow: inset 0 0 0 1px rgb(17 24 39 / 0.1);
        pointer-events: none;
    }

    .picture-columns {
        display: flex;
        margin-top: 3.5rem;
        gap: 2rem;
        justify-content: flex-end;
    }

    .left-picture-column {
        margin-top: 2rem;
        flex: none;
        width: 11rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .middle-picture-column {
        padding-top: 8rem;
        margin-top: 2rem;
        flex: none;
        width: 11rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .right-picture-column {
        padding-top: 8rem;
        margin-top: 2rem;
        flex: none;
        width: 11rem;
    }

    .tile-container {
        position: relative;
    }

    .tile {
        object-fit: cover;
        border-radius: 0.75rem;
        width: 100%;
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgba(0 0 0 / 0.05);
        aspect-ratio: 2/3;
    }

    @media (min-width: 640px) {
        .content-container {
            padding-top: 15rem;
        }

        .header {
            font-size: 3.75rem;
            line-height: 1;
        }

        .description {
            max-width: 28rem;
        }

        .picture-columns {
            padding-left: 5rem;
            margin-top: -11rem;
            justify-content: flex-start;
        }

        .left-picture-column {
            padding-top: 13rem;
            margin-right: 0;
        }

        .middle-picture-column {
            padding-top: 0;
        }

        .right-picture-column {
            padding-top: 20rem;
            margin-left: 0;
        }

    }

    @media (min-width: 1024px) {
        .bg-right {
            margin-left: 6rem;
        }

        .content-container {
            padding-left: 2rem;
            padding-right: 2rem;
            padding-top: 8rem;
        }

        .content {
            display: flex;
            margin-left: 0;
            margin-right: 0;
            align-items: center;
            max-width: none;
        }

        .text-content {
            flex-shrink: 0;
        }

        .description {
            max-width: none;
        }

        .picture-columns {
            padding-left: 0;
            margin-top: 0;
        }

        .left-picture-column {
            padding-top: 9rem;
        }

        .right-picture-column {
            padding-top: 9rem;
            order: 9999;
        }

    }
    @media (min-width: 1280px) {
        .panel {
            margin-left: 5vw;
        }

        .bg-right {
            margin-left: 12rem;
        }

        .text-content {
            max-width: 42rem;
        }

        .right-picture-column {
            padding-top: 20rem;
            order: 0;
        }

    }

    @media (min-width: 1536px) {
        .panel {
            margin: auto;
        }
    }

</style>
