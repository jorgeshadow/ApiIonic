const {Pool} =require('pg')
var ActiveDirectory = require('activedirectory');
// pool configuration
const config={
    user:'wvukyyruyneyxa',
    host:'ec2-52-0-114-209.compute-1.amazonaws.com',
    password:'a38cabbfeac360b7187d48305ff7bae3a3af094242c43e6eb2e90d6f27c1c5a4',
    database:'d6to9hi99g7fid',
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
      const resp =await pool.query(`SELECT * FROM public.produccion_inicial  WHERE negocio='${req.params.id}' AND dia='${req.params.dia}'AND mes='${req.params.mes}'AND anio='${req.params.anio}'and planta='${replacePlanta}' AND hora>='${req.params.minhr}' AND hora<='${req.params.maxhr}' order by modulo_id ASC `);  
      res.json(resp.rows)
  } catch (error) {
      console.log(error)
  } 
}
const getarranquet = async (req,res) => { 
  try {
      const resp =await pool.query(`SELECT * FROM public.produccion_inicial`); 
      res.json(resp.rows)
  } catch (error) { 
  } 
}
module.exports={
    login,getarranquet,getarranquetid
}

