let controller = {};
let models = require('../models');
let User = models.User;
let Pay = models.Pay;
let bcryptjs = require('bcryptjs');
let Sequelize = require('sequelize');
let Op = Sequelize.Op;

controller.getUserByEmail = (email) => {
    return User.findOne({
        where: {email: email}
    });
};

controller.getUserBySecrettoken = (secrettoken) => {
    return User.findOne({
        where: {secrettoken: secrettoken}
    });
};

controller.updateSecrettoken = (user) => {
    return User.update(
        {
            secrettoken: '',
            active: true
        },
        {
            where: {
                id: user.id
            }
        }
    );
};

controller.createUser = (user) => {
    var salt = bcryptjs.genSaltSync(10);
    user.password = bcryptjs.hashSync(user.password, salt);
    user.imagepath = "/img/users/none.jpg";
    user.isAdmin = false;
    user.active = false;
    return User.create(user);
}

controller.comparePassword = (password,hash) => {
    return bcryptjs.compareSync(password,hash);
};

controller.updatePassword = (user,newpassword) => {
    var salt = bcryptjs.genSaltSync(10);
    user.password = bcryptjs.hashSync(newpassword, salt);
    return User.update({
            password: user.password
        },
        {
            where:{
                id: user.id
            }
        });
};

controller.updateavatar = (id,filename)=>{
    return User.update({
        imagepath: "/img/users/"+filename
    },
    {
        where:{
            id: id
        }
    });
};

controller.isLoggedIn = (req,res,next)=>{
    if(req.session.user){
        next();
    }
    else{
        res.redirect(`/users/login?returnURL=${req.originalUrl}`);
    }
};

controller.getInfoAll = () => {
    return new Promise((resolve,reject)=>{
        User
            .findAll({
                // group: ['userId','User.id'],
                // attributes: [[Sequelize.fn('COUNT',Sequelize.col('userId')),'sokhoahoc']],
                // include: [{
                //     model: User,
                //     where: { 
                //         isAdmin: 'false'
                //     },
                //     attributes: ['email','password','fullname','imagepath'],
                //     include: [],
                //     required: false,
                //     right: true
                // }]
                where: {
                    isAdmin: false
                },
                attributes: ['email','password','fullname','imagepath']
            })
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    })
};

controller.getInfoDetail= (email) =>{
    return new Promise((resolve,reject)=>{
        User
            .findOne({
                where: { 
                    email: email
                },
                attributes: ['email','password','fullname','imagepath']
            })
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    })
};

controller.getByEmail = (email) =>{
    return new Promise((resolve,reject)=>{
        User
            .findOne({
                where: { email: email},
                attributes: ['email','password','fullname','imagepath']
            })
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    })
};

controller.insertUser = (email,password,hoten,imagepath) =>{
    // var salt = bcryptjs.genSaltSync(10);
    // password1 = bcryptjs.hashSync(password, salt);
    return new Promise((resolve,reject)=>{
        User
            .create({ email: email,password:bcryptjs.hashSync(password, bcryptjs.genSaltSync(10)),fullname:hoten,imagepath:imagepath,isAdmin:false,active:true})
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    })
};

controller.updateUser = (email,hoten) =>{
    console.log(email,hoten);
    return new Promise((resolve,reject)=>{
        User
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

controller.updateUserImage = (email,hoten,image) =>{
    console.log(email,hoten);
    return new Promise((resolve,reject)=>{
        User
            .update({
                fullname: hoten,
                imagepath: image,
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

controller.deleteUser = (email) =>{
    return new Promise((resolve,reject)=>{
        User
            .destroy({
                where: { email : email}
            })
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    })
};

controller.getPayById = (id) => {
    return Pay.findAll({
        include: {
            model: models.Product,
            include: { model: models.Teacher }
        },
        where: { userId: id}
    })
};
module.exports = controller;