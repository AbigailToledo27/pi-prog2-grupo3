var express = require('express');
var router = express.Router();
const data = require("../db/productos");
const usuario = require('../db/productos').usuario;

const indexController = {
    index: function (req, res) {
        return res.render('index', { title: 'Home', productos: data.productos, logueado:true, usuario:usuario });
    }
}

module.exports = indexController;
