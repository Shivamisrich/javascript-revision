const product1 = {
    name: 'socks',
    price: '109000 cents'
};
const product2 = {
    name: 'joota',
    price: '10990 cents' 
};

function comparePrice(product1, product2) {
    // Convert price strings to numbers by removing ' cents' and using parseInt
    const price1 = parseInt(product1.price);  
    const price2 = parseInt(product2.price);  

    if (price1 > price2) {
        return product2;
    } else {
        return product1;
    }
}

console.log(comparePrice(product1, product2));