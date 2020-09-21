document.addEventListener("DOMContentLoaded", function(event) {
    ready();
});
    
function ready (){
    var products = document.getElementsByClassName('cart-quantity-input');
    for (var i=0 ; i< products.length ; ++i){
        products[i].addEventListener('change',updateQuantity(products[i]));
    }
}


function updateQuantity(product){
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
            console.log(data);
        }
    })
  
}