let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');

router.get('/',userController.isLoggedIn,(req,res,next)=>{
    var watchlistController = require('../controllers/watchlistController');
    watchlistController
            .getAllById(req.session.user.id)
            .then(watchlist => {
                res.locals.watchlists = watchlist;
                res.render('watchlist');
            })
            .catch(error=>next(error));
})

router.post('/',(req,res,next)=>{
    var productId = req.body.productId;
    var userId = req.session.user.id;
    var watchlist = {};
    // if(!userId){
    //     watchlist.sc = 1;
    //     return res.json(watchlist);
    // }
    var watchlistController = require('../controllers/watchlistController');
    watchlistController
        .getById(productId,userId)
        .then(data => {
            if(data){
                watchlist.sc = 2;
                res.json(watchlist);
            }
            else{
                watchlistController.Add(productId,userId);
                watchlist.sc = 3;
                res.json(watchlist);
            }
        })
        .catch(error=>next(error));
});

router.delete('/',(req,res,next)=>{
    var productId = req.body.productId;
    var userId = req.session.user.id;
    var watchlist = {};

    var watchlistController = require('../controllers/watchlistController');
    watchlistController
        .getById(productId,userId)
        .then(data => {
            if(data){
                watchlistController.DeleteById(productId,userId);
                watchlist.sc = 2;
                res.json(watchlist);
            }
            else{
                watchlist.sc = 3;
                res.json(watchlist);
            }
        })
        .catch(error=>next(error));
});

module.exports = router;