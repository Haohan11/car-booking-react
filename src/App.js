import { useState, useEffect } from "react"

import LoginPage from "./components/LoginPage"
import AppointPage from "./components/AppointPage"
import { TOKEN_SAVE_NAME as tokenName,
         REACT_APP_BASE_URL, 
         REACT_APP_PATH_APPOINTMENT } from "./globalVariables"

export default function App() {

    const URL = `${REACT_APP_BASE_URL}/${REACT_APP_PATH_APPOINTMENT}`

    const [identified, setIdentified] = useState(false)

    async function Login(token) {
        token = token || localStorage.getItem(tokenName)

        if(token === null) return Logout()

        try {
            const response = await fetch(URL, {
                method: "get",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            response.ok && setIdentified(true)
        }
        catch (error) {
            console.log(error)
        }

    }

    function Logout() {
        // localStorage.removeItem(tokenName)
        setIdentified(false)
    }

    useEffect(() => {
        Login()
    }, [])

    return (
        <>
        {/* {<LoginPage />} */}
        {identified ? <AppointPage /> : <LoginPage Login={Login} />}
        {<AppointPage />}
        </>
    )
}