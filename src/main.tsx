import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {MsalAuthenticationTemplate, MsalProvider} from '@azure/msal-react'
import {msalInstance} from "./core/auth/authProvider"
import {InteractionType} from "@azure/msal-browser"

const authRequest = {scopes: ["User.Read"]}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <MsalProvider instance={msalInstance}>
            <MsalAuthenticationTemplate
                interactionType={InteractionType.Redirect}
                authenticationRequest={authRequest}>
                <App/>
            </MsalAuthenticationTemplate>
        </MsalProvider>
    </React.StrictMode>
)
