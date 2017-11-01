*/Crea una web que pida, por medio de un prompt(), una frase al usuario
y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César
con el parámetro de desplazamiento de 33 espacios hacia la derecha.
Por ejemplo:


  Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ.
   En el codigo ASCII la letra A (tiene la posicion 65) y termina con la letra Z (en la posicion 90).

  Texto original:   abcdefghijklmnopqrstuvwxyz.
    En el codigo ASCII la letra A (tiene la posicion 65) y termina con la letra Z (en la posicion 90).

  Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG.
   El codigo recorrido 33 espacios ala derecha comienaz con la letra H y termina con la letra G.

  Texto codificado: hijklmnopqrstuvwxyz
   El codigo recorrido 33 espacios ala derecha comienaz con la letra H y termina con la letra G.

Consideraciones Específicas

Tu programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas.
La fórmula para descifrar es: (x - n) % 26.
Tu código debe estar compuesto por 2 funciones con los siguientes nombres: cipher y decipher.
El usuario no debe poder ingresar un campo vacío o que contenga números.
/*

## Pseudocódigo
1. Por medio de un prompt() pedir al usuario que ingrese una frace.

2.  El codigo tendra 2 fuciones con los nombres: cipher y decipher.

2.1 para obtener el codigo de la frace utilizaremos
  charCodeAt(); te da la letra en codigo ASCII
  String.fromCharCode(); al ingresar el numero nos devuelve la letra desde el codigo ASCII

 3. Las siguientes formulas

 3.1 Si el usualio nos da una frace en codigo cesar aplicaremos
 La formula para decipher: (x - n)  % 26.

 3.2 si el usuario nos da una frace aplicaremos
 la Formula para cipher: (x - 65 + n) % 26 + 65.

4. Al final devolvera el mismo mensaje encriptado con el algoritmo de Cifrado César.

## Diagrama de Flujo

![esta es la imagen del README](https://fotos.subefotos.com/e78c82d083fa571cfaada759c9298167o.png)
