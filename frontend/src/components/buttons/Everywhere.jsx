import React, {useState} from "react";
import './everywhere.css';

export function Everywhere(){
    
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <div className="dropdown">
            <button 
                className="dropdown-toggle"
                onClick={() => setIsOpen(!isOpen)}
            >
                Везде
                <img 
                src="./down.svg" 
                alt="стрелка"
                className={`dropdown-arrow ${isOpen ? 'rotated' : ''}`}
                />
            </button>
            
            {isOpen && (
                <div className="dropdown-menu">
                    <div className="dropdown-item">
                        <a href="">Самокаты</a> 
                    </div>
                    <div className="dropdown-item">
                        <a href="">Аксессуары</a>
                    </div>
                </div>
            )}
            </div>
        </>
        
    )

}