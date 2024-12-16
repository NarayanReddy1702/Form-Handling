import React, { useState } from 'react'
import Front from './Front'

export default function Outer() {
    const [username ,setUsername]=useState("")
  return (
  <>
  <Front username={username} setUsername={setUsername}/>
  </>
  )
}
