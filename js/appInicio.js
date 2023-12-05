



  
var sesion=localStorage.getItem("nombre");

const checarSesion=()=>{
  if(sesion!==null){
    window.location.href="login.html";
  }
  document.querySelector("#usuario").innerHTML=sesion;
}

const cerrarSesion=()=>{
    localStorage.clear();
    window.location.href="login.html";
}
