let controller = {};
let models = require('../models');
let Product = models.Product;
let Pay = models.Pay;
let Review = models.Review;
let Topic = models.Topic;
let ProductChild = models.Productchild;
let Sequelize = require('sequelize');
const { resolve } = require('path');
const { createDeflate } = require('zlib');
let Op = Sequelize.Op;


controller.getTrendingProducts = ()=>{
    // return new Promise((resolve,reject)=>{
    //     Product
    //         .findAll({
    //             // group: ['Product.id','Product.name'],
    //             group: ['Product.id','Product.name','Product.overallreview'],

    //             attributes: ['id','name','overallreview'],//'price','imagepath','description','overallreview','reviewCount'],
    //             include: [//{model: models.Topic},{model: models.Teacher},
    //                 {
    //                     model: Review,
    //                     group: 'Reviews.productId',
    //                     attributes: 
    //                         [[Sequelize.fn('COUNT',Sequelize.col('userId')),'like_count']],
    //                 }
    //             ],
                
    //             order:[
    //                 ['overallreview','DESC']
    //             ],
    //             limit:9,
                
    //         })
    //         .then(data=>resolve(data))
    //         .catch(error=>reject(new Error(error)));
    // });
    // return new Promise((resolve,reject)=>{
    //     Pay
    //         .findAll({
    //             group: ['Product.id','Product.name','productId'],//'Product.Topic.id','Product.Teacher.id'],
    //             attributes: 
    //                 [[Sequelize.fn('COUNT',Sequelize.col('productId')),'like_count']]
    //             ,
    //             include: [{
    //                 model: Product,
    //                 order:[
    //                     ['overallreview','DESC']
    //                 ],

                    
    //                 attributes: ['id','name','price','imagepath','overallreview'],
    //                 // include: [{ model: models.Topic},{model: models.Teacher}],
    //                 //right: true,
    //             }],
                
    //             limit: 9,
                
    //         })
    //         .then(data => resolve(data))
    //         .catch(error => reject(new Error(error)));
    // })
    return new Promise((resolve,reject)=>{
        Review
            .findAll({
                group: ['productId','Product.id','Product.name','Product.Topic.id','Product.Teacher.id'],
                attributes: [[Sequelize.fn('COUNT',Sequelize.col('userId')),'like_count']],
                include: [{ 
                    model: models.Product,
                    // order: [ 
                    //     ['Product.overallreview','DESC']
                    // ],
                    attributes: ['id','name','price','promotion','imagepath','overallreview'],
                    include: [{ model: models.Topic},{model: models.Teacher}],
                    right: true,
                }],
                order: [ 
                    [Product,'overallreview','DESC'],
                    [Sequelize.fn('COUNT',Sequelize.col('userId')),'DESC']
                ],
                limit: 9,
            })
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    })
};

controller.getBestSeller = () => {
    // return new Promise((resolve,reject)=>{
    //     Pay
    //         .findAll({
    //             order: [
    //                 [Sequelize.fn('COUNT',Sequelize.col('productId')),'DESC']
    //             ],
    //             group: ['Product.id','Product.name','productId'],
    //             attributes: 
    //                 [[Sequelize.fn('COUNT',Sequelize.col('productId')),'like_count']]
    //             ,
    //             include: [{
    //                 model: Product,
    //                 attributes: ['id','name','price','imagepath'],
    //                 include: []
    //             }]
    //         })
    //         .then(data => resolve(data))
    //         .catch(error => reject(new Error(error)));
    // });
    return new Promise((resolve,reject)=>{
        var d = new Date();
        let options = {
            group: ['Topic.id','Category.id','Products.id'],//'Products.Pays.id'],
                attributes: 
                    [[Sequelize.fn('COUNT',Sequelize.col('Topic.categoryId')),'like_count']]
                ,
                include: [
                    {   model: models.Category,
                        attributes: ['id','name','imagepath']},
                    {   model: models.Product,
                        where: {
                            createdAt: {
                                [Op.gte]: d.getTime()-604800000,
                                [Op.lte]: d.getTime()
                            }
                        },
                        attributes: ['name']
                        //include: [{ model: models.Pay}]
                    },
                ],
                order: [[Sequelize.fn('COUNT',Sequelize.col('Topic.categoryId')),'DESC']]
        };
        
        Topic
            .findAll(options)
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    })
};

controller.getNewest = () => {
    return new Promise((resolve,reject)=>{
        Review
            .findAll({
                group: ['productId','Product.id','Product.name','Product.Topic.id','Product.Teacher.id'],
                attributes: [[Sequelize.fn('COUNT',Sequelize.col('userId')),'like_count']],
                include: [{ 
                    model: models.Product,
                    // order: [ 
                    //     ['Product.overallreview','DESC']
                    // ],
                    attributes: ['id','name','price','promotion','imagepath','overallreview'],
                    include: [{ model: models.Topic},{model: models.Teacher}],
                    right: true,
                }],
                order: [ 
                    [Product,'createdAt','DESC'],
                    [Sequelize.fn('COUNT',Sequelize.col('userId')),'DESC']
                ],
                limit: 9,
            })
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    })
};


controller.getAll = (query)=>{
    return new Promise((resolve,reject)=>{
        let options = {
            include: [
                {model: models.Category},
                {model: models.Topic},
                {model: models.Teacher}
            ],
            where:{
                price: {
                    [Op.gte]: query.min,
                    [Op.lte]: query.max
                }
            }
        };
        if(query.category > 0){
            options.where.categoryId = query.category;
        }
        if(query.search != ''){
            options.where.name = {
                [Op.iLike]: `%${query.search}%`
            }
        }
        if(query.topic > 0){
            options.where.topicId = query.topic;
        }
        if(query.limit > 0){
            options.limit = query.limit;
            // Lấy từ
            options.offset = query.limit * (query.page - 1);
        }
        if(query.sort){
            switch(query.sort){
                case 'name':
                    options.order = [['name','ASC']];
                    break;
                case 'price':
                    options.order = [['price','ASC']];
                    break;
                case 'overallreview':
                    options.order = [['overallreview','DESC']];
                    break;
                default:
                    options.order = [['name','ASC']];
                    break;
            }
        }
        Product
            .findAndCountAll(options) // {rows, count}
            .then(data=>resolve(data))
            .catch(error=>reject(new Error(error)));
    });
    // return new Promise((resolve,reject)=>{
    //     let options = {
    //         group: ['productId','Product.id','Product.name','Product.Topic.id','Product.Teacher.id','Product.Category.id'],
    //         attributes: [[Sequelize.fn('COUNT',Sequelize.col('userId')),'like_count']],
    //         include: [{ 
    //             model: models.Product,
    //             attributes: ['id','name','price','promotion','imagepath','overallreview'],
    //             include: [{ model: models.Topic},{model: models.Teacher},{ model: models.Category}],
    //             where: {
    //                 price: {
    //                     [Op.gte]: query.min,
    //                     [Op.lte]: query.max
    //                 }
    //             },
    //             required: false,
    //             right: true,
    //         }],
    //     };
    //     if(query.category > 0){
    //         options.include[0].where.categoryId = query.category;
    //     }
    //     if(query.search != ''){
    //         options.include[0].where.name = {
    //             [Op.iLike]: `%${query.search}%`
    //         }
    //     }
    //     if(query.topic > 0){
    //         options.include[0].where.topicId = query.topic;
    //     }
    //     if(query.limit > 0){
    //         options.limit = query.limit;
    //         // Lấy từ
    //         options.offset = query.limit * (query.page - 1);
    //     }
    //     if(query.sort){
    //         switch(query.sort){
    //             case 'name':
    //                 options.order = [[Product,'name','ASC']];
    //                 break;
    //             case 'price':
    //                 options.order = [[Product,'price','ASC']];
    //                 break;
    //             case 'overallreview':
    //                 options.order = [[Product,'overallreview','DESC']];
    //                 break;
    //             default:
    //                 options.order = [[Product,'name','ASC']];
    //                 break;
    //         }
    //     }
    //     Review
    //         .findAll(options) // {rows, count}
    //         .then(data=>resolve(data))
    //         .catch(error=>reject(new Error(error)));
    // });
};

controller.getById = (id) =>{
    return new Promise((resolve,reject)=>{
        let product;
        Product
            .findOne({
                where: { id : id},
                attributes: ['id','name','price','description','summary','overallreview','reviewCount','imagepath'],
                include: [
                    {
                    model: models.Topic,
                    attributes: ['name'],
                    include: [{ 
                        model: models.Category,
                        attributes: ['name']
                        }]
                    },
                    {
                        model: models.Teacher
                    }
                ]
            })
            .then(result => {
                product = result;
                return models.Comment.findAll({
                    where: {productId: id, parentCommentId:null},
                    include: [
                        {
                            model: models.User
                        },
                        // Lấy thêm comment con
                        {
                            model:models.Comment,
                            as:'SubComments',
                            include:[{model:models.User}]
                        }]
                }); 
            })
            .then(comments => {
                product.Comments = comments;
                return models.Review.findAll({
                    where:{productId:id},
                    include:[{model: models.User}]
                });
            })
            .then(reviews => {
                product.Reviews = reviews;
                let stars = [];
                for(let i = 1; i<=5; i++){
                    stars.push(reviews.filter(item => (item.rating==i)).length);
                }
                product.stars = stars;
                resolve(product);   
            })
            .catch(error => reject(new Error(error)));
    });
};

controller.getDetailCourse = (id) =>{
    return ProductChild.findAll({
        order: [['id','ASC']],
        include: [{model: models.State,require: false}],
        where: { 
            productId: id
        },
    })
};

controller.getProbyId = (id) =>{
    return ProductChild.findOne({
        include: {
            model: models.Product,
            include: [{ model: models.Teacher}, {model: models.Topic} , {model: models.Category}],
        },
        where: {id: id}
    })
}
module.exports = controller;