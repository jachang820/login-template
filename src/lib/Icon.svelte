<!--
  Usage:
  Select icon to use from https://oh-vue-icons.js.org/
  If the site says to use the statement: import { CiOnt } from "oh-vue-icons/icons";
  Then instead: import { CiOnt } from "$lib/icons";
  Pass the icon into the "icon" prop.
  For example:
    <script>
      import Icon from "$lib/Icon.svelte";
      import type {IconType} from "$lib/icons";
      import { CiOnt } from "$lib/icons";
    </script>
    <Icon icon={CiOnt} />
  -->

<script lang="ts">
    import type {IconType} from "$lib/icons";

    // Props
    export let icon: IconType | null = null;
    export let role: string = "presentation";
    export let fill: string = "currentColor";
    export let width: number = 24;
    export let height: number = 24;
    export let viewBox: number | number[] = [0, 0, 24, 24];

    let className = "";
    export {className as class};

    const calculateViewBox = (viewBox: number | number[]): string => {
        let viewBoxValue: string;
        if (typeof viewBox === "number") {
            viewBoxValue = `0 0 ${viewBox} ${viewBox}`;
        } else if (viewBox.length === 2) {
            viewBoxValue = `0 0 ${viewBox[0]} ${viewBox[1]}`;
        } else {
            viewBoxValue = viewBox.join(' ');
        }
        return viewBoxValue;
    };

    $: viewBoxCustom = calculateViewBox(viewBox);

</script>

{#if icon !== null}
    <svg role={role} xmlns="http://www.w3.org/2000/svg"
         fill={fill} width={width.toString()} height={height.toString()}
         viewBox="{icon.minX} {icon.minY} {icon.width} {icon.height}"
         class={className} aria-hidden="true">
        {@html icon.raw}
    </svg>

{:else}
    <svg role={role} xmlns="http://www.w3.org/2000/svg"
         fill={fill} width={width.toString()} height={height.toString()}
         viewBox={viewBoxCustom}>
        <slot />
    </svg>

{/if}