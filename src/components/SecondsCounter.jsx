import React, { useState, useEffect } from 'react';

const SecondsCounter = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatSeconds = (seconds) => {
        return seconds.toString().padStart(6, '0');
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}>
            <div style={{
                backgroundColor: 'black',
                color: 'white',
                fontSize: '48px',
                fontFamily: 'monospace',
                padding: '20px 40px',
                borderRadius: '10px',
                textAlign: 'center',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
            }}>
                {formatSeconds(seconds)}
                </div>
        </div>
    );
};

export default SecondsCounter;
