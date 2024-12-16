import React, { useEffect, useState } from 'react'
import "./Admin.css"
import { CiEdit } from 'react-icons/ci'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Edit from './Edit'

function Admin() {

  const [data,setData]=useState([])

  useEffect(()=>{
  const url="http://localhost:3000/user"
  fetch(url).then((res)=>{
     return  res.json()
  }).then((data)=>{
   setData(data)
  //  console.log(data);
  }).catch((error)=>{
    console.log(error);
  })
  },[data])
  
  const handleDelete =(id)=>{
    window.confirm(`Are you sure want to delete this ${id} id information `) ? fetch(`http://localhost:3000/user/${id}`,
     {
      method:"DELETE"
     }).then(res=>res.json()).then(data=>console.log(data)): console.log("No Problem");
     
  }

  return (
  <>
   <div className="table">
   <table border={1}>
  <tr>
    <th>ID</th>
    <th>Name of the user</th>
    <th>Email Address</th>
    <th>User Password</th>
    <th>EDIT</th>
    <th>DELETE</th>
  </tr>
 {
  data.map((val,index)=>{
    return(
      <tr key={index}>
        <td>{index+1}</td>
        <td>{val.username}</td>
      <td>{val.email}</td>
      <td>{val.password}</td>
      <td style={{cursor:"pointer"}} ><Link to="/Edit" ><CiEdit values={val.id} /></Link></td>
      <td style={{cursor:'pointer'}} onClick={()=>handleDelete(val.id)}><MdDelete /></td>
    </tr>
    )
  })
 }
 
</table>
   </div>

  </>
  )
}

export default Admin
