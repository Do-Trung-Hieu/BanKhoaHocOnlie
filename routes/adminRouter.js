let express = require("express");
let router = express();
const path = require("path");
let sharp = require('sharp');
let multer = require('multer');
const { error } = require("console");
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

router.get("/", userlogin.isLoggend_Admin, (req, res,next) => {
    let tk = require('../controllers/adminController');
    tk 
        .getTotalBestSeller()
        .then (data => {
            console.log(data);
            res.locals.top = data;
            //console.log(top.rows);
            res.render('admin/dashboard', { layout: "../admin/layouts/main.handlebars" })
        })
        .catch(error => next(error));
}); // ok
router.get("/user" , userlogin.isLoggend_Admin ,(req, res, next) => {
    let use = require('../controllers/userController');
    use
        .getInfoAll()
        .then(data =>{
            console.log(data);
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
            console.log(data);
            res.locals.userss = data;
            res.render("admin/edituser", { layout: "../admin/layouts/main.handlebars" });
        })
        .catch(error => next(error));
}); // ok
router.post("/user", upload.single("image"), async function (req, res,next) {
    if (!req.file) {
        return res.send(
            `<script>confirm("Vui lòng thêm 1 hình ảnh"); history.back();</script>`
        );
    }
    filename = `${Date.now()}-${req.file.originalname}`;
    console.log(filename);
    sharp(req.file.buffer).resize({width: 70,height: 71}).toFile(`./public/img/users/${filename}`);
    const email = req.body.email;
    const password = req.body.password;
    const hoten = req.body.hoten;
    const image = "/img/users/" + filename;
    let ktrauser = require('../controllers/userController');
    ktrauser
        .getByEmail(email)
        .then(data=>{
            console.log(data);
            if(data != null) {
                return res.send(
                    `<script>confirm("Tài Khoản đã sử dụng"); history.back();</script>`
                );
            }
            let ins = require('../controllers/userController');
            return ins.insertUser(email,password,hoten,image);
        })
        .then(data =>{
            console.log(data);
            res.redirect('/admin/user');
        })
        .catch(error => next(error));
}); // ok
router.post("/user/edit/:email/updateuser", async (req, res,next) => {
    const hoten = req.body.hoten;
    const isadmin = req.body.isadmin;
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
router.post("/user/delete/:email", (req,res,Next) =>{
    let del = require('../controllers/userController');
    del
        .deleteUser(req.params.email)
        .then(
            res.redirect('/admin/user')
        )
        .catch(error => Next(error));
}); // ok
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
router.post("/teacher", upload.single("image"),userlogin.isLoggend_Admin , async function (req,res,next) {
    if (!req.file) {
        return res.send(
            `<script>confirm("Vui lòng thêm 1 hình ảnh"); history.back();</script>`
        );
    }
    filename = `${Date.now()}-${req.file.originalname}`;
    console.log(filename);
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
            console.log(data);
            if(data != null) {
                return res.send(
                    `<script>confirm("Tài Khoản đã sử dụng"); history.back();</script>`
                );
            }
            let ins = require('../controllers/teacherController');
            return ins.insertTeacher(email,password,hoten,image);
        })
        .then(data =>{
            console.log(data);
            res.redirect('/admin/teacher');
        })
        .catch(error => next(error));
})  // ok
router.post("/teacher/edit/:email/update" , userlogin.isLoggend_Admin, upload.single("image"), async (req, res) => {
    const hoten = req.body.hoten;
    const chuyenmon = req.body.chuyenmon;
    const gioithieu = req.body.gioithieu;
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
//------------------------------------------------------------------------------
router.get("/courses"  ,userlogin.isLoggend_Admin, async (req, res , Next) => {
    // const client = new Client(db);
    // await client.connect();
    let topic_id;
    let category_id;
    let product_id ;
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
            //console.log('aaaaaaaaaaaaaaaaaaa',data[0]);
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
            //console.log('ssssssssssssssssss',data);
            res.locals.Topic = data;
            let pro = require("../controllers/adminController");
            return pro.getProduct(category_id,topic_id);
        })
        .then(data =>{
            //console.log(data);
            res.locals.Product = data;
            res.render('admin/danhmuckhoahoc', { layout: "../admin/layouts/main.handlebars"});
        })
        .catch(error => Next(error));
    // let cat = require('../controllers/adminController');
    // cat
    //     .getCategory()
    //     .then(data => {
    //         console.log(data);
    //         res.locals.Category = data;
            
    //         let topic = require('../controllers/adminController');
    //         return topic.getTopic(category_id);
    //     })
    //     .then(data =>{
    //         res.locals.Topic = data;
    //         let product = require('../controllers/adminController');
    //         console.log('bbbbbbbbbbbbbbbbbbbb',data);
    //         console.log('sssssssssssss',topic_id)
    //         return product.getProduct(topic_id);
    //     })
    //     .then(data => {
    //         console.log('aaaaaaaaaaaaaaaaaaa',data);
    //         res.locals.Product = data;
    //         let teach = require('../controllers/teacherController');
    //         return teach.getAll();
    //     })
    //     .then(data =>{
    //         res.locals.giaovien = data;
    //         res.render('admin/danhmuckhoahoc', { layout: "../admin/layouts/main.handlebars"});
    //     })
    // // const danhmuc = await client.query("SELECT * from danhmuc");
    // // const courses = await client.query(
    // //     "SELECT * from khoahoc where danhmucid = '" + danhmuc_id + "'"
    // // );
    // // const baihoc = await client.query(
    // //     "SELECT * from baihoc where courseid = '" + course_id + "'"
    // // );
    // // const giaovien = await client.query(
    // //     "select * from giaovien"
    // // );
    // // res.render("admin/danhmuckhoahoc", {
    // //     danhmuc: danhmuc.rows,
    // //     courses: courses.rows,
    // //     baihoc: baihoc.rows,
    // //     giaovien: giaovien.rows,
    // //     layout: "../admin/layouts/main.hbs"
    // // });
    // // client.end();
}); // ok
router.get("/themkhoahoc"  ,userlogin.isLoggend_Admin, async (req, res) => {
    res.render('admin/editkhoahoc', { layout: "../admin/layouts/main.hbs" })
}); // ok 
router.post("/themkhoahoc/addcategory" ,upload.single("avatar"), userlogin.isLoggend_Admin, (req, res, Next) => {

    if(req.file == undefined){
        return res.send('fail');
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
router.post("/themkhoahoc/addtopic" ,userlogin.isLoggend_Admin, async (req, res, Next) => {
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
                add.insertTopic(req.body.topic,req.body.name)
                    .then(data => {
                        res.redirect("/admin/courses");
                    })
                    
            }
        })
        .catch(error => Next(error));
}); // ok

router.post("/themkhoahoc/addkhoahoc" , upload.single('avatar'),userlogin.isLoggend_Admin, async (req, res, Next) => {
    // const imagePath = path.join(__dirname, "../public/img");
    // // call class Resize
    // const fileUpload = new Resize(imagePath);
    // const client = new Client(db);
    // await client.connect();
    const name = req.body.name;
    const gia = parseFloat(req.body.gia);
    const description = req.body.tongquan;
    const summary = req.body.chitiet;
    const categoryid = req.body.categoryid;
    const topicid = req.body.topicid;
    const teacherid = req.body.teacher;
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',teacherid);
    filename = `${Date.now()}-${req.file.originalname}`;
    console.log(filename);
    sharp(req.file.buffer).resize({width: 70,height: 71}).toFile(`./public/img/product/${filename}`);
    const image = "/img/product/" + filename;
    let check = require('../controllers/adminController');
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
                    .insertProduct(name,gia,description,summary,image,categoryid,topicid,teacherid)
                    .then(data =>{
                        console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',data);
                        res.redirect("/admin/courses");
                    })
                    .catch(error => Next(error));
            }
        })
    

    // const filename = await fileUpload.save(req.file.buffer);
    // const image = "/img/" + filename;
    // console.log(req.body)
    // const query = {
    //     text: `INSERT INTO public.khoahoc VALUES ((select 'C'||MAX(SUBSTRING(courseid,2,10)::integer+1) from khoahoc), $1::text, $2::integer, $3::text, $4::integer, $7::text, $6::text, $5::text);`,
    //     values: [name, gia, tongquan, chitiet, danhmuc, giaovien,image],
    // }
    // await client.query(query)
    // client.end();
    // res.redirect("/admin/courses");
}); // ok
router.post("/themkhoahoc/addbaihoc" , userlogin.isLoggend_Admin,async (req, res) => {
    const client = new Client(db);
    await client.connect();
    const nd = req.body.nd;
    const link = req.body.link;
    const courseid = req.body.courseid
    const selectchuong = {
        text: `select * from baihoc where courseid = $1::text;`,
        values: [courseid],
    }
    let chuong = await client.query(selectchuong)
    console.log(chuong.rowCount+1)
    const query = {
        text: `INSERT INTO public.baihoc VALUES ((select 'S'||MAX(SUBSTRING(sessionid,2,10)::integer+1) from  baihoc), $1::integer, $2::text, $3::text, $4::text);`,
        values: [chuong.rowCount+1,nd, link, courseid],
    }
    await client.query(query)
    client.end();
    res.redirect("/admin/courses");
});

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
