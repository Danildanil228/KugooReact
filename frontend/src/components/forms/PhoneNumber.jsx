import InputMask from 'react-input-mask';
import React, { useState } from "react";
import './phone-number.css';

export function PhoneNumber(){
    const [phone, setPhone] = useState('');

    return(
        <InputMask
            mask="+7 (999) 999 - 99 - 99"
            placeholder="+7 (___) ___ - __ - __"
            className="phone-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
        />
    );
}