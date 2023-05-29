function convertir(cantidad, costoEntrada){
    let gene = 200;
    let estu = gene * 0.2;
    let trai = gene * 0.5;
    let juni = gene * 0.85;
    let resultadoCosto = 0;

   if (costoEntrada == "gene") {
        return resultadoCosto = cantidad * gene;
    } else if (costoEntrada == "estu") {
        return resultadoCosto = cantidad * estu;
    } else if (costoEntrada == "trai"){
        return resultadoCosto = cantidad * trai;
    } else {
        return resultadoCosto = cantidad * juni;
    }
 }

let formulario = document.getElementById("formTotal")
let totalPagar = document.getElementById("totalPagar")
let cant = document.getElementById("cantidad")
let precio = document.getElementById("categorias")

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()

    totalPagar.textContent = "Total a pagar $ " + convertir(cant.value, precio.value)
}) 

formulario.addEventListener("reset",() => {
    totalPagar.textContent="Total a pagar $ "
})