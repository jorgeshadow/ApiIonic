const {Pool} =require('pg')
var ActiveDirectory = require('activedirectory');
// pool configuration
const config={
    user:'postgres',
    host:'192.168.0.247',
    password:'postgres',
    database:'REPORTES_GERENCIALES',
    port:'5432'
}
const pool=new Pool(config)
// consultas 
// logear usuario
const login = async (req,res) => {
  var config = {
    url: 'ldap://192.168.2.21',
    baseDN: 'dc=ligamayor,dc=com,dc=mx'
};
var ad = new ActiveDirectory(config);
var username = req.body.email;
var password =  req.body.password;
// Authenticate 
ad.authenticate(username, password, function(err, auth) {
    if (err) {
      res.json(auth);
        return;
    }
    if (auth) {
      res.send(auth);
    }
    else {
      res.send(auth);
    }
});
}
module.exports={
  login
}
// obtener status de table arranqueturno
const getarranquetid = async (req,res) => {
  
  try { 
    var replacePlanta=req.params.planta
    replacePlanta.replace('%20',' ') 
      const resp =await pool.query(`SELECT * FROM public.reporte_produccion  WHERE negocio='${req.params.id}' AND dia='${req.params.dia}'AND mes='${req.params.mes}'AND anio='${req.params.anio}'and planta='${replacePlanta}' AND hora>='${req.params.minhr}' AND hora<='${req.params.maxhr}' order by modulo_id ASC `);  
      res.json(resp.rows)
  } catch (error) {
      console.log(error)
  } 
}
const getarranquet = async (req,res) => { 
  try {
      const resp =await pool.query(`SELECT * FROM public.reporte_produccion`); 
      res.json(resp.rows)
  } catch (error) { 
  } 
}
module.exports={
    login,getarranquet,getarranquetid
}

