var mongoose = require("mongoose");

const HoaDonMASchema = new mongoose.Schema({
   TongTien: Number ,
    NgayMua: Date,
    TinhTrang : String,
});

const HoaDon = mongoose.model('HoaDon', HoaDonMASchema, 'HoaDon');

module.exports = HoaDon