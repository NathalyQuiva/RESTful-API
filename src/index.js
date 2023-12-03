const express = require ('express');
const app = express();
const morgan = require ('morgan');

//Setting
app.set('port', 3000)

//Middleware 
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Starting server
app.listen(app.get('port'), ()=>{
    console.log(`Listen on port ${app.get('port')}`);
})