import React from "react";
import './heart.css'

export function Heart(){
    return(
        <>
            <button className="heart-icon">
                <div className="heart-bg"><img src="./Heart.svg" alt="" /></div>
            </button>
        </>
    )
}