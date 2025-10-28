import React, {useState} from "react";
import './price.css';

export function Price(){
    
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <div className="price-dropdown">
            <button 
                className="dropdown-toggle"
                onClick={() => setIsOpen(!isOpen)}
            >
                По цене
                <img 
                src="./arrow2.svg" 
                alt="стрелка"
                className={`dropdown-arrow ${isOpen ? 'rotated' : ''}`}
                />
            </button>
            
            {isOpen && (
                <div className="dropdown-menu">
                    <div className="dropdown-item">
                        <a href="">Сначала дорогие</a> 
                    </div>
                    <div className="dropdown-item">
                        <a href="">Сначала дешёвые</a>
                    </div>
                </div>
            )}
            </div>
        </>
        
    )

}