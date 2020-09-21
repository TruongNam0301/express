var md5 = require('md5');
var User = require('../model/user.modal');

module.exports.login = function(req,res){
    res.render('./auth/login.pug');
}

module.exports.postLogin = function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    var hashed_password = md5(password);
     
    User.findOne({username: username})
    .then(function(user){
        if(!user){
            res.render('./auth/login.pug',{
                errorUsername : 'username not exist'
            });
            return;
        }
        if(user.password != hashed_password){
            res.render('./auth/login.pug',{
                errorPassword : 'wrong password'
            });
            return ;
        }  
        res.cookie('userId',user.id,{
            signed: true
        });
        
    })
    .then(function(){
        res.redirect('/');
    }) 
}

module.exports.logout = function(req,res){
    res.clearCookie('userId');
    res.render('./auth/login.pug');
}

