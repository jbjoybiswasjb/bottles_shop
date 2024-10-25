import './Cart.css';

const Cart = ({ cartBottles }) => {
    console.log(cartBottles)
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

export default Cart;