module.exports = {
    PORT: 3000,
    ethereum:{
        contractAddress: '0xa4a205232e92a6afb4db0a7f72af8eeb283910f5', 
        abi: [
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_addAlumno",
                        "type": "address"
                    },
                    {
                        "name": "_matricula",
                        "type": "uint256"
                    },
                    {
                        "name": "_nombre",
                        "type": "string"
                    },
                    {
                        "name": "_apellidos",
                        "type": "string"
                    },
                    {
                        "name": "_fecharegistro",
                        "type": "uint256"
                    },
                    {
                        "name": "_codigo",
                        "type": "bytes32"
                    }
                ],
                "name": "registraAlumno",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_addAlumno",
                        "type": "address"
                    }
                ],
                "name": "getAlumnobyAddress",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    },
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "name": "_profesor",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_matricula",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "nombre",
                        "type": "string"
                    }
                ],
                "name": "alumnoAgregado",
                "type": "event"
            }
        ],
        privateKey: 'B23E3014962C2F525F4C1D65708A6FB5D0D37745AD8076522A46BB966004EBC3',
    }
}