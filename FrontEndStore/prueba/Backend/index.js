//Requerir los módulos necesarios
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const multer = require('multer');
const uuid = require('uuid');
const cors = require('cors')
//Configuración de la conexión a la base de datos
const mongouser = 'fran';
const mongopassword = 'caca';
const uri = `mongodb://${mongouser}:${mongopassword}@localhost:27017/?authSource=admin`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Base de datos conectada'))
  .catch(e => console.log('Error de conexión', e));

//Inicialización de la aplicación Express 
const app = express();

//Configuración de vistas y motor de plantillas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Configuración del almacenamiento de archivos con Multer
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public', 'uploads'),
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const uniqueFileName = uuid.v4() + fileExt;
    cb(null, uniqueFileName);
  }
});

//Configuración de Multer como middleware
app.use(multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: (req, file, cb) => {
    const allowedFileTypes = /jpeg|jpg|png|gif/;
    const isFileTypeAllowed = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const isMimeTypeAllowed = allowedFileTypes.test(file.mimetype);
    if (isFileTypeAllowed && isMimeTypeAllowed) {
      cb(null, true);
    } else {
      cb(new Error('Error: El archivo debe ser una imagen válida.'));
    }
  }
}).single('image'));

//Rutas y middleware
const indexRoutes = require('./routes/index.routes.js');
const userRoutes = require('./routes/usuarios');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoutes);
app.use('/usuarios', userRoutes);

app.use(cors({origin: 'http://127.0.0.1:5500/'}))

//Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor en el puerto ${port}`);
});