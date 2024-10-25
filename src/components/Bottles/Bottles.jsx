import { useEffect } from 'react';
import './Bottles.css';
import { useState } from 'react';
import Bottle from '../Bottle/Bottle';
import { addCartToLS, getStoredCart, removeFromLS } from '../../utils/localStorage';
import Cart from '../Cart/Cart';

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
        if (bottles.length > 0) {
            const storedCartArrayOfId = getStoredCart();


            let arrayOfCartBottles = [];

            for (const id of storedCartArrayOfId) {
                const cartBottle = bottles.find(bottle => bottle.id === id);
                
                if(cartBottle) {
                    arrayOfCartBottles.push(cartBottle);
                }
            }
            setCartBottles(arrayOfCartBottles);
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



    const handleRemoveFromCart = id => {
        
        // Visual cart remove
        const remainingCart = cartBottles.filter(bottle => bottle?.id !== id);
        setCartBottles(remainingCart);


        // Remove from LS
        removeFromLS(id);

    }


    return (
        <div className="bottles">
            <h2 style={{ marginBottom: '2rem', fontSize: '2rem' }}>
                Bottles: {bottles.length}
            </h2>

            <Cart
                cartBottles={cartBottles}
                handleRemoveFromCart={handleRemoveFromCart}
            >
            </Cart>            

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