function validateForm(){
	/* Escribe tú código aquí */
  //Llamando a los valores
var n = document.getElementById('name').value;
var ln= document.getElementById('lastname').value;
var email=document.getElementById('input-email').value;
var psw= document.getElementById('input-password').value;
 //MATCH -- compara cadena con expr.reg (ex.reg - encontradas en inter)
 var letras1 = n.match(/[A-Z]{1,}[a-z]+/);  //distincion entre mayusculas y min.
 var letras2 = ln.match(/[A-Z]{1,}[a-z]+/);

 // condiciones
  if((n.length == 0)||(ln.length == 0)||(psw.length ==0)||(email.length==0)){
    alert ("Ingrese Campos Obligatorio");
  }else if(n != letras1 ){
     alert ("Tipo de Nombre no valido"+ "\n" + "Primera Letra en Mayusculas")
   }else if (ln!= letras2) {
    alert("Tipo de Apellido no valido"+ "\n" + "Primera Letra en Mayusculas" )
    // formato de validacion de un email
  }else if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/)) {
    alert("Escriba este modelo de correo : 'xxxx@xxx.com'")
  }else if ((psw.length< 6)||(psw == "password")||(psw == "123456")||(psw == "098765")) {
    alert("Ingrese Contraseña valida con 6 caracteres")
}else{
    alert( n +" "+ ln+ " " + "Datos Aceptados :)")
  }
};
