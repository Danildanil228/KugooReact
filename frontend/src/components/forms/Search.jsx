import React from "react"
import './search.css'
import { Everywhere } from "../buttons/Everywhere"

export function Search(){
    return(
        <>
            <div className="search">
                <div className="search-input-block">
                    <Everywhere/>
                    <input className="search-input" type="text" placeholder="Искать самокат KUGO"/>
                </div>
                <div className="search-icon">
                    <button><img src="./Search.svg" alt="" /></button>
                </div>
            </div>
        </>
    )
}