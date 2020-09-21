const db = require('../db');
const shortid = require('shortid');


module.exports.index = function(req,res){
    res.render('./users/index.pug',{
        users : db.get('users').value()
    });
    console.log(sessionId);
}

module.exports.search =  function(req,res){
    var q = req.query.q;
    var users = db.get('users').value();
    var result = users.filter(function(x){
        return x.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('./users/index.pug',{
        users :result,
        search : q
    });
}

module.exports.create = function(req,res){
    res.render('./users/create.pug');
}

module.exports.user = function(req,res){
    var id=  req.params.id;
    var user = db.get('users').find({ id: id }).value();
    res.render('./users/view.pug',{
        users: user
    })
}

module.exports.postCreate = function(req,res){
    var errors = new Object();
    errors.name ='';
    errors.age = '';
    if(!req.body.name) errors.name='* name is required';
    if(!req.body.age) errors.age='* age is required';
    if(errors.name !==''|| errors.age!=='') {
        res.render('./users/create.pug',{
            errors: errors,
            values: req.body
        })
        return;
    }
    req.body.id =shortid.generate();
    req.body.avatar = req.file.filename;
    db.get('users').push(req.body).write()
    res.redirect('/users');
}