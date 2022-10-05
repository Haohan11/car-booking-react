import { useState } from "react"
import UsersList from "./UsersList"

export default function LoginPage() {

    function handleSubmit(event) {
        event.preventDefault()
        const userCredential = {

        }
        console.log(event.target.username.value)
    }
    
    return (
        <>
            <form id="login-page" onSubmit={handleSubmit}>
                <div id="login-container">
                    <h1 className="title">登入</h1>
                    <div className="field">
                        <label htmlFor="username">帳號名稱</label>
                        <UsersList />
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