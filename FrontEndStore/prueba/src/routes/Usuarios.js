const express = require('express');
const routerDB = express.Router();

const User = require('../models/user')


routerDB.get('/registro', async (req, res) => {

    try {
        const arrayUsuariosDB = await User.find();
        console.log(arrayUsuariosDB);

        res.render("registro", {
            arrayUsuarios: arrayUsuariosDB
        })

    } catch (e) {
        console.log(e);
    }
})

module.exports = routerDB;