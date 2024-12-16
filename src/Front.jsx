import React, { useState } from 'react'
import "./Front.css"

export default function Front(props) {
    const oldArr = ["cursive", "inherit", "Oswald", "monospace", " fantasy", "Yuji Mai", "Edu AU VIC WA NT Arrows", "Ultra", "Pacifico", "Sixtyfour Convergence", "Dancing Script", "Ga Maamli"]
    let newarr = oldArr.map((value, index) => {
        return <h1 index={index} style={{ fontFamily: value }}>{props.username}</h1>
    })
    const arr = newarr;
    return (
        <>
            <div className="box-sec d-flex">
                <div className="left">
                    <input type="text" placeholder='Write here what you want' onChange={(event) => {
                        props.setUsername(event.target.value)
                    }} value={props.username} />
                </div>
                <div className="right d-flex-c">
                    {arr}
                </div>
            </div>
        </>
    )
}
