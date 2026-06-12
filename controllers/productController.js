var express = require('express');
var router = express.Router();
const data = require('../db/productos');
const usuario = require('../db/productos').usuario;
const db = require('../database/models');

const productController = {
    index: function (req, res) {
        return res.render('index', { title: 'Home', logueado: true, usuario:usuario });
    },
    detail: function (req, res) {
        const productId = req.params.id;
        db.Producto.findByPk(productId, {
            include: [
                {association: 'usuario'},
                {association: 'comentarios', include: [{association: 'usuario'}]}
            ]
        })
        .then(function(producto) {
            if (!producto)
                return res.redirect('/')
            return res.render('product', { title: `Detalle del producto ${producto.nombre}`, product: producto });
        })
        .catch(function(error) {
            return res.send(error);
        });
    },
    edit: function (req, res) {
        const productId = req.params.id;
        db.Producto.findByPk(productId)
        .then(function(producto) {
            if (!producto)                return res.redirect('/')
            return res.render('product-edit', { title: `Editar producto ${producto.nombre}`, product: producto, logueado: true, usuario:usuario });
        })
        .catch(function(error) {
            return res.send(error);
        });

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
