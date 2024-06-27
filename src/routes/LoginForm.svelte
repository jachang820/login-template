<script lang="ts">
    import {signIn} from "@auth/sveltekit/client";
    import {getAccessibleTextColor, getDarkerColor} from "$lib/color";

    // Settings per provider
    export const providers = [
        {
            id: "google",
            name: "Google",
            logo: "/google.svg",
            brandColor: "rgb(26, 115, 232)"
        }
    ];

    // Set button background and text colors
    export const dynamicColors = (event: MouseEvent, hex: string) => {
        if (event.target instanceof HTMLElement) {
            event.target.style.backgroundColor = hex;
            event.target.style.color = getAccessibleTextColor(hex);
        }
    };

    // Props
    export let brand: string;
    export let headline: string;
    export let logoSrc: string;
</script>


<div class="h-full w-56 m-auto">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-56 w-auto rounded-2xl border border-solid border-gray-200" src="{logoSrc}" alt="{brand} logo">
        <h2 class="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">{headline}</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm justify-center">
        {#each providers as provider}
            <button class="flex justify-center items-center space-x-2 w-full h-12 text-base font-semibold text-white rounded-md transition active:scale-95"
                    on:click={() => signIn(provider.id, {callbackUrl: "/app"})}
                    style:background-color="{provider.brandColor}"
                    on:mouseenter={(event) => dynamicColors(event, getDarkerColor(provider.brandColor))}
                    on:mouseleave={(event) => dynamicColors(event, provider.brandColor)}>
                <img src="{provider.logo}" alt="{provider.name} logo" width="24" height="24">
                <span>Sign in with {provider.name}</span>
            </button>
        {/each}
    </div>
</div>