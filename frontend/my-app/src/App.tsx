import React, { useEffect, useState } from 'react';
import { fetchHello } from './services/api';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchHello().then((data) => setMessage(data));
    }, []);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

export default App;