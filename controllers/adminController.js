let controller = {};
let models = require('../models');
let Pay = models.Pay;
let Category = models.Category;
let Topic = models.Topic;
let Product = models.Product;
let bcryptjs = require('bcryptjs');
let Sequelize = require('sequelize');
let Op = Sequelize.Op;

controller.comparePassword = (password,hash) => {
    return bcryptjs.compareSync(password,hash);
};

controller.getThongKe = ()=>{
    return new Promise((resolve,reject)=>{ 
        Pay
            .findAll({
                group: [ [date_part('month',createdAt)],[Sequelize.fn('COUNT',Sequelize.col('total')),'Tong_tien']],
                attributes: [ [date_part('month',createdAt)]],
                where: {
                    createdAt: {
                        [date_part('year',createdAt)] : [date_part('year',now())]
                    }
                }
            })
            .then(data =>resolve(data))
            .catch(error=>reject(new Error(error)));
    });
};

controller.getTotalBestSeller = () => {
    return new Promise((resolve,reject)=>{
        Pay
            .findAll({
                order: [
                    [Sequelize.fn('SUM',Sequelize.col('Pay.userId')),'DESC']
                ],
                group: ['Product.id','Product.name','productId','Product.Category.id','Product.Topic.id'],
                attributes: [
                    [Sequelize.fn('SUM',Sequelize.col('Pay.price')),'total'], 
                    [Sequelize.fn('SUM',Sequelize.col('Pay.userId')),'count']
                ]
                ,
                include: [{
                    model: models.Product,
                    include: [{ model: models.Category}, {model: models.Topic}]
                }],
                limit: 9,
            })
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

controller.getCategory = () =>{
    return Category.findAll();
}

controller.getTopic = (query) =>{
    let options = {
        include: [{ 
            model: Category,
            where: { 
            }
        }]
        
    };
    if(query && query > 0){
        options.include[0].where.id = query;
    }
    return Topic.findAll(options);
}

controller.getProduct = (query_cate,query_top) =>{
    let options = {
        include: [{ model: models.Category},
        { model: models.Teacher}],
        where: { 
        },
        order: [['id','ASC']],
    };
    if(query_top > 0 && query_cate > 0){
        options.where.topicId = query_top;
    }
    else{
        if(query_top > 0){
            options.where.topicId = query_top;
        }
        if(query_cate >0 ){
            options.where.categoryId = query_cate;
        }
    }
    return Product.findAll(options);
};

controller.CheckCate = (name) =>{
    return Category.findOne({
        where: { name: name }
    })
}
controller.insertCate = (cate,image) =>{
    return Category.create({ name: cate, imagepath: image});
}

controller.CheckTopic = (name) =>{
    return Topic.findOne({
        where: { name: name }
    })
}

controller.insertTopic = (cateid, name,image) =>{
    return Topic.create({ name: name, categoryId: cateid, imagepath: image});
}

controller.CheckDelCat = (id) =>{
    return Topic.findOne({ 
        where: { categoryId: id}
    })
}

controller.deleteCate = (id) =>{
    return Category.destroy({
        where: { id: id}
    })
}

controller.CheckDelTopic = (id) =>{
    return Product.findOne({
        where: { topicId: id}
    })
}

controller.deleteTopic = (id) =>{
    return Topic.destroy({
        where: { id: id }
    })
}

controller.deleteProduct = (id) =>{
    return Product.destroy({
        where: { id: id }
    })
}

controller.getNamePro = (name) =>{
    return Product.findOne({
        where: { name: name }
    })
}
controller.insertProduct = (name,price,giakm,description,summary,image,categoryid,topicid,teacherid) =>{
    return Product.create({
        name: name,
        price: price,
        promotion: giakm,
        description: description,
        summary: summary,
        imagepath: image,
        categoryId: categoryid,
        topicId: topicid,
        teacherId: teacherid,
        overallreview: 0,
        reviewCount: 0,
        lockcourse: false,
    })
}
module.exports = controller;