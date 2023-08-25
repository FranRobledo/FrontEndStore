# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.4] - 2023-25-10     

### Added

- Vistas para las rutas para registrarse con ejs

## [0.1.4] - 2023-24-10     

### Added

- Instalacion del modulo dotenv para variables de entorno
- Creacion de la carpeta de configuraciones y configuracion para la variables de entorno
- Configuracion para el controlador de los usuarios

## [0.1.3] - 2023-08-10 

### Added

- Se añadio y se termino el changelog.md para el backend

## [0.1.3] - 2023-08-04     

### Added

- Se añadio y se termino el changelog.md para el frontend

## [0.1.2] - 2023-06-15     

### Fixed

- El fetch no funciono, se intento corregir pero sigue sin funcionar

## [0.1.2] - 2023-06-30     

### Added

- Implementacion de fetch para mostrar la imagen como foto de perfil

## [0.1.1] - 2023-06-15     

### Deprecated

- El modelo y la ruta de registro quedo en desuso debido a que no estoy pudiendo subir los datos al mongodb en el docker

## [0.1.0] - 2023-05-18

### Fixed

- Cambie el codigo de conexion a la base de datos para poderla conectar con el mongodb en el docker

### Added

- Cree un docker local y le meti la imagen de mongodb
- Creacion y configuracion del archivo docker-compose.yml

## [0.0.9] - 2023-05-18

### Added

- Creacion del archivo gitignore para la carpeta de imagenes y node_modules

## [0.0.8] - 2023-05-12

### Fixed

- Instalacion e implementacion de UUID para cambiar el nombre de las imagenes a id unicos

## [0.0.7] - 2023-05-11

### Added

- Configuracion de la conexion a la base de datos mongobd atlas

## [0.0.6] - 2023-05-05

### Fixed

- La ruta de /registro
- Para optimizar el almacenamiento cambie los archivos permitidos para subir de forma que solo deje subir imagenes

### Added

- Pruebas con postman y thunder client para las rutas
- Creacion del modelo de registro de usuario en el archivo Usuario.js

## [0.0.5] - 2023-04-21

### Added

- Cree la ruta para cargar imagenes (ruta /upload)
- Cree las carpetas public y uploads para guardar las imagenes
- Configuracion de vistas y motor de plantillas
- Cree el archivo index.ejs para poder subir imagenes con estilo css

## [0.0.4] - 2023-04-21

### Added

- Configuracion de multer como middleware
- Configuracion del almacenamiento de archivos con multer

## [0.0.2] - 2023-04-20

### Added

- Inicializacion del servidor en el puerto 3000 
- Creacion de la primer ruta de prueba utilizando postman (ruta: /registro)
- Configuracion de rutas inicales y middlewares

## [0.0.1] - 2023-04-13

### Added

- Se inicio el projecto de backend con nodejs
- $ npm innit -y
- Instalacion de modulos(cors - ejs - express - mongoose - multer - sharp)
- Cree los archivos y carpetas