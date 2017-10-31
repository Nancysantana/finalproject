//pediremos que ingresen su numberCard para validar
var numberCard = prompt("ingresa los digitos de tu tarjeta");

//si nos ingresa un campo vacio mandar una alerta que ingrese nuevamente su numberCard
 if( typeof(numberCard)==""){
 alert("El digito es incorrecto, ingresa nuevamente");
}
//convertir a un array
var ArrayNew=[];
ArrayNew = Array.from(numberCard);
//una vez que tenemos el array invertir
ArrayInvested= ArrayNew.reverse();

//al obtener el array invertido aplicaremos la operacion alos numeros en la posicion pares
var ArrayImpar=[];
for(var i=0; i<=ArrayInvested.length; i ++){
  if(i%2==0){
  ArrayImpar.push(ArrayInvested[i]);
}else{
    ArrayImpar.push(ArrayInvested[i]*2);
  }
}
console.log(ArrayImpar);

//comentario
