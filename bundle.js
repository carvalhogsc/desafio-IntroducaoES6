"use strict";

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var idades = usuarios.map(function (_ref) {
  var idade = _ref.idade;
  return idade;
});
console.log(idades);
var filtrarUsuarios = usuarios.filter(function (_ref2) {
  var idade = _ref2.idade,
      empresa = _ref2.empresa;
  return idade > 18 && empresa === "Rocketseat";
});
console.log(filtrarUsuarios);
var procurarUsuarioEmpresa = usuarios.find(function (_ref3) {
  var empresa = _ref3.empresa;
  return empresa === "Google";
});
console.log(procurarUsuarioEmpresa);
var mapaFiltro = usuarios.filter(function (item) {
  return item.idade * 2 < 50;
});
console.log(mapaFiltro);
