import React from 'react'
import "./About.css"
export default function About() {
  return (
    <div className='abt-sec d-flex'>
      <div className="left d-flex">
        <img src="./images/detail.webp" alt="" />
      </div>
      <div className="right">
        <h1>Our Approach </h1>
        <p>We believe learning should be both challenging and enjoyable. That’s why our courses are designed to be hands-on, practical, and engaging. Whether you’re a complete beginner or looking to advance your skills, our structured lessons and real-world projects will help you gain the confidence you need to build stunning websites and applications.</p>
      </div>
    </div>
  )
}
