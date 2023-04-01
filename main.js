alert("Ingrese el precio de los tres artículos para ver el descuento en cada uno y el total a pagar por su compra. Recuerde que el precio de cada articulo tiene un tope de $2000 y que los precios deben ser ingresados de mayor a menor ya que el descuento del 10% se hará sobre el artículo con mayor valor y el descuento del 30% sobre el de menor valor.")

let precio1;
let precio2;
let precio3;

console.log(precio1, precio2, precio3);
let precio1Input = Number(prompt("ingrese precio que se le hará un 10% de descuento"));
if (isNaN(precio1Input)) {
    alert("Ingrese un valor numerico");
} else {
    precio1 = precio1Input;
    let precio2Input = Number(prompt("ingrese precio que se le hará un 20% de descuento"));
    if (isNaN(precio2Input)) {
        alert("Ingrese un valor numerico");
    } else {
        precio2 = precio2Input;
        let precio3Input = Number(prompt("ingrese precio que se le hará un 30% de descuento"));
        if (isNaN(precio3Input)) {
            alert("Ingrese un valor numerico")
        } else {
            precio3 = precio3Input
        }
    }
}


let preciosValidos = true;

const preciosTopes = [precio1, precio2, precio3];
for (let i = 0; i < preciosTopes.length; i++) {
    const element = preciosTopes[i];
    console.log(element);
    if (element > 1500) {
        alert("El precio $" + element + " supera el tope de $1500");
        preciosValidos = false;
        break;
    }
}

console.log(preciosValidos);

let descuento1 = 0.1 * precio1;
let descuento2 = 0.2 * precio2;
let descuento3 = 0.3 * precio3;
let descuentoTotal = descuento1 + descuento2 + descuento3;

if (preciosValidos) {
    let precioDescuento = Math.round(0.9 * precio1 + 0.8 * precio2 + 0.7 * precio3);
    console.log(precioDescuento);

    if ((precio1 >= precio2) && (precio2 >= precio3)) {
        alert("el descuento en el primer artículo es: " + descuento1 +
            "; el descuento en el artículo 2 es: " + descuento2 +
            "; el descuento en el artículo 3 es: " + descuento3);

        alert("El total a pagar será: " + precioDescuento);
    } else {
        alert("uno o más precios ingresados no son correctos. Intente nuevamente");
    }
} else {
    alert("Recargue la pagina para ingresar los precios nuevamente")
}