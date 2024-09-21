import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";

function Clock() {
    const [pressed, setPressed] = useState(false);
    const [timestamp, setTimestamp] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleClockIn = () => {
        const currentTime = new Date().toLocaleString(); // Get the current timestamp
        setTimestamp(currentTime);
        setPressed(true);
    };

    const handleLogOut= () =>{
        navigate('/');
    }

    useEffect(() => {
        if (pressed) {
            navigate('/staff', { state: { clockInTime: timestamp } });
        }
    }, [pressed, navigate, timestamp]);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-center mb-4">
                Welcome!<br/>Please Clock In
            </h1>
            <Button variant="shadow" onClick={handleClockIn}>
                Clock In
            </Button>
            {pressed && <p className="mt-2 text-lg">Clocked In at: {timestamp}</p>}
            <Button variant="shadow" className = "mt-10" onClick={handleLogOut}>
                Log Out
            </Button>
        </div>
    );
}

export default Clock;
