import {BrowserCacheLocation, PublicClientApplication} from "@azure/msal-browser"

const config = {
    auth: {
        authority: import.meta.env.VITE_APP_AUTHORITY as string,
        clientId: import.meta.env.VITE_APP_CLIENT_ID as string,
        redirectUri: import.meta.env.VITE_PUBLIC_URL as string
    },
    cache: {
        cacheLocation: BrowserCacheLocation.LocalStorage,
        storeAuthStateInCookie: false,
    },
}

export const msalInstance = new PublicClientApplication(config)