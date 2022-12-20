import React, { useEffect, useState } from "react"
import logo from "./logo.svg"
import "./App.css"

import { FrontendApi, Configuration, Session, Identity } from "@ory/client"

const basePath = process.env.REACT_APP_ORY_URL;
const ory = new FrontendApi(
    new Configuration({
        basePath,
        baseOptions: {
            withCredentials: true,
        },
    }),
)

function App() {
    const [session, setSession] = useState<Session | undefined>();
    const [logoutUrl, setLogoutUrl] = useState<string | undefined>()

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
