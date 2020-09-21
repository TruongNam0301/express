
document.addEventListener("DOMContentLoaded", function(event) {
      ready();
});
    


function ready(){
    //delete Product in Cart
    var productsButton = document.getElementsByClassName('delete-cart-button');
    for (let i = 0; i < productsButton.length; i++) {
        productsButton[i].addEventListener("click", deleteProduct(productsButton[i]));
    }
    //update Quantity of each Product in Cart
    var products = document.getElementsByClassName('cart-quantity-input');
    for (let i = 0; i < products.length; i++) {
        products[i].addEventListener("change", updateQuantity(products[i]));
    }
}


function updateQuantity (product){
    return function (){
        var quantity= product.value;
        var productId = product.parentNode.parentNode.dataset.id;
        $.ajax({
            url: '/cart/updateCart',
            method: 'POST',
            data: {
                id: productId,
                quantity: quantity
            },
            success: function(data){
                $('.total-show').html(data.totalPrice);
            }
        })
    }
}

function deleteProduct(product){
    return function(){
        var productId = product.parentNode.parentNode.dataset.id; 
        $.ajax({
            url: '/cart/deleteCart',
            method: 'POST',
            data: {id: productId},
            success: function(data){
                console.log(data);
            }
        })
    }
}

    
