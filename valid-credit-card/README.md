##  Pseudocodigo
## Tarjeta de crédito válida

*/Crea una web que pida, por medio de un prompt(), el número de una tarjeta de crédito y confirme su validez según el algoritmo de Luhn.
Tu código debe estar compuesto por 1 función: isValidCard
El usuario no debe poder ingresar un campo vacío
/*
1. por medio de un prompt() pedimos que ingrese el digitos de la tarjeta
2. pasar los numeros a un array
3. pasar ese array a un array en orden inverso
4. aplicaremos la operacion(multiplicar por 2) alos numeros que esten en la posicion de pares
4.1 si el resultado de la multiplicacion es mayor a 10 se suman
5. sumar los digitos y los nuevos digitos
6. comprobar si la tarjeta es valida

## Diagrama de Flujo

![esta es la imagen del README](https://fotos.subefotos.com/66e12b3656f9e9ed4386a43bcdaedfbdo.png)
