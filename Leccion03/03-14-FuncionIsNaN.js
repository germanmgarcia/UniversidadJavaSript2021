let miNumero = "17";

let edad = Number(miNumero);
console.log(edad); // Not a Number

if (isNaN(edad)) {
  console.log("No es un número");
} else {
  let resultado = edad >= 18 ? "Puede votar" : "Muy joven para votar";
  console.log(resultado);
}
