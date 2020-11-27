var mongoose = require("mongoose");

const ChiTietHHSchema = new mongoose.Schema({
    MonAn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MonAn'
    }.
    MaHD:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HoaDon'
    }
    SoLuong:Number,
    TinhTrang : String,
});

const HoaDon = mongoose.model('ChiTietHH', ChiTietHHSchema, 'ChiTietHH');

module.exports = ChiTietHH