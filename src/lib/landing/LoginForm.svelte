<script lang="ts">
    import {signIn} from "@auth/sveltekit/client";
    import type {IconType} from "$lib/icons";
    import {FcGoogle, BiEnvelope} from "$lib/icons";
    import Icon from "$lib/Icon.svelte";
    import Divider from "$lib/Divider.svelte";
    import OutlinedInput from "$lib/OutlinedInput.svelte";

    // Props
    export let brand: string;
    export let header: string;
    export let description: string;
    export let logoSrc: IconType | string;
    export let graphic: string = "https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80";
    export let graphicAlt: string = "Apple laptop on top of desk";
</script>


<section class="container">
    <div class="content">
        <div class="logo-container">
            {#if typeof logoSrc === "string"}
                <img class="login-form-logo" src="{logoSrc}" alt="{brand} logo">
            {:else}
                <Icon icon={logoSrc} class="login-form-logo" />
            {/if}
            <h2 class="headline">{header}</h2>
            <p class="description">{description}</p>
        </div>
        <div class="provider-container">
            <button class="button provider" on:click={() => signIn('google', {callbackUrl: "/app"})}>
                <Icon icon={FcGoogle} width={32} height={32} class="login-form-button-icon" />
                <span>Continue with Google</span>
            </button>
            <Divider label="or" />
            <OutlinedInput label="Email" --outline-color-focused="#4F46E5" />
            <button class="button email">
                <Icon icon={BiEnvelope} width={32} height={32} class="login-form-button-icon" />
                <span>Continue with email</span>
            </button>
        </div>
    </div>
    <div class="graphic-container">
        <img src={graphic} alt={graphicAlt} class="graphic" />
    </div>
</section>

<style>
    .container {
        display: flex;
        flex: 1 1 0;
        width: 100%;
        height: 100%;
    }

    .content {
        margin: 2rem auto;
    }

    :global(.login-form-logo) {
        border-radius: 0.5rem;
        border-width: 1px;
        border-color: #E5E7EB;
        border-style: solid;
        width: 4rem;
        height: 4rem;
        margin: 0 auto;
    }

    .headline {
        margin-top: 1.25rem;
        font-size: 1.6rem;
        font-weight: 600;
        letter-spacing: -0.025em;
        line-height: 3.4rem;
        text-align: center;
        color: #111827;
    }

    .provider-container {
        margin-top: 2.5rem;
        justify-content: center;
        min-width: 264px;
    }

    .button {
        display: inline-flex;
        position: relative;
        padding: 0.75rem 2rem;
        justify-content: center;
        align-items: center;
        border-radius: 0.375rem;
        border: 1px solid rgb(0 0 0 / 0.5);
        width: 100%;
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 600;
        color: #111827;
        gap: 1rem;
        flex-shrink: 0;
    }

    .provider {
        background: linear-gradient(
                to bottom,
                rgb(255 255 255),
                rgb(250 250 250) 90%,
                rgb(212 212 212)
        );
    }

    .provider:hover {
        background: linear-gradient(
                to bottom,
                rgb(255 255 255),
                rgb(228 228 228) 80%,
                rgb(180 180 180)
        );
    }

    .email {
        background: linear-gradient(
                to bottom,
                rgb(255 255 255),
                rgb(229, 244, 255) 90%,
                rgb(176, 215, 241)
        );
    }

    .email:hover {
        background: linear-gradient(
                to bottom,
                rgb(255 255 255),
                rgb(211, 238, 251) 80%,
                rgb(151, 209, 251)
        );
    }

    .button:active {
        transform: scale(0.95);
    }

    :global(.login-form-button-icon) {
        position: absolute;
        left: 1rem;
        flex-basis: content;
    }

    .graphic-container, .graphic {
        display: none;
    }

    @media (min-width: 640px) {
        .content {
            margin: 2rem;
        }

        .logo-container {
            width: 100%;
            max-width: 24rem;
        }

        .provider-container {
            width: 100%;
            max-width: 24rem;
        }

        :global(.login-form-button-icon) {
            position: absolute;
            left: 1.6rem;
            flex-basis: min-content;
        }
    }

    @media (min-width: 1280px) {
        .graphic-container {
            position:relative;
            display: block;
            border-top-right-radius: 0.5rem;
            border-bottom-right-radius: 0.5rem;
            width: 400px;
            flex: 1 1 0;
            overflow: hidden;
        }

        .graphic {
            position: absolute;
            display: block;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
</style>