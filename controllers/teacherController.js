let controller = {}
let models = require('../models');
let Teacher = models.Teacher;
let Product = models.Product;
let Category = models.Category;
let Topic = models.Topic;
let ProductChild = models.Productchild;
let Sequelize = require('sequelize');
let bcryptjs = require('bcryptjs');
const { resolve } = require('path');
const { rejects } = require('assert');
let op = Sequelize.Op;

controller.getAll = () =>{
    return new Promise((resolve,reject)=>{
        Teacher
            .findAll()
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    })
}

controller.getByEmail = (email) =>{
    return new Promise((resolve,reject)=>{
        Teacher
            .findOne({
                where: { email: email},
                attributes: ['id','email','password','fullname','imagepath']
            })
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    })
};

controller.insertTeacher = (email,password,hoten,imagepath) =>{
    return new Promise((resolve,reject)=>{
        Teacher
            .create({ email: email,password:bcryptjs.hashSync(password, bcryptjs.genSaltSync(10)),fullname:hoten,imagepath:imagepath})
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    })
}

controller.updateTeacher = (email,hoten) =>{
    return new Promise((resolve,reject)=>{
        Teacher
            .update({
                fullname: hoten,
            },
            {
                where: {
                    email:email
                }
            })
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    })
};

controller.deleteTeacher = (email) =>{
    return new Promise((resolve,reject)=>{
        Teacher
            .destroy({
                where: { email : email}
            })
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    })
};

controller.comparePassword = (password,hash) => {
    return bcryptjs.compareSync(password,hash);
};

controller.getProductByIdTeach = (id) =>{
    return Product.findAll({
        where: { teacherId: id }
    })
};
//------------------- ÁP DỤNG CHO GIÁO VIÊN ------------------------------
controller.getAllCate = () => {
    return Category.findAll();
};

controller.getAllTopic = () =>{
    return Topic.findAll();
};

controller.checkCateById = (id) =>{
    return Topic.findOne({
        where: { id: id }
    })
};

controller.getNamePro = (name) =>{
    return Product.findOne({
        where: { name: name }
    })
};

controller.insertCourse = (name,price,description,summary,imagepath,categoryid,topicid,teacherid) =>{
    return Product.create({
        name: name,
        price: price,
        description: description,
        summary: summary,
        imagepath: imagepath,
        categoryId: categoryid,
        topicId: topicid,
        teacherId: teacherid
    });
};

controller.deleteCourse = (id) =>{
    return Product.destroy({ where: { id: id } });
};

controller.addCourseChild = (nd, video, proid) =>{
    return ProductChild.create({
        name: nd,
        clip: video,
        productId: proid
    });
}
module.exports = controller;