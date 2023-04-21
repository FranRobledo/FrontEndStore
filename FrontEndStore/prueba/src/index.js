

/* Upload images //START// */
const express  = require('express');
const ejs = require ("ejs")
const path = require ('path');

//INitializations 
const app = express();

//Settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Routes
app.get('/', (req, res) => {
    res.render('index');
});

//Start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})

/* Upload image //END// */