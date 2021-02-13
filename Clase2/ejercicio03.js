/*
----------------------------
ALUMNO: GABRIEL OCAMPO 
DIVISION: 1°G
EJERCICIO 01 - SABADO 13/01
----------------------------
3-con if
una agencia de viajes debe sacar las tarifas de los viajes
, se cobra $15.000 por cada estadia como base, se pide el ingreso
de una estacion del año y localidad para vacacionar para poder calcular el precio final

	en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene
 un descuento del 10% Mar del plata tiene un descuento del 20%

	en Verano: bariloche tiene un descuento del 20% cataratas 
y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

	en Otoño y Primavera: bariloche tiene un aumento del 10% 
	cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y
	 Cordoba tiene el precio sin descuento
*/

var tarifaBase;
var estacionDelAnio;
var localidadDestino;
var porcentajeVariable;
var tarifaFinal;

tarifaBase=15000;
estacionDelAnio=prompt("Ingrese la estacion del año: (Verano, Invierno, Otoño, Primavera)");
localidadDestino=prompt("Ingrese la localidad de destino: (Bariloche, Cordoba, Mar del plata, Cataratas");

if(estacionDelAnio=="Invierno")
{
	if(localidadDestino=="Bariloche")
	{
		porcentajeVariable=20;
	}
	else
	{
		if(localidadDestino=="Cataratas" || localidadDestino=="Cordoba")
		{
			porcentajeVariable=-10;
		}
		else
		{
			porcentajeVariable=-20;
		}
	}
}
else
{
	if(estacionDelAnio=="Verano")
	{
		if(localidadDestino=="Bariloche")
		{
			porcentajeVariable=-20;
		}
		else
		{
			if(localidadDestino=="Cataratas" || localidadDestino=="Cordoba")
			{
				porcentajeVariable=10;
			}
			else
			{
				porcentajeVariable=20;
			}
		}
	}
	else
	{
		if(localidadDestino=="Bariloche" || localidadDestino=="Cataratas" || localidadDestino=="Mar del plata")
		{
			porcentajeVariable=10;
		}
		else
		{
			porcentajeVariable=0;
		}
	}
}

tarifaFinal=tarifaBase+(tarifaBase*porcentajeVariable/100);

alert("La tarifa final para "+localidadDestino+" en "+estacionDelAnio+" es de "+tarifaFinal);