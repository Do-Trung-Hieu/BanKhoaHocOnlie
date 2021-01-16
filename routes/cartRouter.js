let express = require('express');
let router = express.Router();

router.get('/',(req,res)=>{
    var cart = req.session.cart;
    res.locals.cart = cart.getCart();
    //console.log("BBBBBBBBBBBBBBBBBBBbb",cart.getCart());
    res.render('cart');
})

router.post('/',(req,res,next)=>{
    var productId = req.body.id;
    var quantity = isNaN(req.body.quantity) ? 1 : req.body.quantity;
    var giohang = req.session.cart.generateArray();
    if(giohang.length == 0){
        var productController =
            require('../controllers/productController');
        productController
            .getById(productId)
            .then(product => {
                var cartItem = req.session.cart.add(product,productId,quantity);
                cartItem.sc =  null;
                res.json(cartItem);
            })
            .catch(error=>next(error));
    }
    else{
        if(req.session.cart.items[productId] == undefined){
            var productController =
                require('../controllers/productController');
            productController
                .getById(productId)
                .then(product => {
                    var cartItem = req.session.cart.add(product,productId,quantity);
                    cartItem.sc =  null;
                    //console.log("aaaaaaaaa",req.session.cart.items[productId].item.id);
                    res.json(cartItem);
                })
                .catch(error=>next(error));
            
        } else {
            var cartItem = req.session.cart;
            cartItem.sc = "Sản phẩm này đã có trong giỏ hàng !"
            res.json(cartItem);
        }
    }
});

// router.put('/',(req,res)=>{
//    var productId = req.body.id;
//    var quantity = parseInt(req.body.quantity);
//    var cartItem = req.session.cart.update(productId,quantity);
//    res.json(cartItem);
// });

router.delete('/',(req,res)=>{
    var productId = req.body.id;
    req.session.cart.remove(productId);
    res.json({
        totalQuantity: req.session.cart.totalQuantity,
        totalPrice: req.session.cart.totalPrice
    });
 });

router.delete('/all',(req,res)=>{
    req.session.cart.empty();
    res.sendStatus(204);
    res.end();
});

module.exports = router;