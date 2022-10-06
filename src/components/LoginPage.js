import { useState, useEffect } from "react"
import UsersList from "./UsersList"

export default function LoginPage() {
    
    const URL = "http://192.168.0.108:1323/login"

    const USERNAME = "username"
    const PASSWORD = "password"

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [infoLegal, setInfoLegal] = useState(false)

    useEffect(() => {
        setInfoLegal((username !== "" && password !== "") ? true : false)
    }, [username, password])

    async function handleSubmit(event) {
        event.preventDefault()

        const userCredential = username && password && 
        (() => {
            const formData = new FormData()
            formData.append(USERNAME, username)
            formData.append(PASSWORD, password)
            return formData
        })()

        const response = await fetch(URL, {
            method: "post",
            body: userCredential
        })
    }
    
    return (
        <>
            <form id="login-page" onSubmit={handleSubmit}>
                <h1 className="title">登入</h1>
                <div className="field">
                    <label htmlFor={USERNAME}>帳號名稱</label>
                    <select name={USERNAME} onChange={e => setUsername(e.target.value)}>
                    <UsersList />
                    </select> 
                </div>
                <div className="field">
                    <label htmlFor={PASSWORD}>密碼</label>
                    <input type="password" name={PASSWORD} onChange={e => setPassword(e.target.value)}/>
                </div>
                    <button type="submit" disabled={!infoLegal}>登入</button>
            </form>
        </>
    )
}