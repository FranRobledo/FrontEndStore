const shopContent = document.getElementById('shopContent')

const productos = [ 
    {
        id:1,
        nombre:"VueJS",
        precio:25,
        img:"./img/1.png",
    },
    {
        id:2,
        nombre:"AngularJS",
        precio:25,
        img:"./img/2.png",
    },
    {
        id:3,
        nombre:"ReactJS",
        precio:25,
        img:"./img/3.png",
    },
    {
        id:4,
        nombre:"Redux",
        precio:25,
        img:"./img/4.png",
    },
    {
        id:5,
        nombre:"NodeJS",
        precio:25,
        img:"./img/5.png",
    },
    {
        id:6,
        nombre:"SASS",
        precio:25,
        img:"./img/6.png",
    },
    {
        id:7,
        nombre:"HTML5",
        precio:25,
        img:"./img/7.png",
    },
    {
        id:8,
        nombre:"GitHub",
        precio:25,
        img:"./img/8.png",
    },
    {
        id:9,
        nombre:"BulmaCSS",
        precio:25,
        img:"./img/9.png",
    },
    {
        id:10,
        nombre:"TypeScript",
        precio:25,
        img:"./img/10.png",
    },
    {
        id:11,
        nombre:"Drupal",
        precio:25,
        img:"./img/11.png",
    },
    {
        id:12,
        nombre:"JavaScript",
        precio:25,
        img:"./img/12.png",
    },
    {
        id:13,
        nombre:"GraphQL",
        precio:25,
        img:"./img/13.png",
    },
    {
        id:14,
        nombre:"WordPress",
        precio:25,
        img:"./img/14.png",
    }];

let carrito = [];

productos.forEach((product) => {
    let content = document.createElement('div');
    content.innerHTML = `
        <a href="producto.html">
            <img src="${product.img}" class="producto__imagen">
            <div class="producto__informacion">
                <p class="producto__nombre">${product.nombre}</p>
                <p class="producto__precio">$${product.precio}</p>
            </div>
        </a>
    `;

    shopContent.append(content);

    let comprar = document.createElement('button');
    comprar.innerText = 'comprar';

    content.append(comprar);
})

