
const datos = {

}; 

const nombre = document.querySelector('#Nombre');
const telefono = document.querySelector('#Telefono');
const gmail = document.querySelector('#Gmail');
const mensaje = document.querySelector('#Mensaje');

nombre.addEventListener('input', leerTexto);
telefono.addEventListener('input', leerTexto);
gmail.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
    console.log(datos)
};
