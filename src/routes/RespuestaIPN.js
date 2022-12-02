const { Router } = require("express");
const router = Router();
const request = require('request');

const datos = require('../datos.json');
console.log(datos)

router.get('/IPN',(req,res) => {
  
    res(datos);

});

router.post('/IPN',(req,res) => {

    //console.log(req.body);
    const respuesta = {...req.body};

    datos.push(respuesta);

    res(datos);

        

});

module.exports = router;
