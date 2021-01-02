let controller = {};
let models = require('../models');
let User = models.User;
let bcryptjs = require('bcryptjs');

controller.getUserByEmail = (email) => {
    return User.findOne({
        where: {email: email}
    });
};

controller.createUser = (user) => {
    var salt = bcryptjs.genSaltSync(10);
    user.password = bcryptjs.hashSync(user.password, salt);
    return User.create(user);
}

controller.comparePassword = (password,hash) => {
    return bcryptjs.compareSync(password,hash);
};

controller.isLoggedIn = (req,res,next)=>{
    if(req.session.user){
        next();
    }
    else{
        res.redirect(`/users/login?returnURL=${req.originalUrl}`);
    }
}

module.exports = controller;