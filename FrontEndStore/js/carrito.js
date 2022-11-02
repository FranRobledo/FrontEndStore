const shopContent = document.getElementById('shopContent');
const verCarrito = document.getElementById('verCarrito')
const comprar = document.getElementById('comprar');
const modalContainer = document.getElementById('modalContainer');

let carrito = [];

productos.forEach((product) => {
    let content = document.createElement('div');
    content.className = 'producto'
    content.innerHTML = `
        <a href="producto.html">
            <div class="shadow">
                <img src="${product.img}" class="producto__imagen">
                <div class="producto__informacion">
                    <p class="producto__nombre">${product.nombre}</p>
                    <p class="producto__precio">$${product.precio}</p>
                </div>
            </div>
        </a>
    `;
    // <button id="comprar" class="producto__boton">Comprar</button>
    shopContent.append(content);

    let comprar = document.createElement('button');
    comprar.innerText = 'Comprar';
    comprar.className = 'producto__boton'

    content.append(comprar);

    comprar.addEventListener("click", () => {
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
        console.log(carrito)
    });
});

verCarrito.addEventListener('click', () => {
    modalContainer.innerHTML = '';
    modalContainer.style.display = 'flex';

    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito.</h1> 
    `;
    modalContainer.append(modalHeader);
    
    const modalButton = document.createElement('h1');
    modalButton.innerText = 'x';
    modalButton.className = 'modal-header-button';

    modalButton.addEventListener('click', () => {
        modalContainer.style.display = 'none';
    })

    modalHeader.append(modalButton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement('div');
        carritoContent.className = 'modal-content';
        carritoContent.innerHTML = `
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p>$${product.precio}</p>
        `;
        modalContainer.appendChild(carritoContent)
    });

    const total = carrito.reduce((acumulador, price) => acumulador + price.precio, 0);
    const totalBuying = document.createElement('div');
    totalBuying.className = 'total-content';
    totalBuying.innerHTML = `
        <h2> Total a pagar $${total}</h2>
    `;
    modalContainer.append(totalBuying);
});

