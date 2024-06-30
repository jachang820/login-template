import { SvelteKitAuth } from "@auth/sveltekit";
import Google from "@auth/sveltekit/providers/google";
import Email from "@auth/sveltekit/providers/nodemailer";
import {
    PUBLIC_GOOGLE_CLIENT_ID } from "$env/static/public";
import {
    GOOGLE_CLIENT_SECRET,
    AUTH_SECRET,
    EMAIL_SERVER_HOST,
    EMAIL_SERVER_PORT,
    EMAIL_SERVER_USER,
    EMAIL_FROM,
    EMAIL_SERVER_PASSWORD } from "$env/static/private";
import type { Provider } from "@auth/sveltekit/providers";

const providers: Provider[] = [
    Google({
        clientId: PUBLIC_GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET
    }),
    // Email({
    //     server: {
    //         host: EMAIL_SERVER_HOST,
    //         port: EMAIL_SERVER_PORT,
    //         auth: {
    //             user: EMAIL_SERVER_USER,
    //             pass: EMAIL_SERVER_PASSWORD
    //         }
    //     },
    //     from: EMAIL_FROM
    // })
];

export const { handle, signIn, signOut } = SvelteKitAuth({
    providers: providers,
    secret: AUTH_SECRET,
    trustHost: true,
    pages: {
        signIn: "/"
    }
});