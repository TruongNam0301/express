const db = require('../db');
const shortid = require('shortid');

module.exports.createSessionId = function (req,res,next){
    if(! req.signedCookies.sessionId){
        var sessionId = shortid.generate();
        res.cookie('sessionId',sessionId,{
            signed: true 
        });
    }
    next();
}
