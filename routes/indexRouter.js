let express = require('express');
let router = express.Router();

router.get('/',(req,res,next)=>{
    let categoryController = require('../controllers/categoryController');
    categoryController
        .getAll()
        .then(data => {
            res.locals.categories = data;
            let productController = require('../controllers/productController');
            return productController.getTrendingProducts();
        })
        .then(data=>{
            //console.log("                              aaaaâ",data);
            res.locals.trendingProducts = data;
            let productControllerBestSeller = require('../controllers/productController');
            return productControllerBestSeller.getBestSeller();
        })
        .then(data =>{
            res.locals.bestSellers = data;
            let productControllerLatest = require('../controllers/productController');
            return productControllerLatest.getNewest();
        })
        .then(data => {
            res.locals.latestCourses = data;
            res.render('index');
        })
        .catch(error => next(error));
})

module.exports = router;