const valorTicket = 200

let descuentoEstudiante = 0.2
let descuentoTrainee = 0.5
let descuentoJunior = 0.15

const cantidad = document.querySelector('#cantidad');
const categoria = document.querySelector('#categoria');
const botonResumen = document.querySelector('#btnResumen');
const botonBorrar = document.querySelector('#btnBorrar');
const parrafo = document.querySelector('#parrafo');
const botonComprarTickets = document.querySelector('#comprarTickets')



function totalAPagar() {
    let totalValor = parseInt(cantidad.value) * valorTicket;

    if (categoria.value == 1) {
        totalValor = totalValor * descuentoEstudiante;
    }
    else if (categoria.value == 2) {
        totalValor = totalValor * descuentoTrainee;
    }
    else if (categoria.value == 3) {
        totalValor = totalValor * descuentoJunior;
    }

    parrafo.innerHTML = `Total a Pagar: $ ${totalValor}`;

}


function irAComprarTickets(){
    window.location.href = 'tickets.html'
}

botonResumen.addEventListener('click', totalAPagar);

botonComprarTickets.addEventListener('click', irAComprarTickets)


