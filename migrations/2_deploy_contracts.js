const Curso = artifacts.require("Curso");

module.exports = function(deployer) {
  deployer.deploy(Curso, "0x5c6388A5a066A43E0137AD86043a6E24ab7E6F49");
};
