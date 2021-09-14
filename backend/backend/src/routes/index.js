const {Router}= require('express')
const router=Router();
const {login,getarranquet,getarranquetid}=require('../controllers/index.controller')
// rutas 
// login
router.post('/api/login',login) 

// Arranque de turnos 
router.get('/api/getarranque/:id/:dia/:mes/:anio/:planta/:minhr/:maxhr',getarranquetid) 
router.get('/api/getarranque',getarranquet) 
module.exports=router;