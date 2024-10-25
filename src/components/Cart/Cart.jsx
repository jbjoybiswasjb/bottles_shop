import PropTypes from 'prop-types';

import './Cart.css';

const Cart = ({ cartBottles }) => {
    return (
        <div className='cart'>
            <h3>Cart Bottles: {cartBottles.length}</h3>
            <div className='cart_container'>
                {
                    cartBottles.map(cartBottle =>
                        <img 
                            src={cartBottle?.img}
                            key={cartBottle?.id}
                        />
                    )
                }
            </div>
        </div>        
    );
};


Cart.propTypes = {
    cartBottles: PropTypes.array.isRequired,
}

export default Cart;