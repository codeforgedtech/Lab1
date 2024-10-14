import React, { useState } from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Räknare: {count}</p>
            <button onClick={increment}>Öka</button>
        </div>
    );
};

export default Counter;