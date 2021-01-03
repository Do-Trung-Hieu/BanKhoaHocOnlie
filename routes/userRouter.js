let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');
let multer = require('multer');
let path = require('path');

const storage = multer.diskStorage({
    destination: './public/img/users/',
    filename: function(req,file,cb){
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    fileFilter: function(req,file,cb){
        checkFileType(file,cb);
    }
}).single('avatar');

function checkFileType(file,cb){
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if(mimetype && extname){
        return cb(null,true);
    }else{
        cb('Error: Images Only !');
    }
}


router.get('/login',(req,res,next) => {
    req.session.returnURL = req.query.returnURL;
    res.render('login');
});

router.post('/login',(req,res,next) => {
    let email = req.body.email;
    let password = req.body.password;
    let keepLoggedIn = (req.body.keepLoggedIn != undefined);

    if(email == '' || password == ''){
        return res.render('register',{
            message: 'Please fill out the form !',   
            type: 'alert-danger'
        });
    }

    userController
        .getUserByEmail(email)
        .then(user => {
            if(user){
                if (userController.comparePassword(password,user.password)){
                    req.session.cookie.maxAge = keepLoggedIn ? 30*24*60*60*1000 : null;
                    req.session.user = user;
                    if(req.session.returnURL){
                        res.redirect(req.session.returnURL);
                    } else{
                        res.redirect('/');
                    }
                    
                } else{
                    res.render('login',{
                        message: 'Incorrect password!',
                        type: 'alert-danger'
                    });
                }
            } 
            else{
                res.render('login',{
                    message: 'Email does not exists!',
                    type: 'alert-danger'
                });
            }
        });
});

router.get('/register',(req,res,next) => {
    res.render('register');
});

router.post('/register',(req,res,next) => {
    let fullname = req.body.fullname;
    let email = req.body.email;
    let password = req.body.password;
    let confirmPassword = req.body.confirmPassword;
    let keepLoggedIn = (req.body.keepLoggedIn != undefined);

    
    if(fullname == '' || email == '' || password == '' || confirmPassword == ''){
        return res.render('register',{
            message: 'Please fill out the form !',   
            type: 'alert-danger'
        });
    }

    //kiem tra confirm password va password giong nhau
    if(password != confirmPassword){
        return res.render('register',{
            message: 'Confirm password does not match !',   
            type: 'alert-danger'
        });
    }
    // kiem tra username chua ton tai
    userController
        .getUserByEmail(email)
        .then (user => {
            if(user){
                return res.render('register',{
                    message: `Email ${email} exists ! Please choose another email address`,
                    type: 'alert-danger'
                });
            }
             // tao tai khoan
             user = {
                 fullname,
                 email: email,
                 password
             }
            return userController
                .createUser(user)
                .then(user => {
                    if(keepLoggedIn){
                        //req.session.cookie.maxAge = 30*24*60*60*1000;
                        req.session.user = user;
                        res.redirect('/');
                    }
                    else{
                        res.render('login',{
                            message: 'You have registered, now please login ! ',
                            type: 'alert-primary'
                        });
                    }  
                });
        })
        .catch(error => next (error));
});

router.get('/logout',(req,res,next) => {
    req.session.destroy(error => {
        if(error){
            return next(error);
        } 
        return res.redirect('/users/login');
    });
});

router.get('/change-password',userController.isLoggedIn,(req,res,next) => {
    res.render('change-password');
});

router.post('/change-password',userController.isLoggedIn,(req,res,next) => {
    let oldpassword = req.body.oldpassword;
    let newpassword = req.body.newpassword;
    let confirmnewpassword = req.body.confirmnewpassword;

    if(oldpassword == '' || newpassword == '' || confirmnewpassword == ''){
        return res.render('change-password',{
            message: 'Please fill out the form !',   
            type: 'alert-danger'
        });
    }

    if(newpassword != confirmnewpassword){
        return res.render('change-password',{
            message: 'Confirm new password does not match !',   
            type: 'alert-danger'
        });
    }

    userController.getUserByEmail(req.session.user.email)
        .then(user => {
            if (userController.comparePassword(oldpassword,user.password)){
                userController.updatePassword(user,newpassword);
                res.render('change-password',{
                    message: 'Change password successful !',
                    type: 'alert-primary'
                });
            }
            else{
                res.render('change-password',{
                    message: 'Incorrect password!',
                    type: 'alert-danger'
                });
            }
        })
        .catch(error => next (error));
        
});

router.get('/upload-avatar',userController.isLoggedIn,(req,res,next) => {
    res.render('upload-avatar');
});

router.post('/upload-avatar',userController.isLoggedIn,(req,res,next) => {
    upload(req,res,err => {
        if(err){
            return res.render('upload-avatar',{
                message: err,   
                type: 'alert-danger'
            });
        }
        else{
            if(req.file == undefined){
                res.render('upload-avatar',{
                    message: 'Error: No file selected !',   
                    type: 'alert-danger'
                });
            }
            else{
                userController.updateavatar(req.session.user.id,req.file.filename);
                res.render('upload-avatar',{
                    message: 'Upload Avatar is successfull !',   
                    type: 'alert-primary'
                });
            }
        }
    });
});

module.exports = router;