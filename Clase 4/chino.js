/*
ALUMNO GABRIEL OCAMPO
DIVISION 1°G
REPASO SABADO 27/02 EJERCICIO 2*/
/*2- "super chino" Se pide el ingreso de mercadería de un supermercado , hasta que el usuario quiera,se pide : tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)

informar SOLO SI HAY
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del mas caro de todos los productos
c) el NOMBRE del mas barato de los elaborados
d)el tipo de mercadería que mas aparece LISTO
e)el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado
*/
function comenzar()
{
	var tipoProducto=[]; // (limpieza , comestible , otros)
	var nombreProducto=[];
	var importeProducto=[]; // (no mayor a 1000 pesos)
	var procedenciaProducto=[]; // (importado, nacional, elaborado)
	var pesoProducto=[]; // (no mayor a 30 kilos)
	var i=0; // Cantidad de productos ingresados (+1)
	var continuar;
	var contadorTipo=[0,0,0,-1,-1]; // array que almacena las cantidades de limpieza, comestible, otros, y del que mas aparece y cual es el que mas aparece.
	var stringTipoMasRepeticiones="d) el TIPO de mercadería que mas aparece: "
	var pesoProductoMasPesadoComestibles=0;
	var nombreProductoMasPesadoComestibles="";
	var importeProductoMasCaro=0;
	var nombreProductoMasCaro="";
	var importeProductoMasBaratoElaborados=1001; // el valor de producto máximo es 1000, sumo 1 para referencia.
	var nombreProductoMasBaratoElaborados="";
	var contadorElaborados=0;
	var porcentajeCantidadElaborados;
	var acumuladorPesosLimpieza=0;
	var acumuladorPesosComestible=0;
	var acumuladorPesosOtros=0;
	var acumuladorPesosTotal=0;
	var promedioPesoLimpieza;
	var promedioPesoComestible;
	var promedioPesoOtros;

	do
	{
		tipoProducto[i]=prompt("Ingrese el tipo de producto: \"limpieza\", \"comestible\", \"otros\"");
		while(tipoProducto[i]!="limpieza" && tipoProducto[i]!="comestible" && tipoProducto[i]!="otros")
		{
			tipoProducto[i]=prompt("Tipo no válido. Ingrese el tipo de producto: \"limpieza\", \"comestible\", \"otros\"");
		}
		nombreProducto[i]=prompt("Ingrese el nombre del producto");
		while(nombreProducto[i]=="")
		{
			nombreProducto[i]=prompt("Debe ingresar un nombre. Ingrese el nombre del producto");
		}
		importeProducto[i]=parseFloat(prompt("Ingrese el importe del producto (no mayor a $1000)"));
		while(isNaN(importeProducto[i]) || importeProducto[i]>1000){
			importeProducto[i]=parseFloat(prompt("Importe no válido. Ingrese el importe del producto (no mayor a $1000)"));
		}
		procedenciaProducto[i]=prompt("Ingrese la procedencia del producto: \"importado\", \"nacional\", \"elaborado\"");
		while(procedenciaProducto[i]!="importado" && procedenciaProducto[i]!="nacional" && procedenciaProducto[i]!="elaborado")
		{
			procedenciaProducto[i]=prompt("Procedencia no válida. Ingrese la procedencia del producto: \"importado\", \"nacional\", \"elaborado\"");
		}
		pesoProducto[i]=parseFloat(prompt("Ingrese el peso del producto (no mayor a 30 kilos)"));
		while(isNaN(pesoProducto[i]) || pesoProducto[i]>30)
		{
				pesoProducto[i]=parseFloat(prompt("Peso no válido. Ingrese el peso del producto (no mayor a 30 kilos)"));
		}
		continuar=confirm("¿Desea ingresar otro producto?");
		i++;
	}while(continuar);
	for(j=0;j<i;j++)
	{
		switch(tipoProducto[j]) // switch para filtar cada producto por tipo, y algunas condicionales mas
		{
			case "limpieza":
				contadorTipo[0]++;
				acumuladorPesosLimpieza+=pesoProducto[j];
				break;
			case "comestible":
				contadorTipo[1]++;
				acumuladorPesosComestible+=pesoProducto[j];
				if(pesoProducto[j]>pesoProductoMasPesadoComestibles)  // if para encontrar el producto mas pesado
				{
					pesoProductoMasPesadoComestibles=pesoProducto[j]
					nombreProductoMasPesadoComestibles=nombreProducto[j];
				}
				break;
			case "otros":
				contadorTipo[2]++;
				acumuladorPesosOtros+=pesoProducto[j];
				break;
		}
		if(importeProducto[j]>importeProductoMasCaro) // if para encontrar el producto más caro
		{
			importeProductoMasCaro=importeProducto[j];
			nombreProductoMasCaro=nombreProducto[j];
		}
		if(procedenciaProducto[j]=="elaborado") // if para trabajaron con los elaborados
		{
			if(importeProducto[j]<importeProductoMasBaratoElaborados && importeProducto[j]!=0)// if para encontrar el elaborado más barato
			{
				importeProductoMasBaratoElaborados=importeProducto[j];
				nombreProductoMasBaratoElaborados=nombreProducto[j];
			}
			contadorElaborados++;
		}
		acumuladorPesosTotal+=pesoProducto[j];
	}
	console.log("peso total: "+acumuladorPesosTotal)
	for(var k=0;k<3;k++)
	{
		if(contadorTipo[k]!=0 && contadorTipo[k]>contadorTipo[3])
		{
			contadorTipo[3]=contadorTipo[k];
			contadorTipo[4]=k;
			console.log(contadorTipo[3]);
		}
	}
	switch(contadorTipo[4])
	{
		case 0:
			stringTipoMasRepeticiones+="limpieza";
			break;
		case 1:
			stringTipoMasRepeticiones+="comestible";
			break;
		case 2:
			stringTipoMasRepeticiones+="otros";
			break;
		default:
			stringTipoMasRepeticiones="";
			break;
	}
	// MUESTRA DE RESULTADOS
	console.log("RESULTADOS:");
	if(nombreProductoMasPesadoComestibles!="")
	{
		console.log("a) el NOMBRE del mas pesado de los comestibles: "+nombreProductoMasPesadoComestibles);
	}
	if(nombreProductoMasCaro!="")
	{
		console.log("b) el NOMBRE del mas caro de todos los productos: "+nombreProductoMasCaro);
	}
	if(nombreProductoMasBaratoElaborados!="")
	{
		console.log("c) el NOMBRE del mas barato de los elaborados: "+nombreProductoMasBaratoElaborados);
	}
	if(stringTipoMasRepeticiones!=""){
		console.log(stringTipoMasRepeticiones);
	}
	if(contadorElaborados!=0)
	{
		porcentajeCantidadElaborados=contadorElaborados*100/(i);
		console.log("e) el porcentaje de productos elaborados por sobre el total: "+porcentajeCantidadElaborados.toFixed(2)+"%");
	}
	if(i!=0)
	{
		console.log("f) el promedio de pesos por cada tipo ingresado: ");
		if(acumuladorPesosLimpieza!=0)
		{
			promedioPesoLimpieza=acumuladorPesosLimpieza*100/acumuladorPesosTotal;
			console.log("	Limpieza: "+promedioPesoLimpieza.toFixed(2)+"%");
		}
		if(acumuladorPesosComestible!=0)
		{
			promedioPesoComestible=acumuladorPesosComestible*100/acumuladorPesosTotal;
			console.log("	Comestible: "+promedioPesoComestible.toFixed(2)+"%");
		}
		if(acumuladorPesosOtros!=0)
		{
			promedioPesoOtros=acumuladorPesosOtros*100/acumuladorPesosTotal;
			console.log("	Otros: "+promedioPesoOtros.toFixed(2)+"%");
		}
	}
}