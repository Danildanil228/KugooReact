import React from "react";
import './cart.css'

export function Cart(){
    return(
        <>
            <button className="cart-icon">
                <div className="cart-bg"><img src="./cart.svg" alt="" />Корзина</div>
            </button>
        </>
    )
}