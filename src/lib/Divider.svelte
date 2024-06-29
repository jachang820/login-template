<script lang="ts">
    // Props
    export let label: string | null = null;
    export let backgroundColor: string = "white";

    /** CSS variable props
     * --max-width: 42rem
     * --line-color: rgb(209 213 219)
     * --label-color: rgb(107 114 128)
     */
</script>

<div class="vertical-spacing">
    <div class="content-container">
        <div class="content">
            <div class="line-container" aria-hidden="true">
                <div class="line" />
            </div>
            {#if label !== null}
                <div class="label-container">
                    <span class="label" style="background-color: {backgroundColor}">{label}</span>
                </div>
            {/if}
        </div>
    </div>
</div>

<style>
    .vertical-spacing {
        padding: 2rem 0;
    }

    .content-container {
        margin: 0 auto;
        max-width: var(--max-width, 42rem);
        padding: 0 1rem;
    }

    .content {
        position: relative;
    }

    .line-container {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
    }

    .line {
        width: 100%;
        border-top-width: 1px;
        border-color: var(--line-color, rgb(209 213 219));
    }

    .label-container {
        position: relative;
        display: flex;
        justify-content: center;
    }

    .label {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: var(--label-color, rgb(107 114 128));
    }
</style>