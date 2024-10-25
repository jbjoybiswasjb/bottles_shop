import PropTypes from 'prop-types';

import './Cart.css';

const Cart = ({ cartBottles, handleRemoveFromCart }) => {
    return (
        <div className='cart'>
            <h3>Cart Bottles: {cartBottles.length}</h3>
            <div className='cart_container'>
                {
                    cartBottles.map(cartBottle =>
                        <div key={cartBottle?.id}>
                            <img
                                src={cartBottle?.img}
                            />
                            <div>
                                <button onClick={() => handleRemoveFromCart(cartBottle?.id)}>Remove</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};


Cart.propTypes = {
    cartBottles: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired,
}

export default Cart;