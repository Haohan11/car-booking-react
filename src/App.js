import { useState, useEffect } from "react"

import LoginPage from "./components/LoginPage"
import { TOKEN_SAVE_NAME as tokenName } from "./globalVariables"

export default function App() {

    useEffect(() => {  
        const token = localStorage.getItem(tokenName)
        console.log(token)
    }, [])

    return (
        <>
            <LoginPage />
        </>
    )
}