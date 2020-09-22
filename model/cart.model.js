module.exports = function Cart (cartItem){
    this.items = cartItem.items||{} ;
    this.totalQuantity = cartItem.totalQuantity||0 ;
    this.totalPrice = cartItem.totalPrice||0 ;

    this.add = function (product , id){
        var item = this.items[id];
        if(!item){
            item = this.items[id] = {product: product , quantity: 0 };
        }
        item.quantity ++ ;
        this.totalQuantity ++ ;
        this.totalPrice = this.totalPrice + item.product.price * 1;
    } 

    this.update= function(quantity,id){
        this.totalPrice = (this.totalPrice - this.items[id].product.price*this.items[id].quantity) + quantity*this.items[id].product.price;
        this.totalQuantity = (this.totalQuantity - this.items[id].quantity)+ quantity;
        this.items[id].quantity = quantity;
        // this.totalQuantity = this.totalQuantity + quantity ;
        // this.totalPrice = this.totalPrice + quantity*this.items[id].product.price;
    }
    
    this.delete = function(id){
        this.totalPrice = this.totalPrice - this.items[id].quantity * this.items[id].product.price;
        this.totalQuantity = this.totalQuantity - this.items[id].quantity ;
        delete this.items[id];
    }

    this.listItem = function(){
        var arr = [];
        arr = Object.values(this.items);
        return arr;
    }

}