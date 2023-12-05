const express = require ('express');
const app = express();
const morgan = require ('morgan');


//Setting
app.set('port', process.env.PORT || 3006);
app.set('json spaces', 2);

//Routes
app.use(require('./routes/index'));
app.use(require('./routes/movies'));

//Middleware 
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Starting server
app.listen(app.get('port'), ()=>{
    console.log(`Listen on port ${app.get('port')}`);
})