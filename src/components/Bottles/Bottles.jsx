import { useEffect } from 'react';
import './Bottles.css';
import { useState } from 'react';
import Bottle from '../Bottle/Bottle';

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
            <h2 style={{marginBottom: '2rem', fontSize: '2rem'}}>
                Bottles: {bottles.length}
            </h2>

            <div className='bottles_container'>
                {
                    bottles.map(bottle =>
                        <Bottle
                            bottle={bottle}
                            key={bottle?.id}
                        >

                        </Bottle>
                    )
                }
            </div>
        </div>
    );
};

export default Bottles;