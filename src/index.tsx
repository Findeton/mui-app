import React from "react"
import ReactDOM from "react-dom/client"
import {StyleEngine} from "mui-lib"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
    <React.StrictMode>
        <StyleEngine>
            <App />
        </StyleEngine>
    </React.StrictMode>
)
