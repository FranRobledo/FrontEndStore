// /* Conexión a base de datos */
// const mongoose = require('mongoose');

// const mongouser = '';
// const mongopassword = '';
// const uri = '';
// mongoose.connect(uri)
//     .then(() => console.log('Base de datos conectada'))
//     .catch(e => console.log('Error de conexión', e))
// ;


/* Upload images //START// */
const express  = require('express');
const path = require ('path');
const multer = require('multer');
const uuid = require('uuid');

//Initializations 
const app = express();

//Settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Multer middleware
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'img/public/upload'),
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

app.use(multer({
    storage,
    dest: path.join(__dirname, 'img/public/upload'),
    limits: {fileSize: 1000000},
    fileFilter: (req, file, cb) => {
        const filetypes = /jpg|jpeg|png|jfif/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));
        if (mimetype && extname){
            return cb(null, true);
        }
        cb("Error: Archivo debe ser una imagen valida");
    }
}).single('image'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use(require('./routes/index.routes.js'));

//Start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})

/* Upload image //END// */

// /* Agregado de HTML*/
// const agrUpload = document.getElementById('upload__image');

// agrUpload.innerHTML = `

//     <form action="/upload" method="POST" enctype="multipart/form-data">
//         <input type="file" name="image">
//         <button type="submit">
//             Upload
//         </button>
//     </form>

// `;
