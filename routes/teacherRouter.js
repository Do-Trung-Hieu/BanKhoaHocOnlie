let express = require("express");
let router = express();
const path = require("path");
let sharp = require('sharp');
let multer = require('multer');
const { error } = require("console");
let teacher = require('../controllers/teacherController');
let userlogin = require('../controllers/islogin');
//const trollers/islogin'); 

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

const storage2 = multer.diskStorage({
    destination: './public/img/product/video/',
    filename: function(req, file, cb){
      cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });

const uploadvideo = multer({
    storage: storage2,
    fileFilter: function(req,file,cb){
        const filetypes = /mp4/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);
        if(mimetype && extname){
            return cb(null,true);
        }else{
            return cb('Error: Videos Only !');
        }
    }
}).single('video');

router.get('/', userlogin.isLoggend_Teacher, (req,res,Next) => {
    let pro = require('../controllers/teacherController');
    pro
        .getProductByIdTeach(req.session.teacher.id)
        .then(data =>{
            //console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',data);
            res.locals.ProductOfTeacher = data;
            let cate = require('../controllers/teacherController');
            return cate.getAllCate();
        })
        .then(data =>{
            res.locals.Category = data;
            let topic = require('../controllers/teacherController');
            return topic.getAllTopic();
        })
        .then(data =>{
            res.locals.Topic = data;
            res.render('admin/teachermanager', {  layout: "../admin/layouts/teacherlayout.handlebars" });
        })
        .catch(error => Next(error));
});

router.post('/addkhoahoc',userlogin.isLoggend_Teacher,upload.single('avatar'), (req,res,Next)=>{
    const name = req.body.name;
    const gia = parseFloat(req.body.gia);
    const description = req.body.tongquan;
    const summary = req.body.chitiet;
    const categoryid = req.body.categoryid;
    const topicid = req.body.topicid;
    //console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',teacherid);
    filename = `${Date.now()}-${req.file.originalname}`;
    console.log(filename);
    sharp(req.file.buffer).resize({width: 70,height: 71}).toFile(`./public/img/product/${filename}`);
    const image = "/img/product/" + filename;
    let cate = require('../controllers/teacherController');
    cate
        .checkCateById(topicid)
        .then(data =>{
            console.log(data);
            if(data.categoryId == categoryid){
                let namePro = require('../controllers/teacherController');
                namePro
                    .getNamePro(name)
                    .then(data =>{
                        if(data){
                            res.send(
                                `<script>confirm("Tên khoá học đã tồn tại"); window.location="/teacher";</script>`
                            );
                        }
                        else{
                            let ins = require('../controllers/teacherController');
                            ins.insertCourse(name,gia,description,summary,image,categoryid,topicid,req.session.teacher.id)
                            .then(data =>{
                                res.redirect('/teacher');
                            })
                        }
                    })
            }
            else{
                res.send(
                    `<script>confirm("Tên Topic không tương ứng với Category"); window.location="/teacher";</script>`
                );
            }
        })
        .catch(error => Next(error));
});

// router.post('/addbaihoc',userlogin.isLoggend_Teacher,uploadvideo.single('video'), (req, res, Next) =>{
//     let courseid = req.body.courseid;
//     let noidung = req.body.ten;
//     filename = `${Date.now()}-${req.file.originalname}`;
//     console.log(filename);
//     sharp(req.file.buffer).resize({width: 700,height: 400}).toFile(`./public/img/product/video/${filename}`);
//     const video = "/img/product/video/" + filename;
//     let add = require('../controllers/teacherController');
//     add
//         .addCourseChild(noidung,video,courseid)
//         .then(data =>{
//             res.redirect('/teacher');
//         })
//         .catch(error => Next(error));
// });

router.post('/addbaihoc',userlogin.isLoggend_Teacher,(req, res, Next) =>{
   
    let temp;
    uploadvideo(req, res, (err) => {
        if(err){
          res.send('Loi: ',err);
        } 
        else {
          if(req.file == undefined){
          res.send('Error: No File Selected!');
          } 
          else {
            let courseid = req.body.courseid;
            let noidung = req.body.ten;
            console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa' , courseid);
            console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb', noidung);
            temp=Object.values(req.file);
            let video = "/img/product/video/" + temp[5];
            let add = require('../controllers/teacherController');
            add
                .addCourseChild(noidung,video,courseid)
                .then(data =>{
                    res.send('them thanh cong');
                })
                .catch(error => Next(error));
          }
        }
    });
});

router.post('/delete/course/:id',userlogin.isLoggend_Teacher, (req, res, Next) =>{
    let del = require('../controllers/teacherController');
    del
        .deleteCourse(req.params.id)
        .then(data =>{
            res.redirect('/teacher')
        })
        .catch(error => Next(error));
});
router.get('/login',(req,res,next) => {
    //req.session.returnURL = req.query.returnURL;
    res.render('teacherLogin');
});
router.post('/login', (req,res,next) => {
    let email = req.body.email;
    let password = req.body.password;
    let keepLoggedIn = (req.body.keepLoggedIn != undefined);

    if(email == '' || password == ''){
        return res.render('teacherLogin',{
            message: 'Please fill out the form !',   
            type: 'alert-danger'
        });
    }

    teacher
        .getByEmail(email)
        .then(teach => {
            console.log(teach);
            if(teach){
                if (teacher.comparePassword(password,teach.password)){
                    req.session.cookie.maxAge = keepLoggedIn ? 30*24*60*60*1000 : null;
                    req.session.teacher = teach;
                    //req.session.isLoggedIn = false;
                    req.session.isLoggedIn2 = teach;
                    //console.log("aaaaaaaaaaaaaaaaaaa",req.session.isLoggedIn2);
                    req.session.isTeacher = true;
                    /*if(req.session.returnURL){
                        res.redirect(req.session.returnURL);
                    } else{*/
                        res.redirect('/teacher');
                    //}
                    
                } else{
                    res.render('teacherLogin',{
                        message: 'Incorrect password!',
                        type: 'alert-danger'
                    });
                }
            } 
            else{
                res.render('teacherLogin',{
                    message: 'Email does not exists!',
                    type: 'alert-danger'
                });
            }
        });
});




module.exports = router;