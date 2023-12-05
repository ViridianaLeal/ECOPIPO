
var sesion=localStorage.getItem("nombre");

const checarSesion=()=>{
  if(sesion!=null){
    window.location.href="inicio.html";
  }

}

const registrarUsuario= async()=>{

    var nombre=document.querySelector("#nombre").value;
    var correo=document.querySelector("#correo").value;   
    var password=document.querySelector("#password").value;

    if(nombre.trim()==='' ||
    correo.trim()==='' ||
    password.trim()==='' ){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'FALTA LLENAR CAMPOS',
            footer: 'CRUD CONTACTOS'
          })  
        return;       
    }

    if(!validarCorreo(correo)){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'INTRODUCE UN CORREO ELECTRÓNICO VÁLIDO',
            footer: 'CRUD CONTACTOS'
          })  
          return;
    }
    if(!validarPassword(password)){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            html: 'INTRODUCE UN PASSWORD VÁLIDO <br> [Mayúsculas, minúsculas, números y mín. 8 Carácteres]',
            footer: 'CRUD CONTACTOS'
          })  
          return;
    }
    if(!validarNombre(nombre)){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'INTRODUCE UN NOMBRE VÁLIDO',
            footer: 'CRUD CONTACTOS'
          })  
          return;
    }

    // INSERTAR A LA BASE DE DATOS

    const datos=new FormData();
    datos.append("correo",correo);
    datos.append("nombre",nombre);
    datos.append("password",password);

    var respuesta=await fetch("php/usuario/registrarUsuario.php",{
        method:'POST',
        body:datos
    });

    var resultado=await respuesta.json();

    if(resultado.success==true){
        Swal.fire({
            icon: 'success',
            title: 'EXITO!',
            text: resultado.mensaje,
            footer: ''
          }) 
          document.querySelector("#formRegistrar").reset();
          setTimeout(()=>{
            window.location.href="signup.html";
          },2000);
    }else{
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: resultado.mensaje,
            footer: 'CRUD CONTACTOS'
          }) 
    }

}






//login 

const loginUsuario= async()=>{
  var correo=document.querySelector("#correo").value;
  var password=document.querySelector("#password").value;

  


   // INSERTAR A LA BASE DE DATOS

   const datos=new FormData();
   datos.append("correo",correo);
   datos.append("password",password);

   var respuesta=await fetch("php/usuario/loginUsuario.php",{
       method:'POST',
       body:datos
   });

   var resultado=await respuesta.json();

  

}