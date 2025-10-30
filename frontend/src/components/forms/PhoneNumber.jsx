import React, { useState, useRef } from "react";

export function PhoneNumber() {
    const [value, setValue] = useState('');
    const inputRef = useRef(null);

    const handleFocus = () => {
        if (!value) {
            setValue('+7 ');
        }
    };

    const handleBlur = (e) => {
        if (value === '+7 ' || !value) {
            setValue('');
        }
    };

    const handleChange = (e) => {
        const input = e.target.value;
        
        // Оставляем только цифры и плюс
        let numbers = input.replace(/[^\d+]/g, '');
        
        // Убираем лишние цифры если они есть после +7
        if (numbers.startsWith('7')) {
            numbers = '7' + numbers.substring(1).replace(/7/g, '');
        }
        
        // Ограничиваем длину
        numbers = numbers.substring(0, 11); // +7 и 10 цифр
        
        // Форматируем номер
        let formatted = '+7 ';
        
        if (numbers.length > 1) {
            const digits = numbers.substring(1); // цифры после +7
            
            if (digits.length > 0) {
                formatted += `(${digits.substring(0, 3)}`;
            }
            if (digits.length > 3) {
                formatted += `) ${digits.substring(3, 6)}`;
            }
            if (digits.length > 6) {
                formatted += `-${digits.substring(6, 8)}`;
            }
            if (digits.length > 8) {
                formatted += `-${digits.substring(8, 10)}`;
            }
        }
        
        setValue(formatted);
    };

    const handleKeyDown = (e) => {
        // Запрещаем ввод любых символов кроме цифр и управляющих клавиш
        if (!/[0-9]/.test(e.key) && 
            !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Escape', 'Enter'].includes(e.key) &&
            !(e.ctrlKey || e.metaKey)) {
            e.preventDefault();
        }
    };

    return (
        <input 
            ref={inputRef}
            type="tel" 
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            placeholder="+7 (___) ___-__-__"
            style={{
                fontFamily: 'monospace',
                width: '250px',
                padding: '10px',
                fontSize: '16px',
                border: '1px solid #ccc',
                borderRadius: '4px'
            }}
        />
    );
}