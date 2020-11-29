const express = require('express');
const session = require('express-session');
const pug = require('pug');
const mongoose = require('mongoose');

const HoaDonRouter = require('./routes/HoaDon.route')
const userRouter = require('./routes/user.route');
const authRouter = require('./routes/auth.route');
const cartRouter = require('./routes/cart.route');
const productsRouter = require('./routes/MonAn.route');
const LoaiMARouter = require('./routes/LoaiMA.route');

const cookieParser = require('cookie-parser');
const authMiddleWare = require('./middlewares/auth.middleware');
const sessionMiddleWare = require('./middlewares/session.middleware');

const path = require('path');

var app = express();
var port = 3000;
//connect mongodb 
mongoose.connect('mongodb://localhost/express_ex', {useNewUrlParser: true,useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('success!')
});
app.set('trust proxy', 1);
app.use(session({
    secret: '123456',
    resave: false,
    saveUninitialized: true,
    cookie: {
        
    }
}));

app.set('view engine','pug');
app.set('views','./views');



app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser('Npddjqwm201')); // use to read format cookie

app.use(sessionMiddleWare.createSessionId);
app.use('/users',userRouter);
app.use('/',LoaiMARouter);
app.use('/products',productsRouter);
app.use('/Bill',HoaDonRouter);
app.use('/cart',sessionMiddleWare.createSessionId,cartRouter);




app.listen(port,function(){
    console.log('server listens on port '+ port);
});