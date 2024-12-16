import React, { useEffect, useState } from 'react'
import "./login.css"

export default function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [username ,setUsername]=useState("")
//  useEffect(()=>{
//   console.log(email,password);
  
//  },[email,password])


  const handleLoginForm =(e)=>{
    alert("Form is submmited successfully")
  e.preventDefault()

    const data={
      username:username,
      email:email,
      password:password,
     }

    try{
      const url="http://localhost:3000/user"
      fetch(url,{
        method:'POST',
        headers:{
          "Conent-Type":"application/json"
        },body:JSON.stringify(data)
      }).then((res)=>{
         return  res.json()
      }).then((data)=>{
       console.log(data);
      }).catch((error)=>{
        console.log(error);
      }).finally(()=>{
        setUsername("")
setEmail("")
setPassword("")
      })
    }
    catch(error){
    console.log("Message",error);
    }

    }
 
   


  return (
    <>
      <div className="sign-in-part d-flex-c">
        <div className="sign-in-part-child d-flex-c">
          <h1>Sign in</h1>
          <form className="d-flex-c" action="" onSubmit={handleLoginForm}>
          <div className="input-sec">
              <label htmlFor="username">Name</label>
              <input type="text" name='username' placeholder='Enter Your Name' onChange={(event) => {
                setUsername(event.target.value)
              }} value={username} required />
            </div><br />
            <div className="input-sec">
              <label htmlFor="Email">Email</label>
              <input type="email" name='Email' placeholder='Enter Your Email address' onChange={(event) => {
                setEmail(event.target.value)
              }} value={email} required />
            </div><br />
            <div className="input-sec">
              <label htmlFor="password">Password</label>
              <input type="password" name='password' placeholder='Enter Your Password here ' onChange={(event) => {
                setPassword(event.target.value)
              }} value={password} required />
            </div><br />
            <button className='sign-in-btn'>Continue</button>
          </form>
          <div className="or-with-line d-flex-c">
            <hr />
            <h5>Or</h5>
          </div>
          <div className="connect-account d-flex-c">
            <div className="connect-google-acc d-flex">
              <img src="./images/google.svg" alt="" />
              <h5>Continue With Google</h5>
            </div>
            <div className="connect-google-acc d-flex">
              <img src="./images/create-new-account.svg" alt="" />
              <h5>Create a New Account</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

