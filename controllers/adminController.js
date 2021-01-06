let controller = {};
let models = require('../models');
let Pay = models.Pay;
let Category = models.Category;
let Topic = models.Topic;
let Product = models.Product;
let Sequelize = require('sequelize');
const { resolve } = require('path');
const { options } = require('../routes/adminRouter');
let Op = Sequelize.Op;

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
                    [Sequelize.fn('SUM',Sequelize.col('Product.price')),'DESC']
                ],
                group: ['Product.id','Product.name','productId'],
                attributes: 
                    ['productId',[Sequelize.fn('SUM',Sequelize.col('Product.price')),'total']]
                ,
                include: [{
                    model: models.Product,
                    attributes: ['id','name','price','imagepath'],
                    include: []
                }]
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
        include: [{ model: Category,
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
        }
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

controller.insertTopic = (cateid, name) =>{
    return Topic.create({ name: name, categoryId: cateid});
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
controller.insertProduct = (name,price,description,summary,image,categoryid,topicid,teacherid) =>{
    return Product.create({
        name: name,
        price: price,
        description: description,
        summary: summary,
        imagepath: image,
        categoryId: categoryid,
        topicId: topicid,
        teacherId: teacherid
    })
}
module.exports = controller;