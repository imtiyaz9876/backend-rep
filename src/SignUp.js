import React, { useEffect, useState } from "react";
 import {useNavigate} from "react-router-dom"

const SignUp = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
   const navigate= useNavigate()


  useEffect(()=>{
     const auth=localStorage.getItem("userinfo")
    if(auth){
      navigate("/")
    }
  },);

  const collectData =async()=>{
    // console.log( Name,Email,Password)

    let result= await fetch("http://localhost:5000/registers" ,{
      method:"POST",
      body:JSON.stringify({name:Name,email:Email,password:Password}),
      headers:{
        'Content-Type': 'application/json'
      },
    })
    result=await result.json()
    console.log(result)
      localStorage.setItem("userInfo", JSON.stringify(result))
    
    if(result){
      navigate("/")

    }
  }
  return (
    <>

        

    <div className="signup-container">
        <h1> Register</h1>
        <div className="signup-input">
          <input
            type="text"
            placeholder="enter your name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="enter your email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input type="text" placeholder="enter your password" value={Password}
            onChange={(e) => setPassword(e.target.value)} />

            <button type="button" onClick={collectData} > Sign Up</button>
        </div>
      </div>

      
    </>
  );
};

export default SignUp;
