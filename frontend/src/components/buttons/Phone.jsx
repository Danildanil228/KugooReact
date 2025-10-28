import React from "react";
import './phone.css'

export function Phone(){
    return(
        <>
            <div className="phone">
                <p>+7 (800) 505-54-61</p>
                <button className="plus-btn"><img className="plus" src="./+.svg" alt="" /></button>
            </div>
        </>
    )
}