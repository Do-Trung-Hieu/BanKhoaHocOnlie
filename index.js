let express = require('express');
let expressHbs = require('express-handlebars');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let session = require('express-session');
const Handlebars = require('handlebars');
let {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');

let app = express();

app.use(express.static(__dirname + '/public'));

let helper = require('./controllers/helper');
let paginateHelper = require('express-handlebars-paginate');
/*let hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
});
app.engine('hbs',hbs.engine);*/
app.engine('handlebars',expressHbs({
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    helpers: {
        createStarList: helper.createStarList,
        createStars: helper.creatStars,
        createPagination: paginateHelper.createPagination
    },
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine','handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(session({
    cookie:{httpOnly: true, maxAge: null},
    secret: 'S3cret',
    resave: false,
    saveUninitialized: false
}));

let Cart = require('./controllers/cartController');
app.use((req,res,next)=>{
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    req.session.cart = cart;
    // hiển thị số lượng trên giỏ hàng
    res.locals.totalQuantity = cart.totalQuantity;

    res.locals.fullname = req.session.user ? req.session.user.fullname : '';
    res.locals.isLoggedIn = req.session.user ? true : false;
    next();
});

app.use('/',require('./routes/indexRouter'));
app.use('/products',require('./routes/productRouter'));
app.use('/cart',require('./routes/cartRouter'));
app.use('/comments',require('./routes/commentRouter'));
app.use('/reviews',require('./routes/reviewRouter'));
app.use('/users',require('./routes/userRouter'));
app.use('/pays',require('./routes/payRouter'));

app.get('/sync', (req,res) => {
    let models = require('./models');
    models.sequelize.sync()
    .then(()=>{
        res.send('Success');
    });

});

// app.get('/:page', (req,res) => {
//     let banners = {
//         blog: 'Our Blog',
//         category: 'Shop Category',
//         cart: 'Shopping Cart',
//         single_product: "Product"
//     };
//     let page = req.params.page;
//     res.render(page,{banner: banners[page]});
// })

app.set('port',process.env.PORT || 5000);
app.listen(app.get('port'),() => {
    console.log(`Server is running at port ${app.get('port')}`);
});