import { useEffect } from 'react';
import './Bottles.css';
import { useState } from 'react';
import Bottle from '../Bottle/Bottle';
import { addCartToLS, getStoredCart } from '../../utils/localStorage';

const Bottles = () => {

    // State Bottles data.
    const [bottles, setBottles] = useState([]);

    // Load Bottles data.
    useEffect(() => {
        fetch('bottles.json')
            .then(response => response.json())
            .then(data => setBottles(data))
    }, []);

    // Load cart from LS.
    useEffect(() => {
        console.log(bottles.length);
        if (bottles.length > 0) {
            const storedCartArrayOfId = getStoredCart();
            console.log(storedCartArrayOfId);
        }
    }, [bottles])



    // State Bottle cart.
    const [cartBottles, setCartBottles] = useState([]);

    // Handle Cart Bottles.
    const handleCartBottles = (bottle) => {
        const newCartBottles = [...cartBottles, bottle];
        setCartBottles(newCartBottles);
        addCartToLS(bottle?.id);
    }

    return (
        <div className="bottles">
            <h2 style={{ marginBottom: '2rem', fontSize: '2rem' }}>
                Bottles: {bottles.length}
            </h2>

            <h3>Cart Bottles: {cartBottles.length}</h3>

            <div className='bottles_container'>
                {
                    bottles.map(bottle =>
                        <Bottle
                            bottle={bottle}
                            key={bottle?.id}
                            handleCartBottles={handleCartBottles}
                        >

                        </Bottle>
                    )
                }
            </div>
        </div>
    );
};

export default Bottles;