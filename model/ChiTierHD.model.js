var mongoose = require("mongoose");
var MonAn = require('./MonAn.model');

const ChiTietHDSchema = new mongoose.Schema({
    MonAn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: MonAn
    },
    HoaDon:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HoaDon'
    },
    SoLuong:Number,
    TinhTrang : String,
}
);

const ChiTietHD = mongoose.model('ChiTietHD', ChiTietHDSchema, 'ChiTietHD');

module.exports = ChiTietHD