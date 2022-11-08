import {useEffect, useState } from 'react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
      const navigate= useNavigate()


     useEffect(()=>{
        
        const auth=localStorage.getItem("userinfo")
       if(auth){
         navigate("/")
       }
     })
   

     const loginData =async()=>{
         console.log( Email,Password)
    
        let result= await fetch("http://localhost:5000/login" ,{
          method:"POST",
          body:JSON.stringify({email:Email, password:Password}),
          headers:{
            'Content-Type': 'application/json'
          },
        })
        result=await result.json()
        console.log(result)
        
        if(result.name){
          localStorage.setItem("userInfo", JSON.stringify(result))

          navigate("/")
    
        }else{
            alert("plz enter correct details")
        }
      }

  return (
    <div>

<div className="login-container">
        <h1> login</h1>
        <div className="signup-input">
          
          <input
            type="text"
            placeholder="enter your email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input type="text" placeholder="enter your password" value={Password}
            onChange={(e) => setPassword(e.target.value)} />

            <button type="button" onClick={loginData} > login</button>
        </div>
      </div>


    </div>
  )
}

export default Login