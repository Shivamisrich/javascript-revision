let cartQuantity = 0;

function showQuantity() {
    document.querySelector('.quantity-p').innerHTML = `Cart quantity:${cartQuantity}`;
}

function addToCart() {
    cartQuantity++;
    showQuantity();
}

function add2() {
    cartQuantity += 2;
    showQuantity();
}

function add3() {
    cartQuantity += 3;
    showQuantity();
}

function add4() {
    cartQuantity += 4;
    showQuantity();
}

function add5() {
    cartQuantity += 5;
    showQuantity();
}

function removeFromCart() {
    cartQuantity--;
    showQuantity();
}

function remove2() {
    cartQuantity -= 2;
    showQuantity();
}

function remove3() {
    cartQuantity -= 3;
    showQuantity();
}

function clearCart() {
    cartQuantity = 0;
    showQuantity();
}   

















