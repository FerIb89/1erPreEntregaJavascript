let nombreUsuario;
let cantidadCajones = 0;
let totalCajones = 0;
let porcentaje = 25;
let porcentajeTarjeta = 0;
let precioCuota;
let precioCajon = 11500;
let precioCajonDescuento = 0;
let precioFinal = 0;
let monotributista;
let continuarCompra = "si";

function saludar ()
{
    alert ("¡¡¡ "+ nombreUsuario +" !!!" + " Muchas gracias por su compra.\nVuelva pronto, lo esperamos");
}

nombreUsuario = prompt("Bienvenidos, ingrese su nombre por favor");
monotributista = prompt("Es usted Monotributista").toLowerCase();

while (monotributista != "si" && monotributista != "no")
{
monotributista = prompt("Ingrese SI o NO por favor").toLowerCase();
}

if (monotributista == "si") 
{
    alert("Usted va a obtener un descuento del %25");
    porcentaje = (precioCajon * porcentaje) / 100;
    precioCajonDescuento = (precioCajon - porcentaje);
    precioCajon = precioCajonDescuento;
    alert("El precio del cajon es de: $" + precioCajon);
}
else 
{
    alert("El precio del cajon es de: $ " + precioCajon);
}

while (continuarCompra == "si") 
{
    cantidadCajones = parseInt(prompt("¿Cuantos cajones deseea comprar?"));

        while (isNaN (cantidadCajones))
           {
             cantidadCajones = prompt("Ingrese un número por favor");
           }   
    
    totalCajones = totalCajones + cantidadCajones;
    precioFinal = precioCajon * totalCajones;

    continuarCompra = prompt("¿Desea seguir comprando? SI / NO").toLowerCase(); 
}

let tarjeta = prompt("El monto total es de: $ " + precioFinal + ". ¿Desea pagar con tarjeta? SI / NO" ).toLowerCase();

while (tarjeta != "si" && tarjeta != "no")
{
tarjeta = prompt("Ingrese SI o NO por favor").toLowerCase();
}


if (tarjeta == "si") 
{
    let cuotas = prompt("¿Desea hacerlo en 1, 3, 6 o 12 cuotas?\n\n1 cuota: Sin interes\n3 cuotas: % 15 de interes\n6 cuotas % 45 de interes\n12 cuotas % 75 de interes");

        while (cuotas != "1" && cuotas != "3" && cuotas != "6" && cuotas != "12")
            {
                cuotas = prompt("Seleccione 1, 3, 6 o 12 cuotas");
            }

    switch (cuotas) 
    {
        case "1":
            alert(" El precio final es: $ " + precioFinal);
            break;

        case "3":

            porcentajeTarjeta = (precioFinal * 15) / 100;
            precioFinal = precioFinal + porcentajeTarjeta;
            precioCuota = precioFinal / 3;
            alert(" El precio final es: $ " + precioFinal + ("\nen 3 cuotas de: $") + precioCuota);
            break;

        case "6":
            porcentajeTarjeta = (precioFinal * 45) / 100;
            precioFinal = precioFinal + porcentajeTarjeta;
            precioCuota = precioFinal / 6;
            alert(" El precio final es: $ " + precioFinal + ("\nen 6 cuotas de: $") + precioCuota);
            break;

        case "12":
            porcentajeTarjeta = (precioFinal * 75) / 100;
            precioCuota = precioFinal / 12;
            precioFinal = precioFinal + porcentajeTarjeta;
            alert(" El precio final es: $" + precioFinal + ("\nen 12 cuotas de: $") + precioCuota);
            break;
    }

}

saludar ();



