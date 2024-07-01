<script lang="ts">
    export let header: string = "App productivity";
    export let subheader: string = "What can you do with this app?";
    export let tile1: string = "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&w=384&q=75";
    export let tile2: string = "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=384&q=75";
    export let tile3: string = "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&w=384&q=75";
    export let tile4: string = "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&w=384&q=75";
    export let tile5: string = "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&w=384&q=75";

    /** CSS variable props
     * --header-text-color: #4F46E5
     * --subheader-text-color: #111827
     * --description-text-color: #4B5563
     */

    /** Named slots
     *  description: Explain why people should use the app.
     */

</script>

<section class="outer">
    <div class="panel">
        <div class="extra-spacing">
            <div class="content-container">
                <div class="pad-horizontal">
                    <div class="center-content">
                        <div class="content">
                            <h2 class="header">{header}</h2>
                            <h1 class="subheader">{subheader}</h1>
                            <p class="description">
                                <slot name="description">
                                    Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                                    Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
                                    In mi viverra elit nunc.
                                </slot>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tile-row-container">
            <div class="tile-row">
                <div class="tile-container tilt-right">
                    <img alt="" loading="lazy" width="3744" height="5616" decoding="async" data-nimg="1" class="tile" src="{tile1}">
                </div>
                <div class="tile-container tilt-left">
                    <img alt="" loading="lazy" width="3744" height="5616" decoding="async" data-nimg="1" class="tile" src="{tile2}">
                </div>
                <div class="tile-container tilt-right">
                    <img alt="" loading="lazy" width="3744" height="5616" decoding="async" data-nimg="1" class="tile" src="{tile3}">
                </div>
                <div class="tile-container tilt-right">
                    <img alt="" loading="lazy" width="3744" height="5616" decoding="async" data-nimg="1" class="tile" src="{tile4}">
                </div>
                <div class="tile-container tilt-left">
                    <img alt="" loading="lazy" width="3744" height="5616" decoding="async" data-nimg="1" class="tile" src="{tile5}">
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .outer {
        width: 100%;
        color:transparent;
    }

    .panel {
        flex: 1 1 auto;
    }

    .extra-spacing {
        margin-top: 2.25rem;
    }

    .content-container {
        width: 100%;
        max-width: 80rem;
    }

    .pad-horizontal {
        position: relative;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .center-content {
        max-width: 42rem;
    }

    .content {
        max-width: 42rem;
    }

    .header {
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.75rem;
        color: var(--header-text-color, #4F46E5);
    }

    .subheader {
        margin-top: 0.5rem;
        font-size: 1.875rem;
        line-height: 2.25rem;
        font-weight: 700;
        letter-spacing: -0.025em;
        color: var(--subheader-text-color, #111827);
    }

    .description {
        margin-top: 1.5rem;
        font-size: 1rem;
        line-height: 1.5rem;
        color: var(--description-text-color, #4B5563);
    }

    .tile-row-container {
        margin-top: 4rem;
    }

    .tile-row {
        display: flex;
        overflow: hidden;
        padding-top: 1rem;
        padding-bottom: 1rem;
        margin-top: -1rem;
        margin-bottom: -1rem;
        gap: 1.25rem;
        justify-content: center;
    }

    .tile-container {
        overflow: hidden;
        position: relative;
        flex: none;
        border-radius: 0.75rem;
        width: 11rem;
        aspect-ratio: 9/10;
    }

    .tilt-left {
        transform: rotate(-2deg);
    }

    .tilt-right {
        transform: rotate(2deg);
    }

    .tile {
        object-fit: cover;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: transparent;
    }

    @media (min-width: 640px) {
        .extra-spacing {
            padding-left: 2rem;
            padding-right: 2rem;
        }

        .pad-horizontal {
            padding-left: 2rem;
            padding-right: 2rem;
        }

        .center-content {
            max-width: 64rem;
        }

        .subheader {
            font-size: 3rem;
            line-height: 1;
        }

        .tile-row-container {
            margin-top: 5rem;
        }

        .tile-row {
            gap: 2rem;
        }

        .tile-container {
            border-radius: 1rem;
            width: 18rem;
        }
    }

    @media (min-width: 1024px) {
        .content-container {
            padding-left: 2rem;
            padding-right: 2rem;
        }

        .pad-horizontal {
            padding-left: 3rem;
            padding-right: 3rem;
        }
    }

    @media (min-width: 1280px) {
        .content-container {
            margin-left: 5vw;
        }
    }

    @media (min-width: 1536px) {
        .content-container {
            margin: auto;
        }
    }
</style>