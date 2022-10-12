import { useState, useEffect } from "react"

import { REACT_APP_BASE_URL, REACT_APP_PATH_USERS } from "../globalVariables"

export default function UsersList() {
    
    const BASE_URL = REACT_APP_BASE_URL
    const USERS_PATH = REACT_APP_PATH_USERS
    const URL = `${BASE_URL}/${USERS_PATH}`

    const [users, setUsers] = useState()
    
    async function getUsers() {
        const response = await fetch(URL)
        const data = await response.json()
        setUsers(data)
    }
    
    useEffect(() => {
        getUsers()  
    }, [])

    return (
        <>
        { Array.isArray(users) ?
            <>
            <option value="">--選擇使用者--</option>
            {
                users.map( (user, index) => 
                <option key={index} value={user}>{user}</option>)
            }
            </> : 
            <option value="">--讀取使用者資料時發生錯誤--</option>
        }
        </>
    )
}