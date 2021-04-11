"use strict";

//variables
var resultado = document.querySelector('#resultado'); //eventos

document.addEventListener('DOMContentLoaded', function () {
  mostrarAutos();
}); //funciones

function mostrarAutos() {
  //recorrer el arreglo de autos
  autos.forEach(function (auto) {
    //creamos el destructuring
    var marca = auto.marca,
        modelo = auto.modelo,
        year = auto.year,
        puertas = auto.puertas,
        transmision = auto.transmision,
        precio = auto.precio,
        color = auto.color; //creamos parrafo

    var autoHTML = document.createElement('p');
    autoHTML.textContent = "\n          ".concat(marca, " ").concat(modelo, " - ").concat(year, " - ").concat(puertas, " Puertas -Transmision: ").concat(transmision, "- Precio: ").concat(precio, " - Color: ").concat(color, "\n        "); //insertar en el HTML

    resultado.appendChild(autoHTML);
  });
}