var express = require('express');
var router = express.Router();
const data = require("../db/productos");

const indexController = {
    index: function (req, res) {
        return res.render('index', { title: 'Home', productos: data.productos });
    }
}

module.exports = indexController;
