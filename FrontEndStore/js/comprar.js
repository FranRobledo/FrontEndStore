const shopContent = document.getElementById('shopContent');
const comprar = document.getElementById('comprar');

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
    shopContent.append(content);

    let comprar = document.createElement('button');
    comprar.innerText = 'Añadir al Carrito';
    comprar.className = 'producto__boton'

    content.append(comprar);

    comprar.addEventListener("click", () => {
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
        
        if (repeat) {
            carrito.map((prod) => {
                if (prod.id === product.id) {
                    prod.cantidad++;
                }
            });
        } else {
            carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
            });
            console.log(carrito);
            // carritoCounter()
        }
    });
});

