var mongoose = require("mongoose");

const LoaiMASchema = new mongoose.Schema({
    TenLoai: String ,
    Hinh:String
});

const LoaiMA = mongoose.model('LoaiMA', LoaiMASchema, 'LoaiMA');

module.exports = LoaiMA