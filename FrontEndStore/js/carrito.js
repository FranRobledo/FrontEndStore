const shopContent = document.getElementById('shopContent');
const vercarrito = document.getElementById('verCarrito')
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
{/* <button id="comprar" class="producto__boton">Comprar</button> */}
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
    })
})

