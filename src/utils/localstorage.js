// Get stored cart items from LS.
const getStoredCart = () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        return JSON.parse(storedCart);
    }
    return [];
}


const saveCartToLS = storedCartArray => {
    const newCart = JSON.stringify(storedCartArray);
}


// Add new item in existing cart.
const addCartToLS = id => {

    // Add item in storedCartArray.
    const storedCartArray = getStoredCart();
    storedCartArray.push(id);

    // Then convert the storedCartArray from array to string.
    saveCartToLS(storedCartArray);
    
}