import React, {useState} from "react";
import './price.css';
import "@radix-ui/themes/styles.css";
import {Button, DropdownMenu } from "@radix-ui/themes";

export function Price(){
    
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <DropdownMenu.Root className="price-dropmenu">
                <DropdownMenu.Trigger>
                    <Button className="price" variant="soft">
                        По цене 
                        <DropdownMenu.TriggerIcon className="trig"/>
                    </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className='price-drop'>
                    <DropdownMenu.Item className='item'>Сначала дорогие</DropdownMenu.Item>
                    <DropdownMenu.Item className='item'>Сначала дешёвые</DropdownMenu.Item>
                    
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </>
        
    )

}