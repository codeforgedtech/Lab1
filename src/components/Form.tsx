import React, { useState } from 'react';

interface FormProps {
    onSubmit: (input: string) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(inputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Skriv något"
                required
            />
            <button type="submit">Skicka</button>
        </form>
    );
};

export default Form;