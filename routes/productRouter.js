const { query } = require('express');
let express = require('express');
let router = express.Router();
const { Client } = require('pg');


router.get('/',(req,res,next)=>{
    if((req.query.category == null) || isNaN(req.query.category)){
        req.query.category = 0;
    }
    if((req.query.topic == null) || isNaN(req.query.topic)){
        req.query.topic = 0;
    }
    if((req.query.min == null) || isNaN(req.query.min)){
        req.query.min = 0;
    }
    if((req.query.max == null) || isNaN(req.query.max)){
        req.query.max = 100;
    }
    if((req.query.sort == null)){
        req.query.sort = 'name';
    }
    if((req.query.limit == null || isNaN(req.query.limit) )){
        req.query.limit = 9;
    }
    if((req.query.page == null || isNaN(req.query.page) )){
        req.query.page = 1;
    }
    if((req.query.search == null || req.query.search.trim() == '' )){
        req.query.search = '';
    }
    let categoryController = require('../controllers/categoryController');
    categoryController  
        .getAll(req.query)
        .then(data =>{
            res.locals.categories = data;
            let topicController = require('../controllers/topicController');
            return topicController.getAll(req.query);
        })
        .then(data=>{
            res.locals.topics = data;
            /*let colorController = require('../controllers/colorController');
            return colorController.getAll(req.query);*/
            let productController = require('../controllers/productController');
            return productController.getAll(req.query); 
        })
        .then(data=>{
            res.locals.products = data.rows;
            res.locals.pagination = {
                page: parseInt(req.query.page),
                limit: parseInt(req.query.limit),
                totalRows: data.count
            }
            res.render('category')
            /*let productController = require('../controllers/productController');
            return productController.getAll(req.query); */
        })
        /*.then(data=>{
            res.locals.products = data;
            res.render('category');
        })*/
        .catch(error => next(error));
})

router.get('/:id',(req,res,next)=>{
    let productController = require('../controllers/productController');
    productController
        .getById(req.params.id)
        .then(product => {
            res.locals.product = product;
            let reviewController = require('../controllers/reviewController');
            return reviewController.getUserReviewProduct(
                req.session.user ? req.session.user.id : 0,
                req.params.id
            );
        })
        .then(review=>{
            res.locals.userReview = review;
            res.render('single-product');
        })
        .catch(error => next(error));
    
})

module.exports = router;