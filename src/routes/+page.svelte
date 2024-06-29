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

<Modal bind:this={modal}>
    <LoginForm
        brand="App Name"
        header="Something about the app"
        description="Log in to the app, or sign up if it's you're first time!"
        logoSrc={CiXpr}
    />
</Modal>

<Hero_Tiles
    header="App Name"
    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "
        + "et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip "
        + "ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu "
        + "fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt "
        + "mollit anim id est laborum."}
    buttonText="Try App Now!"
    buttonTarget={modal}
/>
<Feature_ProductScreenshot
    header="App features"
    subheader="Feature Tagline"
    description={"Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum "
        + "pulvinar et feugiat blandit at. In mi viverra elit nunc."}
/>
<CTA_DarkPanel
    header="Call To Action"
    description={"Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum "
        + "pulvinar et feugiat blandit at. In mi viverra elit nunc."}
    buttonText="Act now!"
/>
<Content_TiltedTiles
    header="App productivity"
    subheader="What can you do with this app?"
    description={"Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum "
        + "pulvinar et feugiat blandit at. In mi viverra elit nunc."}
/>
<Footer_SimpleCentered
    navigationLinks={[
        { name: 'Home', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Pricing', href: '#' }
    ]}
/>
<!--<div class="flex min-h-full flex-row">-->
<!--    <div class="w-full lg:w-1/2 h-full bg-cover px-6 py-12 mt-auto mb-auto lg:px-8 justify-center">-->
<!--        <LoginForm brand="Goalshare" headline="Join Goalshare now!" logoSrc="/logo.png" />-->
<!--    </div>-->
<!--    <div class="w-full lg:w-1/2 min-h-full bg-cover" style="background-image: url('/hero.png');"></div>-->
<!--</div>-->