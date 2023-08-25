const express = require('express');
const path = require('path');

const userCtrl = {};

userCtrl.renderSignUpForm = (req, res) => {
    res.render('registro');
};

userCtrl.signUp = (req, res) => {
    res.send('signup');
    console.log("ñoki");
};

userCtrl.renderSigninForm = (req, res) => {
    res.render('prueba/src/login')
};

userCtrl.signin = (req, res) => {
    res.send('signin');
};

userCtrl.logOut = (req, res) => {
    res.send('logout');
};

module.exports = userCtrl;