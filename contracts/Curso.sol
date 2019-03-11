pragma solidity ^0.5.0;

contract Curso{ 
    
    address profesor;
    
    struct alumno{
        uint matricula;
        string nombre;
        string apellidos;
        uint fecharegistro;
        bytes32 codigo;
    }
    
    mapping (address => alumno) alumnos;
    
    modifier soloProfesor {
        require(msg.sender == profesor,
        "Solo el profesor puede modificar la lista de alumnos");
        _;
    }
    
    event alumnoAgregado(uint _matricula, string nombre);
    
    constructor(address _profesor) public{
        profesor = _profesor;
    }
    
    function registraAlumno(address _addAlumno, 
        uint _matricula,
        string memory _nombre,
        string memory _apellidos,
        uint _fecharegistro,
        bytes32 _codigo) 
        public soloProfesor returns(bool){
        
        require(_matricula != 0, "Debe indicarse una matricula");
        
        bytes memory emptyString = bytes(_nombre);
        
        if(emptyString.length == 0)
            revert("Debe especificar un nombre");
        
        alumnos[_addAlumno] = alumno(_matricula, _nombre, _apellidos, _fecharegistro, _codigo);
        
        emit alumnoAgregado(_matricula, _nombre);
        
        return true;
    }
    
    function getAlumnobyAddress(address _addAlumno) public view returns(uint,string memory){
        alumno storage a = alumnos[_addAlumno];
        
        return (a.matricula, a.nombre);
    }
}
