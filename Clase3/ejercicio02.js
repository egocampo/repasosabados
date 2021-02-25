/*********************
ALUMNO: GABRIEL OCAMPO
DIVISION: 1°G
EJERCICIO  WHILE 02
*********************/
/*2. Mismo ejercicio, pero no se cuantos numeros se ingresan. (Lo decide el usuario).
mayores que 10 y menores 20 (incluisive en ambos casos)
Mostrar tambien el promedio de los numeros que cumplen la condicion.*/

var numeroIngresado;
var continuar="s";
var acumulador=0;
var promedio;
var contadorCondicional;

while(continuar=="s")
{
	numeroIngresado=parseInt(prompt("Ingrese un número"));
	if(numeroIngresado>=10 && numeroIngresado<=20)
	{
 		contadorCondicional++;
 		acumulador+=numeroIngresado;
 	}
 	continuar=prompt("Desea ingresar otro número, presione \"s\"");
}

if(contadorCondicional!=0)
{
	promedio=acumulador/contadorCondicional;
}
else
{
	promedio=0;
}
alert("La cantidad de numeros entre 10 y 20 inclusive son: "+contadorCondicional);
alert("El promedio de valores de los números entre 10 y 20 inclusive son: "+promedio);