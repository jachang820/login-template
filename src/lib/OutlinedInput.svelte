<script lang="ts">
    // Props
    export let label:string;
    export let type:string = "text";
    export let autocomplete:string = "off";
    export let backgroundColor: string = "white";

    /** CSS variable props
     * --label-color: rgb(17 24 39)
     * --border-radius: 0.5rem
     * --padding-x: 2rem
     * --padding-y: 0.75rem
     * --outline-color: rgb(209 213 219)
     * --outline-thickness: 2px
     * --outline-color-focused: rgb(0, 143, 227)
     */
</script>

<div class="outer">
    <div class="content-container">
        <div class="content">
            <label for={type} class="label" style="background-color: {backgroundColor}">{label}</label>
            <input type={type} class="input" placeholder="you@example.com" {autocomplete} />
        </div>
    </div>
</div>

<style>
    .outer {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.5rem 0;
    }

    .content-container {
        margin: 0 auto;
        width: 100%;
    }

    .content {
        position: relative;
    }

    .label {
        position: absolute;
        top: -0.5rem;
        left: 0.5rem;
        display: inline-block;
        padding: 0 0.25rem;
        font-size: 1rem;
        line-height: 1rem;
        font-weight: 500;
        color: var(--label-color, rgb(17 24 39));
    }

    .input {
        display: block;
        width: 100%;
        border-radius: var(--border-radius, 0.5rem);
        border-width: 0;
        padding: var(--padding-y, 0.75rem) var(--padding-x, 2rem);
        box-shadow:
            inset 0 0 0 0 white,
            inset 0 0 0 1px var(--outline-color, rgb(209 213 219)),
            0 1px 2px 0 rgb(0 0 0 / 0.05);
        font-size: 1rem;
        line-height: 1.5rem;
    }

    .input:focus {
        box-shadow:
            inset 0 0 0 0 white,
            inset 0 0 0 var(--outline-thickness, 2px) var(--outline-color-focused, rgb(0, 143, 227)),
            1px 4px 8px 1px rgb(209 213 219);
    }

    .input:invalid:not(:focus) {
        box-shadow:
            inset 0 0 0 0 white,
            inset 0 0 0 1px red,
            0 1px 2px 0 rgb(0 0 0 / 0.05);
    }
</style>