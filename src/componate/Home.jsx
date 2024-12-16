import React, { useState } from 'react'
import "./Home.css"
export default function Home() {
     
    const [data,setData]=useState([])

    return (
        <div className='home d-flex'>
            <div className="left">
                <h1>Welcome to Our Coding challenge!. </h1>
                <p>Coding challenges are problem-solving exercises that require you to write code to solve specific tasks or puzzles. These challenges come in various forms, from simple algorithmic problems to more complex real-world scenarios.</p>
                <div className="btn-sec d-flex">
                    <button className='btn start'>Get start</button>
                    <button className='btn join'>Join Course</button>
                </div>
            </div>
            <div className="right ">
                <img src="./images/challenge.png" alt="" />
            </div>
        </div>
    )
}
