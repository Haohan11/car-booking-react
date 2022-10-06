import { useState, useEffect } from "react"
import UsersList from "./UsersList"

export default function LoginPage() {
    
    const URL = "http://192.168.0.108:1323/login"

    const USERNAME = "username"
    const PASSWORD = "password"

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

        200: res => {
            console.log(res)
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