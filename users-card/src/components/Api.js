//https://randomuser.me/api/?results=5

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from './User'

const Api = () => {

    const [users, setUsers]  = useState([])

    const fetchUsers = async() => {
        const response = await axios.get("https://randomuser.me/api/?results=21")
        setUsers(response.data.results)
    }

    useEffect(() => {
        fetchUsers()
    },[])

  return (
    <div>
        <ul className='flex w-[100%] justify-center flex-wrap'>
            {users.map((user,i) => (
                <li className='list-none'>
                    <User user={user} key={i}/>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Api