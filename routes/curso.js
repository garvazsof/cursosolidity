var express = require("express");
var router = express.Router();

var bodyParser = require('body-parser');
var ethers = require('ethers');

var config = require("../config");

var ethProvider = new ethers.providers.InfuraProvider("ropsten","79f3534c6c384e52855ac864d523db3b");

// -----------------------------------
//wallet para transacciones
var wallet = new ethers.Wallet(config.ethereum.privateKey,ethProvider);
var contract_sign = new ethers.Contract(config.ethereum.contractAddress, config.ethereum.abi, wallet);


router.post("/", function(req, res){

    console.log("Invocacion recibida");

    var results = [];

    try{    

            //gestionar variable
        var _addAlumno = req.body.Address;
        var _matricula = req.body.Matricula;
        var _nombre = req.body.Nombre;
        var _apellidos = req.body.Apellidos;
        /*var _fecharegistro = req.body.FechaRegistro;*/
        var _codigo = req.body.Codigo;
        _codigo =  ethers.utils.formatBytes32String(_codigo); //stringToBytes32(_codigo);
        console.log(_codigo);
        console.log('invoca funcion del smart conract');

        let overrides = {

            // The address to execute the call as
            from: "0x5c6388A5a066A43E0137AD86043a6E24ab7E6F49",
        
            // The maximum units of gas for the transaction to use
            gasLimit: 3000000,

            // The price (in wei) per unit of gas
            gasPrice: ethers.utils.parseUnits('20.0', 'gwei'),
        
        };

        var sendPromise = contract_sign.registraAlumno(_addAlumno,
             ethers.utils.bigNumberify(_matricula),
             _nombre,_apellidos,
             ethers.utils.bigNumberify(_matricula),
             _codigo);

        console.log('Gestiona la respuesta');
        sendPromise.then(function(transaction){
            results.push({
                result: "OK",
                tx_hash: transaction.hash
            });
            console.log('Alumno registrado' + transaction.hash);
            res.status(200).send(results); 
        }); 

        //res.status(200).send('Cursos API - registra alumno'); 
    } 
    catch(error)
    {
        results.push({
            result: "ERROR",
            error: error
        });
        console.log(error);
        res.status(500).send(results); 
    }

})

function stringToBytes32(text) {
    var data = ethers.utils.toUtf8Bytes(text);
    if (data.length > 32) { throw new Error('too long'); }
    data = ethers.utils.padZeros(data, 32);
    return ethers.utils.hexlify(data);
}

router.get("/", function(req, res) {

    res.status(200).send("Hola Ethereum"); 

});

module.exports = router;