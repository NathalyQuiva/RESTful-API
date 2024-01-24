const express = require ('express');
const app = express();
const morgan = require ('morgan');
const movies = require('./sample.json');

//Setting
app.set('port', process.env.PORT || 3006);
app.set('json spaces', 2);

//Middleware 
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.send(movies)
});
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'))


//Starting server
app.listen(app.get('port'), ()=>{
    console.log(`Listen on port ${app.get('port')}`);
})