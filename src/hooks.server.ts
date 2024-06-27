import { redirect, type Handle } from '@sveltejs/kit';
import { handle as authenticationHandle } from './auth';
import { sequence } from '@sveltejs/kit/hooks';


const authorizationHandle: Handle = async function ({ event, resolve }) {
    // Protect any routes under /authenticated
    const session = await event.locals.auth();
    if (event.url.pathname.startsWith('/app')) {
        if (!session) {
            // Redirect to the signin page
            throw redirect(303, '/auth/signin');
        }

    } else if (session) {
        // Go to app if already logged in
        throw redirect(302, '/app')
    }

    // If the request is still here, just proceed as normally
    return resolve(event);
}

// First handle authentication, then authorization
// Each function acts as a middleware, receiving the request handle
// And returning a handle which gets passed to the next function
export const handle: Handle = sequence(authenticationHandle, authorizationHandle)