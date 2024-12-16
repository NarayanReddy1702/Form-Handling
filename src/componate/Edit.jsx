import React, { useEffect, useState } from 'react'
import "./Edit.css"

function Edit(){
    
   const [student, setStudent] = useState([])
useEffect(()=>{
    try{
        fetch("http://localhost:3000/user/2483").then(res=>res.json()).then(data=>setStudent(data)).catch(err=>console.log(err))
    }
    catch(error){
        console.log("error",error);
    }
},[])

console.log(student);

    const updateData =()=>{
    
        let data={
            username:student.username,
            email:student.email,
            password:student.password,
        }
      fetch("http://localhost:3000/user/2483",{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      }).then(res=>res.json()).then(data=>alert("Update success"))
     }


  return (
  <>
  <form style={{columnGap:"1vh",width:'100%',height:'90vh'}} className='d-flex-c' action="">
    <input type="text" placeholder='Enter Your Name ' value={student.username} onChange={(e)=>{
        setStudent({
            ...student,username:e.target.value
        })
    }}/>
    <input type="email" placeholder='Enter your Email' value={student.email} onChange={(e)=>{
        setStudent({
            ...student,email:e.target.value
        })
    }}/> 
    <button style={{width:'20%',marginTop:'1%',fontSize:'2vh'}} className='btn' onClick={updateData}>Update</button>
  </form>
  </>
  )
}

export default Edit