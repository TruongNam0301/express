var User = require('../model/user.modal');

module.exports.checkAuth = function(req,res,next){
    if(!req.signedCookies.userId){ //check exist userId in cookies
        res.redirect('/auth/login');
        return;
    }
    User.findById(req.signedCookies.userId).then(function(user){
        if(!user){
            res.redirect('/auth/login');
            return;
        } 
        res.locals.user = user;
        next();
    })
    

}
