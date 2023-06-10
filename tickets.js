const valorTicket = 200

let descuentoEstudiante = 0.2
let descuentoTrainee = 0.5
let descuentoJunior = 0.15

const cantidad = document.querySelector('#cantidad');
const categoria = document.querySelector('#categoria');
const botonResumen = document.querySelector('#btnResumen');
const botonBorrar = document.querySelector('#btnBorrar');
const parrafo = document.querySelector('#parrafo');



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

console.log(totalAPagar)

botonResumen.addEventListener('click', totalAPagar);



// const cantidad = document.querySelector("#cantidad");
// const categoria = document.querySelector("#categoria").value;
// const total = document.querySelector("#totalAPagar");
// const boton = document.querySelector("#btnResumen");


// var precio;
// if (categoria === "estudiante") {
//     precio = 40;
// } else if (categoria === "trainee") {
//     precio = 100;
// } else if (categoria === "junior") {
//     precio = 170


// let totalAPagar = precio * cantidad;
// return totalAPagar;

// total.innerHTML = (totalAPagar)

// }


// function calculo(){
//     evento.preventDefault()
//     total.innerHTML = (totalAPagar)
// }


// boton.addEventListener("click", calculo)











// function limpiarFormulario() {
//   document.getElementById("miForm").reset();
//   return;
// }

// btnBorrar.addEventListener("click", limpiarFormulario)





// // function validarFormulario(evento) {
// btnResumen.addEventListener('click' , function(event){
//     evento.preventDefault();
//     var nombre = document.getElementById('nombre').value;
//     if (nombre.length == 0) {
//         alert('No has escrito nada en el Nombre');
//         return;
//     }
//     var apellido = document.getElementById('apellido').value;
//     if (apellido.length == 0) {
//         alert('No has escrito nada en el Apellido');
//         return;
//     }
//     var femail = document.getElementById('email').value;
//     if (femail.length == 0) {
//         alert('No has escrito nada en el email');
//         return;
//     }
//     var cantidad = document.getElementById('cantidad').value;
//     if (isNaN(cantidad)) {
//         alert('No has escrito nada en cantidad.');
//         return;
//     }
//     const formulario = document.getElementById('formulario');
//     const opcion1 = document.getElementById('opcion1');
//     const opcion2 = document.getElementById('opcion2');
//     const opcion3 = document.getElementById('opcion3');
//     const opcion4 = document.getElementById('opcion4');
//     if (
//         !opcion1.checked &&
//         !opcion2.checked &&
//         !opcion3.checked &&
//         !opcion4.checked
//     ) {
//         alert('No has seleccionado ningun destino');
//         return;
//     }
// });


// btnBorrar.addEventListener('click' , function(event){
//     event.preventDefault();
//     var indice = 0;
//     indice = totalAPagar.textContent.indexOf('$');
//     totalAPagar.textContent = totalAPagar.textContent.substring(0, indice+1);
//     formulario.reset();
//     return;
// });


// const button = document.getElementById("nombre");
// function action() {
//     formulario.reset();
// };
// btnBorrar.addEventListener("click", action);