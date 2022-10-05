import { useState, useEffect } from "react"

export default function() {
    const URL = "http://192.168.0.108:1323/users"

    const [users, setUsers] = useState(['user1', 'user2'])
    
    async function getUsers() {
        try {
            const response = await fetch(URL)
            const data = await response.json()
            setUsers(data)
        }
        catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        getUsers()  
    }, [])

    return (
        <>
            <option>--選擇使用者--</option>
            { users.map( (user, index) => 
                <option key={index} value={user}>{user}</option>
            )}
        </>
    )
}