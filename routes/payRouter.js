let express = require('express');
let userController = require('../controllers/userController');
let payController = require('../controllers/payController');
let stateController = require('../controllers/stateController');
let router = express.Router();

router.get('/',(req,res,next)=>{
    res.redirect('cart');
})

router.post('/',userController.isLoggedIn,(req,res,next)=>{
    var payController = require('../controllers/payController');
    payController   
        .getPayByUser(req.session.user.id)
        .then(pay => {
            console.log(pay);
            let flag = 0;
            for (let i = 0; i < pay.length ; i++){
                if(req.session.cart.items[pay[i].productId] != undefined){
                    req.session.cart.remove(pay[i].productId);
                    if( flag == (pay.length - 1) ){
                        return res.render('paynotification',{
                            message: `You purchased a/some course`
                        });
                    }
                }
                flag ++;
            }

            let flag2 = 0
            
            giohang = req.session.cart.generateArray();
            for (let i = 0; i < giohang.length ; i++){

                payController.createPay(giohang[i].item.price,req.session.user.id,giohang[i].item.id);
                req.session.cart.remove(giohang[i].item.id);

                if( flag2 == (giohang.length - 1) ){
                    return res.render('paynotification',{
                        message: 'Payment success !'
                    });
                }

                flag2++;
            }
        })
        .catch(error=>next(error));
    
});

module.exports = router;