import { useState, useEffect } from "react"
import UsersList from "./UsersList"

import { REACT_APP_BASE_URL, REACT_APP_PATH_LOGIN, 
         TOKEN_NAEM, TOKEN_SAVE_NAME } from "../globalVariables"


export default function LoginPage() {
    
    const BASE_URL = REACT_APP_BASE_URL
    const LOGIN_PATH = REACT_APP_PATH_LOGIN
    const URL = `${BASE_URL}/${LOGIN_PATH}`

    const USERNAME = "username"
    const PASSWORD = "password"

    const TOKENNAME = TOKEN_SAVE_NAME
    const TOKEN = TOKEN_NAEM

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [infoLegal, setInfoLegal] = useState(false)

    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        setInfoLegal((username !== "" && password !== "") ? true : false)
    }, [username, password])

    const handleResponse = {
        401: () => {
            setErrorMessage("錯誤的帳號或密碼")
        },

        200: async res => {
            const token = await res.json()
            localStorage.setItem(TOKENNAME, token[TOKEN])
        },
    }

    async function handleSubmit(event) {
        event.preventDefault()
        setErrorMessage("登入中...")
        
        const userCredential = new FormData()
        userCredential.append(USERNAME, username)
        userCredential.append(PASSWORD, password)

        const response = await fetch(URL, {
            method: "post",
            body: userCredential
        })

        handleResponse[response.status](response)

    }
    
    return (
        <>
        <form id="login-page" onSubmit={handleSubmit}>
            <h1 className="title">登入</h1>
            <div className="field">
                <label htmlFor={USERNAME}>帳號名稱</label>
                <select name={USERNAME} 
                        onChange={e => setUsername(e.target.value)}>
                <UsersList />
                </select> 
            </div>
            <div className="field">
                <label htmlFor={PASSWORD}>密碼</label>
                <input type="password" name={PASSWORD} 
                        onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="error-message field">{errorMessage}</div>
            <button type="submit" disabled={!infoLegal}>登入</button>
        </form>
        </>
    )
}