/*
----------------------------
ALUMNO: GABRIEL OCAMPO 
DIVISION: 1°G
EJERCICIO 01 - SABADO 13/01
----------------------------
2- con if
ingresar el nombre y los datos requeridos
para calcular el IMC , e informar a la persona si es:
Bajo peso <16
Peso normal 18,5 a 24,9 
Preobesidad 25 a 29.9
Obesidad I 30 a 34.9
Obesidad II 35 a 39.9
Obesidad III >40
*/
var nombreDelSujeto;
var pesoDelSujeto;
var alturaDelSujeto;
var imcDelSujeto;
var mensaje;

nombreDelSujeto=prompt("Ingrese el nombre del sujeto");
pesoDelSujeto=prompt("Ingrese el peso del sujeto")
alturaDelSujeto=prompt("Ingrese la altura del sujeto");

pesoDelSujeto=parseFloat(pesoDelSujeto);
alturaDelSujeto=parseFloat(alturaDelSujeto);

imcDelSujeto=pesoDelSujeto/(alturaDelSujeto**2);

console.log(imcDelSujeto);

if(imcDelSujeto<18.5)
{
	mensaje="La persona tiene bajo peso";
}
else
{
	if(imcDelSujeto<25)
	{
		mensaje="La persona tiene peso normal";
	}
	else
	{
		if(imcDelSujeto<30)
		{
			mensaje="La persona tiene preobesidad";
		}
		else
		{
			if(imcDelSujeto<35)
			{
				mensaje="La persona tiene obesidad I";
			}
			else
			{
				if(imcDelSujeto<40)
				{
					mensaje="La persona tiene obesidad II";
				}
				else
				{
					mensaje="La persona tiene obesidad III";
				}
			}
		}
	}
}
alert(mensaje);