/*--------Registro pacientes-----------------*/
let buttonsave=document.querySelector("#guardaformulario") ;
var numeros = "0123456789";
  var caracteres = " abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

buttonsave.onkeypress=function ingresar(e){
  e.preventDefault()
let num=parseInt(document.getElementById("number").value);

if (num==numeros) {
 console.log("cumple")
    return true;
}
else {
    console.log("no cumple")
  return false;
  
}
}