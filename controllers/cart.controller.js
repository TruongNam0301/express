 var Product = require('../model/product.model');
const Cart = require('../model/cart.model');

module.exports.showCart = function(req,res){
    var cart = new Cart (req.session.cart);
    res.render('./cart',{
        cart: cart.listItem(),
        totalPrice: cart.totalPrice,
    });
}

module.exports.addToCart = function (req,res){
    var productId = req.params.productId;
    var sessionId = req.signedCookies.sessionId;
    //console.log(productId);
    if(!sessionId) {
        res.redirect('/products');
        return;
    }
    var cart = new Cart (req.session.cart ? req.session.cart :{});
    Product.findById(productId).then(function(product){
        cart.add(product,productId);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/products');
    })
} 

module.exports.updateCart = function(req,res){
    var item = req.body;
    res.send( item);
} 

