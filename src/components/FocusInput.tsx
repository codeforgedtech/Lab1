import React, { useRef, useState } from 'react';

const FocusInput: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputValue, setInputValue] = useState<string>(''); 
    const [message, setMessage] = useState<string>(''); 

    const handleFocus = () => {
        inputRef.current?.focus();
        setMessage('Inmatningsfältet har fokus!'); 
    };

    const handleClear = () => {
        if (inputRef.current) {
            inputRef.current.value = ''; 
            setInputValue(''); 
            setMessage('Inmatningsfältet har rensats!');
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <div style={{ margin: '20px' }}>
          
            <h3>Du har skrivit: {inputValue}</h3>
            
            <input
                type="text"
                ref={inputRef} 
                value={inputValue} 
                onChange={handleChange} 
                placeholder="Skriv något här..."
                style={{
                    backgroundColor: inputValue ? 'lightgreen' : 'white', 
                    border: '1px solid gray',
                    padding: '8px',
                    marginRight: '10px',
                }}
            />
            <button onClick={handleFocus}>Fokusera på input</button>
            <button onClick={handleClear}>Rensa input</button>
            {message && <p>{message}</p>} 
        </div>
    );
};

export default FocusInput;
