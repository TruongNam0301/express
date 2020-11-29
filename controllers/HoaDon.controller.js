var HoaDon = require('../model/HoaDon.model');
var ChiTietHD = require('../model/ChiTierHD.model');

module.exports.CreateBill = async function (req,res){
    var cart = req.session.cart;
    var date = getcurrdate();
    var Bill = await HoaDon.create({TongTien:cart.TotalPrice,NgayMua:date,TinhTrang:'Chua Thanh Toan'})
    var datas= await CreateDetailBill(cart,Bill._id);
    req.session.cart={};
    return res.render('./bill/index.pug',  {
        arr: datas
    })
}

async function CreateDetailBill(cart,BillID){
    var arr=[]
    for(var k in cart.items){
        var quantity = cart.items[k].quantity;
        var s= await ChiTietHD.create({MonAn:k,HoaDon:BillID,SoLuong:quantity,TinhTrang: 'Chua Hoan Thanh'})
        var data = await ChiTietHD.findOne({MonAn:{_id:k}}).populate("MonAn")
        arr.push(data);
    }
    return arr 
}

function getcurrdate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today;
}