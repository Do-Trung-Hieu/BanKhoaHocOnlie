let controller = {};
let models = require('../models');
let ProductChild = models.Productchild;
let State = models.State;

controller.getState = (productId,userId)=>{
    return new Promise((resolve,reject)=>{
        State
            .findAll({
                where:{
                    productId,
                    userId
                }
            })
            .then(data=>resolve(data))
            .catch(error=>reject(new Error(error)));
    });
    
};


controller.createState = (productchildId,userId)=>{
    return State.findOne({
            where: {
                productchildId,
                userId
            }
        })
        .then (data => {
            if(data == null){
                let prochild = require('../controllers/productchildController');
                prochild.getProductIdByChildId(productchildId)
                .then(data => {
                    State.create({
                        watched: true,
                        productchildId: productchildId,
                        productId: data.productId,
                        userId: userId
                    });
                })
                
            }
        })
    
};

// controller.updateState = (productchildId,userId)=>{
//     return State
//             .update(
//                 {
//                     watched: true
//                 },
//                 {
//                     where:{
//                         productchildId: productchildId,
//                         userId: userId
//                     }
//                 }
//             );
// };

module.exports = controller;