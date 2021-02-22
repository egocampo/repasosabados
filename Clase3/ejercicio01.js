/*
ALUMNO: GABRIEL OCAMPO
DIVISION: 1°G
EJERCICIO 1
*/

/*1. Ingresar 5 numeros, y determinar la cantidad
 de numeros que son mayores que 10 y menores 20 (incluisive en ambos casos)*/

var numeroIngresado;
var contador=0;
var contadorCondicional=0;

while(contador<5)
{
 	numeroIngresado=parseInt(prompt("Ingrese un número"));
 	if(numeroIngresado>=10 && numeroIngresado<=20){
 		contadorCondicional++;
 	}
 	contador++;
}

alert("La cantidad de numeros entre 10 y 20 inclusive son: "+contadorCondicional);