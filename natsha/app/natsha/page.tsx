"use client";
import  { FormEvent, useState } from 'react'

const page = () => {
    const [inputval, Setinputval]=useState("");
    const handlesubmit = (event: FormEvent) =>{
        event.preventDefault();
        

    }
  return (
    <div><div>
        <h1>Enter Your Name</h1>

        </div>
        <form onSubmit={handlesubmit}>
            <input type="text" placeholder="Type your name" value={inputval} onChange={(e)=>{Setinputval(e.target.value)}} />
            <button type='submit' >pridict data</button>
        </form>
        </div>
  )
}

export default page