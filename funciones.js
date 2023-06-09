function suma() {
  var num1 = document.getElementById("e1").value;
  var num2 = document.getElementById("e2").value;
  var n1 = document.getElementById("n1").value;
  var n2 = document.getElementById("n2").value;
  var opcion1=document.getElementById("efectivo").checked;
  var opcion2=document.getElementById("tarjeta_c").checked;
  var opcion3=document.getElementById("tarjeta_d").checked;
  var result;

  num1 = parseInt(num1);
  num2 = parseInt(num2);


  if (isNaN(num1) || isNaN(num2)) {
    alert("no se pueden operar letras");
    return;
  }

    result = num1 + num2;


  if(opcion1){
    alert("SE LE DESCONTARON $10 YA QUE ABONO EN EFECTIVO");

    result = result - 10;
  }

  if(opcion2){
    alert("SE LE DESCONTARON $5 YA QUE PAGO CON TARJETA DE CREDITO");

    result = result - 5;
  }

  if(opcion3){
    alert("NO SE LE DESCONTO DINERO YA QUE ABONO CON TARJETA DE DEBITO");
  }

  
  document.getElementById("resultado").innerText ="Señor "+ n1 +" "+ n2 +", $"+ result +" ES EL TOTAL DE SU COMPRA";
}

function borrar() {
  document.getElementById("opcion1").value = "";
  document.getElementById("opcion2").value = "";
  document.getElementById("opcion3").value = "";
  document.getElementById("e1").value = "";
  document.getElementById("e2").value = "";
  document.getElementById("resultado").value = "";
  document.getElementById("n1").value="";
  document.getElementById("n2").value="";
}

function mayor(){
var nom1=document.getElementById("n1").value;
var nom2=document.getElementById("n2").value;
var edad1=document.getElementById("e1").value;
var edad2=document.getElementById("e2").value;
var mensaje;

edad1=parseInt(edad1);
edad2=parseInt(edad2);


if(edad1>edad2){

mensaje=nom1+" Es el Mayor";

}else if (edad2>edad1){

  mensaje=nom2+" Es el Mayor";

}else{

mensaje="Las edades son Iguales";

}


document.getElementById("resultado").innerHTML=mensaje;


}

function verificar(){
var opcion1=document.getElementById("hombre").checked;
var opcion2=document.getElementById("mujer").checked;
var opcion3=document.getElementById("nino").checked;
var opcion4=document.getElementById("nina").checked;



if(opcion1 || opcion2){

alert("seleccionaste un nombre o una mujer");

}



}