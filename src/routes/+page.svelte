<script lang="ts">
    import {
        Modal,
        LoginForm,
        Hero_Tiles,
        Feature_ProductScreenshot,
        Footer_SimpleCentered,
        CTA_DarkPanel,
        Content_TiltedTiles
    } from "$lib/landing";

    import { CiXpr } from "$lib/icons";

    let modal: Modal;

</script>

<svelte:head>
    <title>Try App!</title>
</svelte:head>

<Modal bind:this={modal}>
    <LoginForm
        brand="App Name"
        header="Something about the app"
        description="Log in to the app, or sign up if it's you're first time!"
        logoSrc={CiXpr}>
<!--        <span slot="fine-print">By continuing you agree to our Terms of Service and Privacy Agreement.</span>-->
    </LoginForm>
</Modal>

<Hero_Tiles buttonTarget={modal} />
<Feature_ProductScreenshot />
<CTA_DarkPanel />
<Content_TiltedTiles />
<Footer_SimpleCentered
    navigationLinks={[
        { name: 'Home', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Pricing', href: '#' }
    ]}
/>