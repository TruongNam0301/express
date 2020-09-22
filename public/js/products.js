document.addEventListener("DOMContentLoaded", function(event) {
      ready();
});

function ready(){
    //delete Product in Cart
    var productsButton = document.getElementsByClassName('add-cart-button');
    for (let i = 0; i < productsButton.length; i++) {
        productsButton[i].addEventListener("click", addProduct(productsButton[i]));
    }
}
function addProduct(product){
    return function(){
        var productId = product.parentNode.parentNode.dataset.id;
        $.ajax({
            url: '/cart/addToCart',
            method: 'POST',
            data: {productId: productId},
            success : function (data){
                $('.cart-quantity').html(data.totalQuantity);
            }
        })
    }
}