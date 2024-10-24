import { useEffect } from 'react';
import './Bottles.css';
import { useState } from 'react';

const Bottles = () => {

    // State Bottles data.
    const [bottles, setBottles] = useState([]);

    // Load Bottles data.
    useEffect(() => {
        fetch('bottles.json')
            .then(response => response.json())
            .then(data => setBottles(data))
    }, []);

    return (
        <div className="bottles">
            <h2>Bottles: {bottles.length}</h2>
        </div>
    );
};

export default Bottles;