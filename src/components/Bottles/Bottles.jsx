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



    // State Bottle cart.
    const [cartBottles, setCartBottles] = useState([]);

    return (
        <div className="bottles">
            <h2 style={{marginBottom: '2rem', fontSize: '2rem'}}>
                Bottles: {bottles.length}
            </h2>

            <h3>Cart Bottles: {cartBottles.length}</h3>

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