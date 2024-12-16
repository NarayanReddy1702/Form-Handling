import React, { useEffect, useState } from 'react'
import "./Contact.css"

export default function Contact() {
     const [username, setUsername] = useState("")
     const [email, setEmail] = useState("")
     const [message, setMessage] = useState("")

     useEffect(() => {
          //     console.log(username,email,message)
     }, [username, email, message])

     const handleLogin = (event) => {
          event.preventDefault();
          console.log("Username:", username + " " + "Email:", email + " " + "Message :", message)
          setUsername("")
          setEmail("")
          setMessage("")
     }

     return (
          <div className='contact-sec'>
               <h1>Let's connect</h1>
               <div className="img-prt">
                    <img src="./images/contact-me.svg" alt="" />
               </div>
               <div class="form-prt">
                    <form onSubmit={handleLogin}>
                         <label for="name">Name</label>
                         <input type="text" name="username" placeholder="Your Name" required onChange={(event) => {
                              setUsername(event.target.value)
                         }} value={username} />
                         <label for="emial">Email</label>
                         <input type="email" name="email" placeholder="Your Email" required onChange={(event) => {
                              setEmail(event.target.value)
                         }} value={email} />
                         <label for="message">Message</label>
                         <textarea name="message" placeholder="Your Message" required onChange={(event) => {
                              setMessage(event.target.value)
                         }} value={message}></textarea>
                         <button className="btn" type="submit">Send Message</button>
                    </form>
               </div>
          </div>
     )
}
