import PropTypes from 'prop-types';


import './Bottle.css'

const Bottle = ({ bottle, handleCartBottles }) => {

    const { img, name, price } = bottle;

    return (
        <div className='bottle'>
            <h2>Bottle - {name}</h2>
            <img src={img} alt={name} title={name} />
            <p>Price: {price} $</p>
            <button onClick={() => handleCartBottles(bottle)}>Purchase</button>
        </div>
    );
};



Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleCartBottles: PropTypes.func.isRequired,
}

export default Bottle;