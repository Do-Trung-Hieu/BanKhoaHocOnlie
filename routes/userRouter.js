let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');
let multer = require('multer');
let path = require('path');
let sharp = require('sharp');
let nodemailer = require('nodemailer');
let randomstring = require('randomstring');
let admin = require('../controllers/islogin');
const option = {
    service: 'gmail',
    auth: {
        user: '20c86hcmus@gmail.com',
        pass: 'strapitest2021'
    }
};

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    fileFilter: function(req,file,cb){
        const filetypes = /jpeg|jpg|png|gif/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);
        if(mimetype && extname){
            return cb(null,true);
        }else{
            return cb('Error: Images Only !');
        }
    }
});


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
                if(user.active === false){
                    res.render('login',{
                        message: 'Please activate your account !',
                        type: 'alert-danger'
                    });
                }
                else{
                    if (userController.comparePassword(password,user.password)){
                        req.session.cookie.maxAge = keepLoggedIn ? 30*24*60*60*1000 : null;
                        req.session.user = user;
                        req.session.isAdmin = user.isAdmin;
                        if(req.session.returnURL){
                            res.redirect(req.session.returnURL);
                        } else{
                            if(req.session.isAdmin){
                                res.redirect('/admin');
                            }
                            else{
                                res.redirect('/');
                            }
                        }
                        
                    } else{
                        res.render('login',{
                            message: 'Incorrect password!',
                            type: 'alert-danger'
                        });
                    }
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
            const secretToken = randomstring.generate();
            var transporter = nodemailer.createTransport(option);
            transporter.verify(function(error,success){
                if(error){
                    console.log(error);
                }
                else{
                    console.log('Ket noi thanh cong !');
                    const link = "http://localhost:5000/users/verify?id="+secretToken;
                    var mail = {
                        from: '20c86hcmus@gmail.com',
                        to: email,
                        subject: 'Email Verify',
                        html: "Hello,<br> Please Click on the link to verify your email.</br><a href="+link+"> Click here to verify</a>"
                    };
                    transporter.sendMail(mail,function(error,info){
                        if(error){
                            console.log(error);
                        }
                        else{
                            console.log('Email da duoc gui: ' + info.response);
                        }
                    });
                }
            });
             // tao tai khoan
             user = {
                 email,
                 password,
                 fullname,
                 secrettoken: secretToken,
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
                            message: 'You have registered, now please active your email account ! ',
                            type: 'alert-primary'
                        });
                    }  
                });
        })
        .catch(error => next (error));
});

router.get('/verify',(req,res,next) => {
    userController.getUserBySecrettoken(req.query.id)
        .then(user => {
            if(user === null){
                return res.render('verify',{
                    message: 'Email activation failed',
                    type: 'alert-danger'
                });
            }
            else{
                userController.updateSecrettoken(user)
                return res.render('verify',{
                    message: 'Email was activated successfully',
                    type: 'alert-primary'
                });
            }
        })
        .catch()
    
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

router.post('/upload-avatar',userController.isLoggedIn,upload.single('avatar'), (req,res) => {

    if(req.file == undefined){
        res.render('upload-avatar',{
            message: 'Error: No file selected !',   
            type: 'alert-danger'
        });
    }
    else{
        filename = `${Date.now()}-${req.file.originalname}`;
        sharp(req.file.buffer).resize({width: 70,height: 71}).toFile(`./public/img/users/${filename}`);
        userController.updateavatar(req.session.user.id,filename);
        res.render('upload-avatar',{
            message: 'Upload Avatar is successfull !',   
            type: 'alert-primary'
        });
    }
    
    
});
// ------------------------- PROFILE USER ------------------------------------------------------
router.get('/profile' ,userController.isLoggedIn,(req,res,next) =>{
    
    let pro = require('../controllers/userController');
    pro
        .getByEmail(req.session.user.email)
        .then(data => {
            res.locals.userss = data;
            res.render('admin/profileuser', {layout: '../admin/layouts/userlayout.handlebars'});
        })
        .catch( error => next(error));
})

router.get('/purchased',userController.isLoggedIn, (req,res,next) => {
    let get = require('../controllers/userController');
    get 
        .getPayById(req.session.user.id)
        .then(data =>{
            if(data){
                res.locals.khoahoc = data;
                res.render('admin/CourseOfUser', { layout: '../admin/layouts/userlayout.handlebars'});
            }
            else{
                res.locals.khoahoc = null;
                res.render('admin/CourseOfUser', { layout: '../admin/layouts/userlayout.handlebars'});
            }

        })
        .catch( error => next(error));
    
})

router.post('/edit',userController.isLoggedIn,upload.single('image'),(req,res,next)=>{
    let hoten = req.body.hoten;
    if(req.file){
        filename = `${Date.now()}-${req.file.originalname}`;
        sharp(req.file.buffer).resize({width: 70,height: 71}).toFile(`./public/img/users/${filename}`);
        let image = "/img/users/" + filename;
        let edit = require('../controllers/userController');
        edit
            .updateUserImage(req.session.user.email,hoten,image)
            .then(data =>{
                res.send(
                    `<script>confirm("Cập nhật thành công"); window.location="/users/profile";</script>`
                )
            })
            .catch(error => next(error));
    }
    else{
        let edit = require('../controllers/userController');
        edit
            .updateUser(req.session.user.email,hoten)
            .then(data =>{
                res.send(
                    `<script>confirm("Cập nhật thành công"); window.location="/users/profile";</script>`
                )
            })
            .catch(error => next(error));
    }
    
})
module.exports = router;