import { SvelteKitAuth } from "@auth/sveltekit";
import Google from "@auth/sveltekit/providers/google";
import { PUBLIC_GOOGLE_CLIENT_ID } from "$env/static/public";
import { GOOGLE_CLIENT_SECRET, AUTH_SECRET } from "$env/static/private";
import type { Provider } from "@auth/sveltekit/providers";

const providers: Provider[] = [
    Google({
        clientId: PUBLIC_GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET
    })
];

export const { handle, signIn, signOut } = SvelteKitAuth({
    providers: providers,
    secret: AUTH_SECRET,
    pages: {
        signIn: "/"
    }
});