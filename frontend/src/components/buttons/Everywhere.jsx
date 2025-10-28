import './everywhere.css';
import React, {useState} from "react";
import "@radix-ui/themes/styles.css";
import {Button, DropdownMenu } from "@radix-ui/themes";


export function Everywhere(){
    
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <DropdownMenu.Root className="dropmenu">
                <DropdownMenu.Trigger>
                    <Button className="everywhere" variant="soft">
                        Везде <img className="arrow" src="./down.svg" alt="" />
                    </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className='drop'>
                    <DropdownMenu.Item className='item'>Самокаты</DropdownMenu.Item>
                    <DropdownMenu.Item className='item'>Аксессуары</DropdownMenu.Item>
                    
                </DropdownMenu.Content>
            </DropdownMenu.Root>

        </>
        
    )

}