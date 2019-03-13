module.exports = {
    PORT: 3000,
    ethereum:{
        contractAddress: '0x3C16225674c1B89d77e35C8c6D158e501098F4D6', 
        abi: [{"inputs":[{"name":"_profesor","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_matricula","type":"uint256"},{"indexed":false,"name":"nombre","type":"string"}],"name":"alumnoAgregado","type":"event"},{"constant":false,"inputs":[{"name":"_addAlumno","type":"address"},{"name":"_matricula","type":"uint256"},{"name":"_nombre","type":"string"},{"name":"_apellidos","type":"string"},{"name":"_fecharegistro","type":"uint256"},{"name":"_codigo","type":"bytes32"}],"name":"registraAlumno","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_addAlumno","type":"address"}],"name":"getAlumnobyAddress","outputs":[{"name":"","type":"uint256"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}],
        privateKey: '5516C97D87839494EFC83170BA681A4FA9E31F91F6B84DE226800628AD09669F',
    }
}