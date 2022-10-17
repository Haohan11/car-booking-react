import { useState, useEffect } from "react"
import UsersList from "./UsersList"

import { REACT_APP_BASE_URL, REACT_APP_PATH_LOGIN, 
         TOKEN_NAME, TOKEN_SAVE_NAME } from "../globalVariables"


export default function LoginPage(props) {

    const {Login} = props
    
    const BASE_URL = REACT_APP_BASE_URL
    const LOGIN_PATH = REACT_APP_PATH_LOGIN
    const URL = `${BASE_URL}/${LOGIN_PATH}`

    const USERNAME = "username"
    const PASSWORD = "password"

    const TOKENNAME = TOKEN_SAVE_NAME
    const TOKEN = TOKEN_NAME

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [infoLegal, setInfoLegal] = useState(false)

    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        setInfoLegal((username !== "" && password !== "") ? true : false)
    }, [username, password])

    const handleResponse = {
        401: (res) => {
            // console.log(res)
            setErrorMessage("錯誤的帳號或密碼")
        },

        200: async res => {
            const token = await res.json()
            localStorage.setItem(TOKENNAME, token[TOKEN])
            // console.log(token)
            Login()
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
        <div className="login-page">
            <header>
                <svg id="car-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm288 32c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"/>
                </svg>
                Car-booking
            </header>
            <form onSubmit={handleSubmit}>
                <h2 className="title">登入</h2>
                <div className="field">
                    <select name={USERNAME} required
                            onChange={e => setUsername(e.target.value)}>
                    <UsersList />
                    </select> 
                    <label htmlFor={USERNAME}>帳號名稱</label>
                </div>
                <div className="field">
                    <input type="password" name={PASSWORD} required
                           onChange={e => setPassword(e.target.value)}/>
                    <label htmlFor={PASSWORD}>密碼</label>
                </div>
                <div className="error-message field">{errorMessage}</div>
                <button type="submit" disabled={!infoLegal}>登入</button>
            </form>
        </div>
    )
}