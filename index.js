let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));
let expressHbs = require('express-handlebars');
let {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');

let hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
});
app.engine('hbs',hbs.engine);
app.set('view engine','hbs');

/* Thay cai nay */
/*app.get('/', (req,res) => {
    res.render('index');
})*/

/* Bang cai nay */

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
        category: 'Category',
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