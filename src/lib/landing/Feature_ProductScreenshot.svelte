<script lang="ts">
    import Icon from "$lib/Icon.svelte";
    import type {IconType} from "$lib/icons";
    import {
        BiCloudArrowUpFill as CloudUpIcon,
        BiLockFill as LockClosedIcon,
        FaServer as DatabaseIcon
    } from "$lib/icons";

    type ProductFeature = {
        name: string,
        description: string,
        icon: IconType
    }

    // Props
    export let header: string = "App features";
    export let subheader: string = "Feature tagline";
    export let features: ProductFeature[] = [
        {
            name: "Push to deploy.",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
            icon: CloudUpIcon,
        },
        {
            name: "SSL certificates.",
            description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
            icon: LockClosedIcon,
        },
        {
            name: "Database backups.",
            description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
            icon: DatabaseIcon,
        }
    ];
    export let product_screenshot: string = "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png";
    export let screenshot_width: number = 2432;
    export let screenshot_height: number = 1442;

    /** CSS variable props
     * --header-text-color: #4F46E5
     * --subheader-text-color: #111827
     * --description-text-color: #4B5563
     */

    /** Named slots
     *  description: Briefly give context to the main features.
     */

</script>

<section class="outer">
    <div class="panel-container">
        <div class="panel">
            <div class="content-container">
                <div class="content">
                    <h2 class="header">{header}</h2>
                    <p class="subheader">{subheader}</p>
                    <p class="description">
                        <slot name="description">
                            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
                            In mi viverra elit nunc.
                        </slot>
                    </p>
                    <dl class="features">
                        {#each features as feature}
                            <div class="feature">
                                <dt class="icon-container">
                                    <Icon icon={feature.icon} class="landing-feature-icon" />
                                    { feature.name }
                                </dt> <dd class="feature-text">{feature.description}</dd>
                            </div>
                        {/each}
                    </dl>
                </div>
            </div>
            <img src="{product_screenshot}" alt="Product screenshot" class="screenshot"
                 width="{screenshot_width.toString()}" height="{screenshot_height.toString()}" />
        </div>
    </div>
</section>

<style>
    .outer {
        overflow: hidden;
        padding-top: 6rem;
        padding-bottom: 6rem;
        background-color: transparent;
    }

    .panel-container {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        max-width: 80rem;
    }

    .panel {
        display: grid;
        grid-template-columns: repeat(1, minmax(0, 1fr));
        column-gap: 2rem;
        row-gap: 4rem;
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
        font-size: 1.125rem;
        line-height: 2rem;
        color: var(--description-text-color, #4B5563);
    }

    .features {
        margin-top: 2rem;
        max-width: 36rem;
        font-size: 1rem;
        line-height: 1.75rem;
        color: var(--description-text-color, #4B5563);
    }

    .feature {
        position: relative;
        padding-left: 2.25rem;
    }

    .icon-container {
        display: inline;
        font-weight: 600;
    }

    :global(.landing-feature-icon) {
        position: absolute;
        top: 0.25rem;
        left: 0.25rem;
        height: 1.5rem;
        width: 1.5rem;
        color: var(--header-text-color, #4F46E5);
    }

    .feature-text {
        display: inline;
    }

    .screenshot {
        border-radius: 0.75rem;
        max-width: none;
        box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04);
        width: 48rem;
    }

    @media (min-width: 640px) {
        .outer {
            padding-top: 8rem;
            padding-bottom: 8rem;
        }

        .panel {
            row-gap: 5rem;
        }

        .subheader {
            font-size: 2.25rem;
            line-height: 2.5rem;
        }

        .screenshot {
            width: 57rem;
        }
    }

    @media (min-width: 768px) {
        .screenshot {
            margin-left: -1rem;
        }
    }

    @media (min-width: 1024px) {
        .panel-container {
            padding-left: 2rem;
            padding-right: 2rem;
            margin-left: 2vw;
        }

        .panel {
            margin-left: 0;
            margin-right: 0;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            max-width: none;
        }

        .content-container {
            padding-top: 1rem;
            padding-right: 2rem;
        }

        .content {
            max-width: 32rem;
        }

        .features {
            max-width: none;
        }

        .screenshot {
            margin-left: 0;
        }
    }

    @media (min-width: 1280px) {
        .panel-container {
            margin: 5vw;
        }
    }

    @media (min-width: 1536px) {
        .panel-container {
            margin: auto;
        }
    }
</style>