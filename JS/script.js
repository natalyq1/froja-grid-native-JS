/*--------usuario y contraseña-----------------*/
let button=document.querySelector(".ingresar") ;

button.onclick=function ingresar(e){
  e.preventDefault()
//button.addEventListener('click',()=>{
 let vusuario=document.getElementById("usuario").value;
let vcontraseña=document.getElementById("contraseña").value;

if (vusuario=="Admin" && vcontraseña=="Kuepa2022")  {
    Swal.fire({
    icon: 'success',
    title: '¡Siga!',    
  })
    window.setTimeout( ()=>{window.location.href="dashboard.html"},3000)
}
 else {
  Swal.fire({
    icon: 'error',
    title: 'Las credenciales son incorrectas,',
    text: 'inténtelo de nuevo.',
  })
}
}


/*--------Consulta pacientes-----------------
let buttonsearch=document.querySelector("#buscardoc) ;
buttonsearch.onclick=function ingresar(e){
  e.preventDefault()
let numdoc=parseInt(document.getElementById("numberdoc").value);


if (numdoc==52368795) {
  alert("Primer dosis aplicada: Moderna el 12 de diciembre del 2021.\nProsiga a hacer el registro de la segunda dosis.");
  window.setTimeout( ()=>{window.location.href="registronuevo.html"},1000)
} else if(numdoc==1001235478){
    alert("Primer dosis aplicada: Moderna el 5 de mayo del 2021.\nSegunda dosis aplicada: Moderna el 3 de octubre del 2021.\nProsiga a hacer el registro de la tercera dosis.");
    window.setTimeout( ()=>{window.location.href="registronuevo.html"},1000)
} else if(numdoc==25413574){
    alert("Esquema completado:\nPrimer dosis aplicada: Moderna el 5 de abril del 2021.\nSegunda dosis aplicada: Moderna el 3 de septiembre del 2021.\nTercera dosis aplicada: Moderna el 3 de febrero del 2022.");
}
 else if(numdoc==1007203506){
    alert("No hay registro de vacuna para este paciente, proceda al registro.");
  }
  else{
    alert("Los datos ingresados son incorrectos, verifique de nuevo")
  }
}
*/

/*--------Formulario-----------------*/











