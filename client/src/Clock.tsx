import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Clock() {
    const [pressed, setPressed] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (pressed) {
            navigate('/staff'); // Adjust the path according to your routing setup
        }
    }, [pressed, navigate]);

    return (
        <>
            <h1>Please Clock In</h1>
            <button type="button" onClick={() => setPressed(true)}>Clock In</button>
            {pressed && <p>Clocked In!</p>}
        </>
    );
}

export default Clock;
