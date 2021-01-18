let express = require("express");
let router = express();
const path = require("path");
let sharp = require('sharp');
let multer = require('multer');
let userlogin = require('../controllers/islogin');
let userController = require('../controllers/userController');
const { updateUser } = require("../controllers/userController");

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
    res.render('adminlogin');
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
                    //req.session.user = user;
                    req.session.nameAdmin = user.fullname;
                    req.session.isAdmin = user;
                    if(req.session.returnURL){
                        res.redirect(req.session.returnURL);
                    } else{

                        res.redirect('/admin');
                    }
                    
                } else{
                    res.render('login',{
                        message: 'Incorrect password!',
                        type: 'alert-danger'
                    });
                }
            } 
            else{
                res.render('adminlogin',{
                    message: 'Email does not exists!',
                    type: 'alert-danger'
                });
            }
        });
});
router.get('/logout',(req,res,next) => {
    req.session.destroy(error => {
        if(error){
            return next(error);
        } 
        return res.redirect('/admin/login');
    });
});

router.get("/", userlogin.isLoggend_Admin, (req, res,next) => {
    let tk = require('../controllers/adminController');
    tk 
        .getTotalBestSeller()
        .then (data => {
            res.locals.top = data;
            res.render('admin/dashboard', { layout: "../admin/layouts/main.handlebars" })
        })
        .catch(error => next(error));
}); // ok
router.get("/user" , userlogin.isLoggend_Admin ,(req, res, next) => {
    let use = require('../controllers/userController');
    use
        .getInfoAll()
        .then(data =>{
            res.locals.user = data;
            res.render('admin/tableuser',{layout: "../admin/layouts/main.handlebars" })
        })
        .catch(error => next(error));
}); // ok
router.get("/user/add" , userlogin.isLoggend_Admin , (req, res) => {
    res.render("admin/user", { layout: "../admin/layouts/main.handlebars" });
}); // ok
router.get("/user/edit/:email" , userlogin.isLoggend_Admin  ,(req, res, next) => {
    let use = require('../controllers/userController');
    use
        .getInfoDetail(req.params.email)
        .then(data =>{
            res.locals.user = data;
            res.render("admin/edituser", { layout: "../admin/layouts/main.handlebars" });
        })
        .catch(error => next(error));
}); // ok
router.post("/user",userlogin.isLoggend_Admin, upload.single("image"),  async function (req, res,next) {
    if (!req.file) {
        return res.send(
            `<script>confirm("Vui lòng thêm 1 hình ảnh"); history.back();</script>`
        );
    }
    
    filename = `${Date.now()}-${req.file.originalname}`;
    sharp(req.file.buffer).resize({width: 70,height: 71}).toFile(`./public/img/users/${filename}`);
    const email = req.body.email;
    const password = req.body.password;
    const hoten = req.body.hoten;
    const image = "/img/users/" + filename;
    let ktrauser = require('../controllers/userController');
    ktrauser
        .getByEmail(email)
        .then(data=>{
            if(data != null) {
                return res.send(
                    `<script>confirm("Tài Khoản đã sử dụng"); history.back();</script>`
                );
            }
            let ins = require('../controllers/userController');
            return ins.insertUser(email,password,hoten,image);
        })
        .then(data =>{
            res.redirect('/admin/user');
        })
        .catch(error => next(error));
}); // ok
router.post("/user/edit/:email/updateuser", userlogin.isLoggend_Admin, async (req, res,next) => {
    const hoten = req.body.hoten;
    const isadmin = req.body.isadmin;
    console.log("âaaaaaaaaaaaaaaaaaaaaâ",req.params.email);
    console.log("âaaaaaaaaaaaaaaaaaaaaâ",hoten);
    let up = require('../controllers/userController');
    up
        .updateUser(req.params.email,hoten)
        .then(
            res.send(
                `<script>confirm("Cập nhật thành công"); window.location="/admin/user";</script>`
            )
        )
        .catch(error => next(error));
}); // ok
router.post("/user/delete/:email", userlogin.isLoggend_Admin, (req,res,Next) =>{
    let del = require('../controllers/userController');
    del
        .deleteUser(req.params.email)
        .then(
            res.redirect('/admin/user')
        )
        .catch(error => Next(error));
}); // ok

router.post("/user/:email/lock_user", userlogin.isLoggend_Admin, async (req, res, Next) => {
    let lock = require('../controllers/userController')
    lock
        .updateUserBlock(req.params.email)
        .then(data =>{
            return res.redirect("/admin/user");
        })
        .catch(error => Next(error));
});
router.post("/user/:email/unlock_user", userlogin.isLoggend_Admin, async (req, res, Next) => {
    let lock = require('../controllers/userController')
    lock
        .updateUserUnBlock(req.params.email)
        .then(data =>{
            return res.redirect("/admin/user");
        })
        .catch(error => Next(error));
});
//-----------------------------------------------------------------------------
router.get("/teacher" , userlogin.isLoggend_Admin , async (req, res) => {
    let teach = require('../controllers/teacherController');
    teach
        .getAll()
        .then(data =>{
            res.locals.teacher = data;
            res.render("admin/tablegiaovien", {  layout: "../admin/layouts/main.handlebars" });
        });
}); // ok
router.get("/teacher/add", userlogin.isLoggend_Admin , ( req,res) => {
    res.render("admin/teacher", { layout: "../admin/layouts/main.handlebars" });
}); // ok
router.get("/teacher/edit/:email" , userlogin.isLoggend_Admin , async (req, res) => {
    let one = require('../controllers/teacherController');
    one
        .getByEmail(req.params.email)
        .then(data => {
            res.locals.teacher = data;
            res.render("admin/editteacher", { layout: "../admin/layouts/main.handlebars" });
        })
}); // ok
router.post("/teacher",userlogin.isLoggend_Admin , upload.single("image"), async function (req,res,next) {
    if (!req.file) {
        return res.send(
            `<script>confirm("Vui lòng thêm 1 hình ảnh"); history.back();</script>`
        );
    }
    filename = `${Date.now()}-${req.file.originalname}`;
    sharp(req.file.buffer).resize({width: 70,height: 71}).toFile(`./public/img/users/${filename}`);
    const image = "/img/users/" + filename;
    const email = req.body.email;
    const password = req.body.password;
    const hoten = req.body.hoten;
    const chuyenmon = req.body.chuyenmon;
    let ktrauser = require('../controllers/teacherController');
    ktrauser
        .getByEmail(email)
        .then(data=>{
            if(data != null) {
                return res.send(
                    `<script>confirm("Tài Khoản đã sử dụng"); history.back();</script>`
                );
            }
            let ins = require('../controllers/teacherController');
            return ins.insertTeacher(email,password,hoten,image,chuyenmon);
        })
        .then(data =>{
            res.redirect('/admin/teacher');
        })
        .catch(error => next(error));
})  // ok
router.post("/teacher/edit/:email/update" , userlogin.isLoggend_Admin, async (req, res) => {
    const hoten = req.body.hoten;
    let up = require('../controllers/teacherController');
    up
        .updateTeacher(req.params.email,hoten)
        .then(
            res.send(
                `<script>confirm("Cập nhật thành công"); window.location="/admin/teacher";</script>`
            )
        )
        .catch(error => next(error));
}); // ok
router.post("/teacher/delete/:email" , userlogin.isLoggend_Admin, (req,res,Next) =>{
    let delTe = require('../controllers/teacherController')
    delTe
        .deleteTeacher(req.params.email)
        .then(
            res.redirect('/admin/teacher')
        )
        .catch(error => Next(error));
}); // ok

router.post("/teacher/:email/lock_user", userlogin.isLoggend_Admin, async (req, res, Next) => {
    let lock = require('../controllers/teacherController')
    lock
        .updateTeacherLock(req.params.email)
        .then(data =>{
            return res.redirect("/admin/teacher");
        })
        .catch(error => Next(error));
});
router.post("/teacher/:email/unlock_user", userlogin.isLoggend_Admin, async (req, res, Next) => {
    let lock = require('../controllers/teacherController')
    lock
        .updateTeacherUnLock(req.params.email)
        .then(data =>{
            return res.redirect("/admin/teacher");
        })
        .catch(error => Next(error));
});
//------------------------------------------------------------------------------
router.get("/courses"  ,userlogin.isLoggend_Admin, async (req, res , Next) => {
    let topic_id;
    let category_id;
    if(!req.query.categoryid){
        category_id = 0;
        if (!req.query.topicid) {
            topic_id = 0;
        } 
        else {

            topic_id = req.query.topicid;
        }
    }
    else{
        category_id = req.query.categoryid;
        if (!req.query.topicid) {
            topic_id = 0;
        } 
        else {

            topic_id = req.query.topicid;
        }
    }
    let cat = require('../controllers/adminController');
    cat
        .getCategory()
        .then(data =>{
            res.locals.Category = data;
            let teacher = require('../controllers/teacherController');
            return teacher.getAll();
        })
        .then(data =>{
            res.locals.teacher = data;
            let topic = require('../controllers/adminController');
            return topic.getTopic(category_id);
        })
        .then(data =>{
            res.locals.Topic = data;
            let pro = require("../controllers/adminController");
            return pro.getProduct(category_id,topic_id);
        })
        .then(data =>{
            res.locals.Product = data;
            res.render('admin/danhmuckhoahoc', { layout: "../admin/layouts/main.handlebars"});
        })
        .catch(error => Next(error));
}); // ok

router.post("/courses/update/lock_course/:id", userlogin.isLoggend_Admin, async (req, res , Next) =>{
    let lockcour = require('../controllers/productController')
    lockcour
        .updateCourseLock(req.params.id)
        .then(data =>{
            return res.redirect("/admin/courses");
        })
        .catch(error => Next(error));
});

router.post("/courses/update/unlock_course/:id", userlogin.isLoggend_Admin, async (req, res , Next) =>{
    let lock = require('../controllers/productController')
    lock
        .updateCourseUnLock(req.params.id)
        .then(data =>{
            return res.redirect("/admin/courses");
        })
        .catch(error => Next(error));
});
router.get("/themkhoahoc"  ,userlogin.isLoggend_Admin, async (req, res) => {
    res.render('admin/editkhoahoc', { layout: "../admin/layouts/main.hbs" })
}); // ok 
router.post("/themkhoahoc/addcategory" , userlogin.isLoggend_Admin,upload.single("avatar"), (req, res, Next) => {

    if(req.file == undefined){
        return res.send('`<script>confirm("Vui lòng thêm 1 ảnh"); window.location="/admin/courses";</script>`');
    }

    filename = `${Date.now()}-${req.file.originalname}`;
    sharp(req.file.buffer).resize({width: 633,height: 550}).toFile(`./public/img/category/${filename}`);
    const image = "/img/category/" + filename;
    let check = require('../controllers/adminController');
    check
        .CheckCate(req.body.name)
        .then(data =>{
            if(data){
                res.send(
                    `<script>confirm("Tên Category đã tồn tại"); window.location="/admin/courses";</script>`
                );
            }
            else{
                let add = require('../controllers/adminController');
                add.insertCate(req.body.name,image)
                    .then(data => {
                        res.redirect("/admin/courses");
                    })
                    
            }
        })
        .catch(error => Next(error));
}); // ok
router.post("/themkhoahoc/addtopic" ,userlogin.isLoggend_Admin,upload.single("image"), async (req, res, Next) => {
    if(req.file == undefined){
        return res.send('`<script>confirm("Vui lòng thêm 1 ảnh"); window.location="/admin/courses";</script>`');
    }

    filename = `${Date.now()}-${req.file.originalname}`;
    sharp(req.file.buffer).resize({width: 633,height: 550}).toFile(`./public/img/category/${filename}`);
    const image = "/img/category/" + filename;
    let check = require('../controllers/adminController');
    check
        .CheckTopic(req.body.name)
        .then(data =>{
            if(data){
                res.send(
                    `<script>confirm("Tên Topic đã tồn tại"); window.location="/admin/courses";</script>`
                );
            }
            else{
                let add = require('../controllers/adminController');
                add.insertTopic(req.body.topic,req.body.name,image)
                    .then(data => {
                        res.redirect("/admin/courses");
                    })
                    
            }
        })
        .catch(error => Next(error));
}); // ok

router.post("/themkhoahoc/addkhoahoc" ,userlogin.isLoggend_Admin, upload.single('avatar'), async (req, res, Next) => {
    const name = req.body.name;
    const gia = parseFloat(req.body.gia);
    const giakm = parseFloat(req.body.giakm);
    const description = req.body.tongquan;
    const summary = req.body.chitiet;
    const categoryid = req.body.categoryid;
    const topicid = req.body.topicid;
    const teacherid = req.body.teacher;
    if(req.file == undefined){
        return res.send('`<script>confirm("Vui lòng thêm 1 ảnh"); window.location="/admin/courses";</script>`');
    }
    filename = `${Date.now()}-${req.file.originalname}`;
    sharp(req.file.buffer).resize({width: 800,height: 460}).toFile(`./public/img/product/${filename}`);
    const image = "/img/product/" + filename;
    let check = require('../controllers/adminController');
    if(gia > giakm){
        res.send(
            `<script>confirm("Giá không được lớn hơn giá khuyến mãi"); window.location="/admin/courses";</script>`
        );
    }
    else{
        check
        .getNamePro(name)
        .then(data =>{
            if(data){
                res.send(
                    `<script>confirm("Tên khoá học đã tồn tại"); window.location="/admin/courses";</script>`
                );
            }
            else{
                let add = require('../controllers/adminController');
                add
                    .insertProduct(name,gia,giakm,description,summary,image,categoryid,topicid,teacherid)
                    .then(data =>{
                        res.redirect("/admin/courses");
                    })
                    .catch(error => Next(error));
            }
        })
    }
    
}); // ok

router.post("/courses/delete/category/:id" ,userlogin.isLoggend_Admin, (req, res, Next) =>{
    let del = require('../controllers/adminController');
    del
        .CheckDelCat(req.params.id)
        .then(data =>{
            if(data){
                res.send(
                    `<script>confirm("Không thể xoá Category này vì còn tồn tại Topic thuộc Category"); window.location="/admin/courses";</script>`
                );
            }
            else{
                let del1 = require('../controllers/adminController');
                del1.deleteCate(req.params.id)
                .then(data =>{
                    res.redirect("/admin/courses");
                })
            }
        })
        .catch(error => Next(error));
}); // ok

router.post("/courses/delete/topic/:id", userlogin.isLoggend_Admin,(req, res, Next) =>{
    let del = require('../controllers/adminController');
    del
        .CheckDelTopic(req.params.id)
        .then(data =>{
            if(data){
                res.send(
                    `<script>confirm("Không thể xoá Topic này vì còn tồn tại khoá học thuộc Topic"); window.location="/admin/courses";</script>`
                );
            }
            else{
                let del1 = require('../controllers/adminController');
                del1.deleteTopic(req.params.id)
                .then(data =>{
                    res.redirect("/admin/courses");
                })
            }
        })
        .catch(error => Next(error));
}); // ok

router.post("/courses/delete/product/:id",userlogin.isLoggend_Admin, (req, res, Next) => {
    let del = require('../controllers/adminController');
    del
        .deleteProduct(req.params.id)
        .then(data =>{
            res.redirect("/admin/courses");
        })
})
module.exports = router;
