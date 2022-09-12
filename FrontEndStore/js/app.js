
const datos = {
    nombre: '',
    teledono: '',
    email: '',
    mensaje: '',
}; 

const nombre = document.querySelector('#Nombre');
const telefono = document.querySelector('#Telefono');
const gmail = document.querySelector('#Gmail');
const mensaje = document.querySelector('#Mensaje');
const formulario = document.querySelector('SubmitBott')

nombre.addEventListener('input', leerTexto);
telefono.addEventListener('input', leerTexto);
gmail.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//Evento Submit

formulario.addEventListener('submit', function(event){
    event.preventDefault();


    console.log('Enviando Formulario');
});


function leerTexto(e) {
    datos[e.target.id] = e.target.value;
    console.log(datos)
};
