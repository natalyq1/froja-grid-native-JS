/*--------Consulta pacientes-----------------*/
let buttonsearch=document.querySelector("#buscardoc.azul") ;
buttonsearch.onclick=function ingresar(e){
  e.preventDefault()
let numdoc=parseInt(document.getElementById("numberdoc").value);


if (numdoc==52368795) {
  Swal.fire({
    title: 'Nombre paciente:\n Jose Rodrigues Camacho.',
    text: 'Primer dosis aplicada:\n Moderna el 12 de diciembre del 2021.\n\n Prosiga a hacer el registro de la segunda dosis.',
  })
  //alert("Nombre paciente: Jose Rodrigues Camacho.\nPrimer dosis aplicada: Moderna el 12 de diciembre del 2021.\nProsiga a hacer el registro de la segunda dosis.");
  window.setTimeout( ()=>{window.location.href="registronuevo.html"},8000)
} else if(numdoc==1001235478){
    alert("Nombre paciente: Juan Perez Coral.\nPrimer dosis aplicada: Moderna el 5 de mayo del 2021.\nSegunda dosis aplicada: Moderna el 3 de octubre del 2021.\nProsiga a hacer el registro de la tercera dosis.");
    window.setTimeout( ()=>{window.location.href="registronuevo.html"},1000)
} else if(numdoc==25413574){
    alert("Nombre paciente: Lina Parra Sorza.\nEsquema completado.\nPrimer dosis aplicada: Moderna el 5 de abril del 2021.\nSegunda dosis aplicada: Moderna el 3 de septiembre del 2021.\nTercera dosis aplicada: Moderna el 3 de febrero del 2022.");
}
 else if(numdoc==1007203506){
    alert("No hay registro de vacuna para este paciente, proceda al registro.");
    window.setTimeout( ()=>{window.location.href="registronuevo.html"},1000)
}
  else{
    Swal.fire({
      icon: 'error',
      title: 'Los datos ingresados son incorrectos,',
      text: 'verifique de nuevo.',
    })
    
  }
}