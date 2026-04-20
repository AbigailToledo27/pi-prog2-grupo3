var express = require('express');
var router = express.Router();
const data = require('../db/productos');
const usuario = require('../db/productos').usuario;

const productController = {
    index: function (req, res) {
        return res.render('index', { title: 'Home', logueado: true, usuario:usuario });
    },
    detail: function (req, res) {
        const productId = req.params.id;
        for (let i = 0; i < data.productos.length; i++) {
            if (data.productos[i].id == productId) {
                return res.render('product', { title: `Detalle del producto ${data.productos[i].name}`, product: data.productos[i],logueado: true, usuario:usuario });
            }
        }
        return res.render('product', { title: `Detalle del producto ${productId}`, logueado:true, usuario:usuario });
    },
    edit: function (req, res) {
        const productId = req.params.id;
        for (let i = 0; i < data.productos.length; i++) {
            if (data.productos[i].id == productId) {
                return res.render('product-edit', { title: `Editar producto ${data.productos[i].name}`, product: data.productos[i], usuario:usuario, logueado:true });
            }
        }
        return res.render('product-edit', { title: `Editar producto ${productId}`, logueado: true, usuario:usuario });
    },
    add: function (req, res) {
        return res.render('product-add', { title: 'Cargar producto', logueado: true, usuario:usuario });
    },
    search: function (req, res) {
        const searchTerm = req.query.search;
        ids = [5,9];
        results =[];
        for (let i = 0; i < data.productos.length; i++) {
            if (data.productos[i].id == ids[0] || data.productos[i].id == ids[1]) {
                results.push(data.productos[i]);
            }
        }
        return res.render('search-results', { title: `Resultados de búsqueda para ${searchTerm}`, results: results, logueado: true, usuario:usuario });
    }
}

module.exports = productController;
