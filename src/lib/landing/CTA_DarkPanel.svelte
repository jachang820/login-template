<script lang="ts">
    import { Modal } from "$lib/landing"
    import MultiLink from "$lib/MultiLink.svelte";

    // Props
    export let header: string = "Call to action";
    export let buttonText: string = "Join us now!";
    export let callToAction: string = "";
    export let buttonTarget: Modal | string = "#";
    export let callToActionHref: string = "#";
    export let spotlightCenterColor: string = "#7775D6";
    export let spotlightPeripheralColor: string = "#E935C1";

    /** CSS variable props
     * --panel-bg-color: #111827
     * --header-text-color: white
     * --desc-text-color: #D1D5DB
     * --button-bg-color: white
     * --button-hover-bg-color: #F3F4F6
     */

    /** Named slots
     *  description: Convince people to take action.
     */

</script>

<section class="outer">
    <div class="panel">
        <div class="panel-body">
            <h2 class="header">{header}</h2>
            <p class="description">
                <slot name="description">
                    Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                    Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
                    In mi viverra elit nunc.
                </slot>
            </p>
            <div class="button">
                <MultiLink target={buttonTarget} class="cta-dark-panel-button">{buttonText}</MultiLink>

                {#if callToAction}
                    <a href="{callToActionHref}" class="cta-link">{callToAction} <span aria-hidden="true">→</span></a>
                {/if}
            </div>
            <svg viewBox="0 0 1024 1024" class="spotlight" aria-hidden="true">
                <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fill-opacity="0.7" />
                <defs>
                    <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                        <stop stop-color="{spotlightCenterColor}" />
                        <stop offset="1" stop-color="{spotlightPeripheralColor}" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    </div>
</section>

<style>
    .outer {
        background-color: transparent;
    }

    .panel {
        max-width: 80rem;
        margin-left: auto;
        margin-right: auto;
        padding-top: 6rem;
        padding-bottom: 6rem;
    }

    .panel-body {
        position: relative;
        isolation: isolate;
        overflow: hidden;
        background-color: var(--panel-bg-color, #111827);
        padding: 6rem 1.5rem;
        text-align: center;
        box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    }

    .header {
        max-width: 42rem;
        font-size: 1.875rem;
        line-height: 2.25rem;
        font-weight: 700;
        letter-spacing: -0.025em;
        color: var(--header-text-color, white);
        margin-left: auto;
        margin-right: auto;
    }

    .description {
        margin-top: 1.5rem;
        max-width: 36rem;
        font-size: 1.125rem;
        line-height: 2rem;
        color: var(--desc-text-color, #D1D5DB);
        margin-left: auto;
        margin-right: auto;
    }

    .button {
        display: flex;
        margin-top: 2.5rem;
        column-gap: 1.5rem;
        justify-content: center;
        align-items: center;

    }

    :global(.cta-dark-panel-button) {
        z-index: 1;
        padding: 0.625rem 0.875rem;
        border-radius: 0.375rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 600;
        color: var(--panel-bg-color, #111827);
        background-color: var(--button-bg-color, rgb(255, 229, 254));
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    }

    :global(.cta-dark-panel-button:hover) {
        background-color: var(--button-hover-bg-color, rgb(234, 211, 255));
    }

    :global(.cta-dark-panel-button:focus-visible) {
        outline: white solid 2px;
        outline-offset: 2px;
    }

    :global(.cta-dark-panel-button:active) {
        transform: scale(0.95);
    }

    .cta-link {
        font-size: 0.875rem;
        font-weight: 600;
        line-height: 1.5rem;
        color: var(--header-text-color, white);
    }

    .spotlight {
        position: absolute;
        top: 50%;
        left: 50%;
        height: 64rem;
        width: 64rem;
        transform: translateX(-50%);
        mask-image: radial-gradient(closest-side, white, transparent);
    }

    @media (min-width: 640px) {
        .panel {
            padding: 8rem 1.5rem;
        }

        .panel-body {
            padding-left: 4rem;
            padding-right: 4rem;
            border-radius: 1.5rem;
        }

        .header {
            font-size: 2.25rem;
            line-height: 2.5rem;
        }

    }

    @media (min-width: 1024px) {
        .panel {
            padding-left: 2rem;
            padding-right: 2rem;
            max-width: none;
            width: 80vw;
        }
    }
</style>