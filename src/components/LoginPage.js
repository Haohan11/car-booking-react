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
    
    const usernameRef = useRef()
    const passwordRef = useRef() 
    const buttonRef = useRef()
    
    const [message, setMessage] = useState("")

    const setButtonState = () => {
        buttonRef.current.disabled = 
            usernameRef.current.validity.valid && 
            passwordRef.current.validity.valid ? false : true
    }

    const handleResponse = {
        401: () => {
            setMessage("錯誤的帳號或密碼")
        },

        200: async res => {
            const token = await res.json()
            localStorage.setItem(TOKENNAME, token[TOKEN])
            Login(token[TOKEN])
        },
    }

    async function handleSubmit(event) {
        event.preventDefault()
        setMessage("登入中...")

        const userCredential = new FormData(event.target)

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
                    <select name="username" required ref={usernameRef}
                            onChange={setButtonState}>
                    <UsersList />
                    </select> 
                    <label htmlFor="username">帳號名稱</label>
                </div>
                <div className="field">
                    <input type="password" name="password" required ref={passwordRef}
                           onChange={setButtonState}/>
                    <label htmlFor="password">密碼</label>
                </div>
                <div className="error-message field">{message}</div>
                <button ref={buttonRef} type="submit" disabled>登入</button>
            </form>
        </div>
    )
}