import './Bottle.css'

const Bottle = ({bottle}) => {

    const {img, name, price} = bottle;

    return (
        <div className='bottle'>
            <h2>Bottle - {name}</h2>
            <img src={img} alt={name} title={name}/>
            <p>Price: {price}</p>
        </div>
    );
};

export default Bottle;