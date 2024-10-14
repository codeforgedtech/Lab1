import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Display from './components/Display';
import Counter from './components/Counter';
import Footer from './components/Footer';
import FocusInput from './components/FocusInput';

const App: React.FC = () => {
    const [message, setMessage] = useState<string>('');

    const handleFormSubmit = (input: string) => {
        setMessage(input);
    };

    useEffect(() => {
        console.log('Message updated:', message);
    }, [message]);

    return (
        <div>
            <Header />
            <Form onSubmit={handleFormSubmit} />
            <Display message={message} />
            <Counter />
            <FocusInput />
            <Footer />
        </div>
    );
};

export default App;
