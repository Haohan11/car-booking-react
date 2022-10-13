import { useState, useEffect } from "react"

import LoginPage from "./components/LoginPage"
import AppointPage from "./components/AppointPage"
import { TOKEN_SAVE_NAME as tokenName,
         REACT_APP_BASE_URL, 
         REACT_APP_PATH_APPOINTMENT } from "./globalVariables"

export default function App() {

    const URL = `${REACT_APP_BASE_URL}/${REACT_APP_PATH_APPOINTMENT}`

    const [identified, setIdentified] = useState(false)

    async function Login() {
        const token = localStorage.getItem(tokenName)
        if(token === null) return Logout()
        
        const response = await fetch(URL, {
            method: "get",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(response)
    }

    function Logout() {
        setIdentified(false)
    }

    useEffect(() => {
        Login()
    }, [])

    return (
        <>
        {identified ? <AppointPage /> : <LoginPage Login={Login}/>}
        </>
    )
}