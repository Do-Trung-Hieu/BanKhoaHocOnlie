let controller = {};
let models = require('../models');
let Topic = models.Topic;
let Sequelize = require('sequelize');
let Op = Sequelize.Op;

controller.getAll = (query)=>{
    return new Promise((resolve,reject)=>{
        let options = {
            attributes: ['id','name'],
            include: [{
                model: models.Product,
                attributes: ['id'],
                where: {
                    price: {
                        [Op.gte]: query.min,
                        [Op.lte]: query.max
                    }
                }
            }]
        };
        if(query.category> 0){
            options.include[0].where.categoryId = query.category;
        }
        if(query.search != ''){
            options.include[0].where.name = {
                [Op.iLike]: `%${query.search}%`
            }
        }
        Topic
            .findAll(options)
            .then(data=>resolve(data))
            .catch(error=>reject(new Error(error)));
    });
};


module.exports = controller;