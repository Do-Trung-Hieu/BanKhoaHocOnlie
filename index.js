let express = require('express');
let expressHbs = require('express-handlebars');
const Handlebars = require('handlebars');
let {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');

let app = express();

app.use(express.static(__dirname + '/public'));

let helper = require('./controllers/helper');
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
        createStars: helper.creatStars
    },
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine','handlebars');

app.use('/',require('./routes/indexRouter'));
app.use('/products',require('./routes/productRouter'));

app.get('/sync', (req,res) => {
    let models = require('./models');
    models.sequelize.sync()
    .then(()=>{
        res.send('Success');
    });

});

app.get('/:page', (req,res) => {
    let banners = {
        blog: 'Our Blog',
        category: 'Shop Category',
        cart: 'Shopping Cart',
        single_product: "Product"
    };
    let page = req.params.page;
    res.render(page,{banner: banners[page]});
})

app.set('port',process.env.PORT || 5000);
app.listen(app.get('port'),() => {
    console.log(`Server is running at port ${app.get('port')}`);
});