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

    useEffect(() => {
        if (pressed) {
            navigate('/staff', { state: { clockInTime: timestamp } });
        }
    }, [pressed, navigate, timestamp]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
                Welcome! Please Clock In
            </h1>
            <Button color="primary" variant="shadow" onClick={handleClockIn}>
                Clock In
            </Button>
            {pressed && <p className="mt-2 text-lg text-green-600">Clocked In at: {timestamp}</p>}
        </div>
    );
}

export default Clock;
