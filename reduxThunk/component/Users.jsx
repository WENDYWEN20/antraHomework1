import React from 'react'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
export default function Users() {
    const [users, setUsers]=useState(null)
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((res)=>res.json())
        .then((data)=>setUsers(data))},[])
  return (
    <div>
      {users?.map((user)=>{
      return (<Link key={user.id} to={`/users/${user.id}`}>
        <div>User Email: {user.email}</div>
      </Link>)})}
    </div>
  )
}
