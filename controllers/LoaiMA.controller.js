var LoaiMA = require('../model/LoaiMA.model');

module.exports.ShowList= async function(req,res){
    var loais = await LoaiMA.find({});
    return res.render('./index.pug',{
        LoaiMA: loais
    })
}
