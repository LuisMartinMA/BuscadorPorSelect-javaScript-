//variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 10;//eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();

    //llena las opciones de años:
    llenarSelect();
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

//genera los años del select 
function llenarSelect() {
    for (let i = max; i >=min; i--) {
        console.log(i);
        
    }
}