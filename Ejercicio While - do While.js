/*1.UN RESTAURANTE QUIERE IMPLEMENTAR UN PROGRAMA DE DESCUENTOS PARA SUS CLIENTES, SI EL CLIENTE ES UN ESTUDIANTE, SE LE APLICA UN DESCUENTO DEL 10%. SI ES UN ADULTO MAYOR, SE LE APLICA UN DESCUENTO DEL 15%. SI ES UN CLIENTE FRECUENTE, SE LE APLICA UN DESCUENTO DEL 20%. ESCRIBE UN PROGRAMA QUE CALCULE EL DESCUENTO A APLICAR A CADA CLIENTE Y MUESTRE EL MONTO TOTAL A PAGAR */
const segmentacionCliente = prompt('Ingrese la segmentación del cliente')
const monto = Number(prompt('Ingrese el monto de la compra'))
let descuentoAAplicar = 0

switch(segmentacionCliente){
    case 'ESTUDIANTE':
            descuentoAAplicar = 0.10
        break
    case 'ADULTO MAYOR':
            descuentoAAplicar = 0.15
        break
    case 'CLIENTE FRECUENTE':
            descuentoAAplicar = 0.20
        break
    default:
            descuentoAAplicar = 0
        break
}

const montoFinal = monto * (1 - descuentoAAplicar)

alert(`El descuento a aplicar es de ${descuentoAAplicar * 100}% y el monto final es: ${montoFinal}`)



/*2.UN PARQUE DE DIVERSIONES QUIERE IMPLEMENTAR UN PROGRAMA PARA CALCULAR EL COSTO DE ENTRADA DE SUS VISITANTES. EL COSTO DEPENDE DE LA EDAD DEL VISITANTE, SI ES UN NIÑO MENOR DE 12 AÑOS, LA ENTRADA ES DE $10. SI ES UN ADULTO MAYOR DE 60 AÑOS, LA ENTRADA ES DE $15. SI ES UN ADULTO ENTRE 12 Y 60 AÑOS, LA ENTRADA ES DE $20. ESCRIBE UN PROGRAMA QUE CALCULE EL COSTO DE ENTRADA DE UN VISITANTE DADO SU EDAD*/

const VisitantePark = Number(prompt("¿Que edad tiene actualmente?"))
const VisitanteMenor = 10
const VisitanteAdultoMayor = 15
const VisitanteAdultoE = 20
if (VisitantePark <= 12) {
    alert("El precio de su boleto es de: $" + VisitanteMenor)
} else if (VisitantePark >= 12 && VisitantePark <=  60 ){
     alert("El precio de su boleto es de: $" + VisitanteAdultoE) } 
else if (VisitantePark > 60) {
    alert("El precio de su boleto es de: $" + VisitanteAdultoMayor)
}



/*3.UNA EMPRESA DE ENVÍOS QUIERE IMPLEMENTAR UN PROGRAMA PARA CALCULAR EL COSTO DE ENVÍO DE UN
PAQUETE. EL COSTO DEPENDE DEL DESTINO Y DEL PESO DEL PAQUETE. SI EL DESTINO ES DENTRO DEL PAÍS, EL
COSTO ES DE $10 POR CADA KILO. SI EL DESTINO ES FUERA DEL PAÍS, EL COSTO ES DE $20 POR CADA KILO. ESCRIBE
UN PROGRAMA QUE CALCULE EL COSTO DE ENVÍO DE UN PAQUETE DADO SU DESTINO Y PESO.
3.
*/

const detino = prompt("Hacia donde desea enviar el paquete?");
const pesotext = prompt("Cuantos kilos pesa el paquete?");
const peso = parseInt(pesotext);

const pesocalc = peso * 20;

let lugar = 0;

switch (detino) {
    case "guatemala":
    case "santa rosa":
    case "baja verapaz":
    case "alta verapaz":
    case "el progreso":
    case "izabal":
    case "chiquimula":
    case "zacapa":
    case "jalapa":
    case "jutiapa":
    case "sacatepequez":
    case "chimaltenango":
    case "escuintla":
    case "solola":
    case "Totonicapan":
    case "quetzaltenango":
    case "suchitepequez":
    case "setalhuleu":
    case "san marcos":
    case "huehuetenango":
    case "quiche":
    case "peten" :
    lugar = 10;
        break;
    default:
        lugar = 20;
}

const total = pesocalc + lugar;

alert(`El costo del peso es : ${pesocalc}, El precio del destino es : ${lugar}, y El costo total del envío es: ${total}`);



/*4.PARA UNA FUNCIONALIDAD DEL PROGRAMA QUE ESTÁ DESARROLLANDO SU EQUIPO ES NECESARIO DETERMINAR LA CANTIDAD DE DÍAS QUE TIENE UN MES A PARTIR DEL NOMBRE DEL MES*/
 
let nombreMes = prompt(`Ingrese el nombre del mes (minúsculas)`)
let cantidadDias = 0
switch (nombreMes) {
        case "enero":
            cantidadDias = 31
            break
        case "febrero":
            cantidadDias = 28
            break
        case "marzo":
            cantidadDias = 31
            break
        case "abril":
            cantidadDias = 30
            break
        case "mayo":
            cantidadDias = 31
            break
        case "junio":
            cantidadDias = 30
            break
         case "julio":
            cantidadDias = 31
            break
        case "agosto":
            cantidadDias = 31
            break
        case "septiembre":
            cantidadDias = 30
            break
        case "octubre":
            cantidadDias = 31
            break
        case "noviembre":
            cantidadDias = 30
            break
        case "diciembre":
            cantidadDias = 31
            break
    default:
        alert(`Selección no válida (escriba el nombre del mes en minúsculas)`)
}
if (cantidadDias != 0) {
    alert(` ${nombreMes} tiene ${cantidadDias} días`)
}



/*5.UN PROGRAMA QUE IDA AL USUARIO INGRESAR EL DÍA DE LA SEMANA (LUNES A DOMINGO) Y MUESTRE UN MENSAJE QUE DIGA SI ES UN DIA LABORABLE O DE FIN DE SEMANA*/

const diaSemana = prompt("Ingrese el dia de la semana con la primera letra mayuscula y sin tildes", "Lunes")

switch (diaSemana){
    case "Lunes":
    case "Martes":
    case "Miercoles":
    case "Jueves":
    case "Viernes":
         alert("Es un dia Laborable")
    break
    case "Sabado":
    case "Domingo":
    break
}



/*6.UN PROGRAMA QUE PIDA AL USUARIO INGRESAR UNA LETRA DEL ALFABETO Y DETERMINE SI ES UNA VOCAL O UNA CONSONANTE*/

const Signo = prompt("Ingrese la letra en minuscula")

switch (Signo){ 
    case "a": 
        alert("Es una vocal");
        break 

    case "e": 
        alert("Es una vocal");
        break 

    case "i":
        alert("Es una vocal");
        break 

    case "o": 
        alert("Es una vocal");
        break 

    case "u":
        alert("Es una vocal");
        break 

    default:
        alert("Es una consonante");

} 