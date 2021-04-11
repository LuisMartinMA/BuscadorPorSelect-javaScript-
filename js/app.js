//variables
const resultado = document.querySelector('#resultado');

//eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
});

//funciones

function mostrarAutos() {
    
    //recorrer el arreglo de autos
    autos.forEach(auto => {
        //creamos el destructuring
        const { marca, modelo, year, puertas, transmision,precio,color } = auto;
        //creamos parrafo
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
          ${marca} ${modelo} - ${year} - ${puertas} Puertas -Transmision: ${transmision}- Precio: ${precio} - Color: ${color}
        `;
        //insertar en el HTML
        resultado.appendChild(autoHTML);
    });
}