import React from "react";
import './mess.css'

export function Messengers(){
    return(
        <>
            <div className="mess">
                <button><img src="./viber.svg" alt="" /></button>
                <button><img src="./whatsap.svg" alt="" /></button>
                <button><img src="./tg.svg" alt="" /></button>
            </div>
        </>
    )
}