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
    export let icon: IconType;
    export let role: string = "presentation";
    export let fill: string = "currentColor";
    export let fillOpacity: number = 1;
    export let width: number = 24;
    export let height: number = 24;

    let className = "";
    export {className as class};
</script>

<svg role={role} xmlns="http://www.w3.org/2000/svg"
     fill={fill} fill-opacity={fillOpacity} width={width.toString()} height={height.toString()}
     viewBox="{icon.minX} {icon.minY} {icon.width} {icon.height}"
     class={className} aria-hidden="true"
     on:mouseover on:focus on:mouseout on:blur>
    {@html icon.raw}
</svg>
