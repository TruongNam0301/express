var Product = require('../model/product.model');

module.exports.show = function(req,res){
    
    var page = req.query.page || 1;
    var begin = (page-1)*8;
    var end = page*8;
    var pages =[];

    Product.find().then(function(products){
        var product = products.slice(begin,end);
        for (var i = 1 ;i <= Math.ceil(products.length/8);++i){
            pages.push(i);
        }
        res.render('./products',{
            products: product,
            standing_page: parseInt(page),
            pages: pages,
        })
    })
}

module.exports.showDetailProduct = async function(req,res){
    var id = req.params.id;
    var product = await Product.findById(id);
    res.render('./products/detailProduct',{
        product: product
    })
}