const Cart = require('../model/cart.model');
const shortid = require('shortid');

module.exports.createSessionId = function (req,res,next){
    if(! req.signedCookies.sessionId){
        var sessionId = shortid.generate();
        res.cookie('sessionId',sessionId,{
            signed: true 
        });
    }
    var cart = new Cart (req.session.cart ? req.session.cart : {});
        res.locals.cart = cart ;
    next();
}
