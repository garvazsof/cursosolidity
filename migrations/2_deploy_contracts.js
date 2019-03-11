const Curso = artifacts.require("Curso");

module.exports = function(deployer) {
  deployer.deploy(Curso, "0x7284ffeedbadcd8e0596d6f82e72ac1de62c03d6");
};
