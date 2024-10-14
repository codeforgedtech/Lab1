import React from 'react';

interface DisplayProps {
    message: string;
}

const Display: React.FC<DisplayProps> = ({ message }) => {
    return <p>{message}</p>;
};

export default Display;