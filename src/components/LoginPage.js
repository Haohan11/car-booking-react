import { useState, useRef, } from "react"

import UsersList from "./UsersList"
import Header from "./Header"

import { REACT_APP_BASE_URL as BASE_URL, 
         REACT_APP_PATH_LOGIN as LOGIN_PATH, 
         TOKEN_NAME as TOKEN, 
         TOKEN_SAVE_NAME as TOKENNAME } from "../globalVariables"


export default function LoginPage(props) {

    const {Login} = props
    
    const URL = `${BASE_URL}/${LOGIN_PATH}`

    const USERNAME = "username"
    const PASSWORD = "password"
    
    const usernameRef = useRef()
    const passwordRef = useRef() 

    const [infoLegal, setInfoLegal] = useState(false)
    
    const [errorMessage, setErrorMessage] = useState("")

    const setButtonState = () => {
        const username = usernameRef.current.value
        const password = passwordRef.current.value
        setInfoLegal((username !== "" && password !== "") ? true : false)
    }

    const handleResponse = {
        401: () => {
            setErrorMessage("錯誤的帳號或密碼")
        },

        200: async res => {
            const token = await res.json()
            localStorage.setItem(TOKENNAME, token[TOKEN])
            console.log(Login().json())
        },
    }

    async function handleSubmit(event) {
        event.preventDefault()
        setErrorMessage("登入中...")
        
        const username = usernameRef.current.value
        const password = passwordRef.current.value

        const userCredential = new FormData()
        userCredential.append(USERNAME, username)
        userCredential.append(PASSWORD, password)

        try {
            const response = await fetch(URL, {
                method: "post",
                body: userCredential
            })
            handleResponse[response.status](response)
        }
        catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div className="login-page">
            <Header />
            <form onSubmit={handleSubmit}>
                <h2 className="title">登入</h2>
                <div className="field">
                    <select name={USERNAME} required ref={usernameRef}
                            onChange={setButtonState}>
                    <UsersList />
                    </select> 
                    <label htmlFor={USERNAME}>帳號名稱</label>
                </div>
                <div className="field">
                    <input type="password" name={PASSWORD} required ref={passwordRef}
                           onChange={setButtonState}/>
                    <label htmlFor={PASSWORD}>密碼</label>
                </div>
                <div className="error-message field">{errorMessage}</div>
                <button type="submit" disabled={!infoLegal}>登入</button>
            </form>
        </div>
    )
}