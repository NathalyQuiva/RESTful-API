const express = require ('express');
const app = express();
const morgan = require ('morgan');


//Setting
app.set('port', process.env.PORT || 3006);
app.set('json spaces', 2);

//Middleware 
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Routes
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));

//Starting server
app.listen(app.get('port'), ()=>{
    console.log(`Listen on port ${app.get('port')}`);
})