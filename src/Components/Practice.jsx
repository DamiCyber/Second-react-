import React, { useState } from 'react'
import style from "Practice.module.css"
const practice = () => {
    const [name, setname] = useState("Damola")
    const [user, setUserName] = useState("")

    const use = (i) => {
        setUserName(i.target.value)
    }
     const changeName =()=>{
         setname(user)
     }
  return (
    <div>
        <h1>{name}</h1>
        <input onChange={use} type="text"/>
        <button onClick={changeName}>Click</button>
    </div>
  )
}

export default practice