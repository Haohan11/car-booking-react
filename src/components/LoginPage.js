import { useState } from "react"
import UsersList from "./UsersList"

export default function LoginPage() {

    const USERNAME = "username"
    const PASSWORD = "password"

    const URL = "http://192.168.0.108:1323/login"

    async function handleSubmit(event) {
        event.preventDefault()
        const formElement = event.target
        
        const userCredential = new FormData()
        userCredential.append(USERNAME, formElement.username.value)
        userCredential.append(PASSWORD, formElement.password.value)
        const response = await fetch(URL, {
            method: "post",
            body: userCredential
        })
    }
    
    return (
        <>
            <form id="login-page" onSubmit={handleSubmit}>
                <div id="login-container">
                    <h1 className="title">登入</h1>
                    <div className="field">
                        <label htmlFor="username">帳號名稱</label>
                        <select id="username" name="username">
                        <UsersList />
                        </select> 
                    </div>
                    <div className="field">
                        <label htmlFor="password">密碼</label>
                        <input type="password" id="password" name="password"/>
                    </div>
                    <button type="submit">登入</button>
                </div>
            </form>
        </>
    )
}