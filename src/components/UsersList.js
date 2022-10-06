import { useState, useEffect } from "react"

export default function() {
    const URL = "http://192.168.0.108:1323/users"

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
            <option value="">Users not found</option>
        }
        </>
    )
}