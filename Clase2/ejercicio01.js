/*
----------------------------
ALUMNO: GABRIEL OCAMPO 
DIVISION: 1°G
EJERCICIO 01 - SABADO 13/01
----------------------------
1-con if
pedir a una persoan que fue de vaciones , la distancia que viajo
y el tiempo que tardo, para calcular la velocidad
e informar:
60 km/hr = muy lento
hata 80km/h= lento
hasta 100= buen ritmo
hasta 120= ahi de la ley
mas = eso no se hace
*/

var distanciaDelViaje;
var tiempoDelViajeHoras;
var tiempoDelViajeMinutos;
var tiempoDelViajeTotal;
var velocidadDelViaje;
var mensaje;

distanciaDelViaje=prompt("Ingrese distancia del viaje realizado en KILOMETROS");
tiempoDelViajeHoras=prompt("Ingrese el tiempo que tardó en realizar el viaje, valor HORAS", "2");
tiempoDelViajeMinutos=prompt("Ingrese el tiempo que tardó en realizar el viaje, valor MINUTOS","30");

distanciaDelViaje=parseInt(distanciaDelViaje);
tiempoDelViajeHoras=parseInt(tiempoDelViajeHoras);
tiempoDelViajeMinutos=parseInt(tiempoDelViajeMinutos);

tiempoDelViajeTotal=tiempoDelViajeHoras+(tiempoDelViajeMinutos/60);
velocidadDelViaje=distanciaDelViaje/tiempoDelViajeTotal;

if(velocidadDelViaje<61){
	mensaje="muy lento";
}
else if(velocidadDelViaje<81){
	mensaje="lento";
}
else if(velocidadDelViaje<101){
	mensaje="buen ritmo";
}
else if(velocidadDelViaje<121){
	mensaje="ahi de la ley";
}
else{
	mensaje="eso no se hace";
}

alert(mensaje);