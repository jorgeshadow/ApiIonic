const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const express =require('express')
const app = express();
const cors = require('cors')
app.use(cors())
app.listen(1100);
console.log('server on port 1100')
// definir middlewares
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// definir rutas 

const JWT_Secret = 'mli123/';
app.use(require('./routes/index'))
 
