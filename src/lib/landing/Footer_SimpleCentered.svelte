<script lang="ts">
    import Icon from "$lib/Icon.svelte";
    import type {IconType} from "$lib/icons";
    import {
        MdFacebook as FacebookIcon,
        LaInstagram as InstagramIcon,
        XSocialMedia as XIcon,
        LaGithub as GithubIcon,
        BiYoutube as YoutubeIcon
    } from "$lib/icons";

    type NavigationLink = {
        name: string,
        href: string
    }

    type NavigationSocial = {
        name: string,
        href: string,
        icon: IconType
    }

    // Props
    export let navigationLinks: NavigationLink[] = [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Accessibility', href: '#' },
        { name: 'Partners', href: '#' },
    ];

    export let navigationSocial: NavigationSocial[] = [
        {
            name: "Facebook",
            href: "https://www.facebook.com/",
            icon: FacebookIcon
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/",
            icon: InstagramIcon
        },
        {
            name: 'X',
            href: 'https://x.com/',
            icon: XIcon
        },
        {
            name: 'GitHub',
            href: 'https://github.com/',
            icon: GithubIcon
        },
        {
            name: 'YouTube',
            href: 'https://youtube.com/',
            icon: YoutubeIcon
        }
    ];

    export let copyrightYear: string = "2024";
    export let copyrightCompany: string = "Your Company, Inc.";

    /** CSS variable props
     * --nav-text-color: #4B5563
     * --nav-hover-text-color: #111827
     * --social-text-color: #9CA3AF
     * --social-hover-text-color: #6B7280
     * --copyright-text-color: #6B7280
     */

</script>

<footer class="outer">
    <div class="panel">
        <nav class="navigation-row" aria-label="Footer">
            {#each navigationLinks as navLink}
                <div class="nav-link-container">
                    <a href="{navLink.href}" class="navigation-link">{navLink.name}</a>
                </div>
            {/each}
        </nav>
        <div class="social-row">
            {#each navigationSocial as item}
                <a href="{item.href}" target="_blank" rel="noopener noreferrer" class="social-link">
                    <span class="screen-reader">{item.name}</span>
                    <Icon icon={item.icon} />
                </a>
            {/each}
        </div>
        <p class="copyright">&copy; {copyrightYear} {copyrightCompany} All rights reserved.</p>
    </div>
</footer>

<style>
    .outer {
        background-color: transparent;
    }

    .panel {
        overflow: hidden;
        padding: 5rem 1.5rem;
        max-width: 80rem;
        margin: auto;
    }

    .navigation-row {
        margin-bottom: -1.5rem;
        flex-direction: column;
        columns: 1;
    }

    .nav-link-container {
        padding-bottom: 1.5rem;
        text-align: center;
    }

    .navigation-link {
        font-size: 0.875rem;
        line-height: 1.5rem;
        color: var(--nav-text-color, #4B5563);
    }

    .navigation-link:hover {
        color: var(--nav-hover-text-color, #111827);
    }

    .social-row {
        display: flex;
        margin-top: 2.5rem;
        justify-content: center;
        gap: 2.5rem
    }

    .social-link {
        color: var(--social-text-color, #9CA3AF);
    }

    .social-link:hover {
        color: var(--social-hover-text-color, #6B7280);
    }

    .screen-reader {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }

    .copyright {
        margin-top: 2.5rem;
        font-size: 0.75rem;
        line-height: 1.25rem;
        text-align: center;
        color: var(--copyright-text-color, #6B7280);
    }

    @media (min-width: 640px) {
        .panel {
            padding-top: 6rem;
            padding-bottom: 6rem;
        }

        .navigation-row {
            display: flex;
            margin-left: 0;
            gap: 3rem;
            justify-content: center;
            flex-direction: row;
            columns: 3;
        }
    }

    @media (min-width: 1024px) {
        .panel {
            padding-left: 2rem;
            padding-right: 2rem;
        }
    }

</style>