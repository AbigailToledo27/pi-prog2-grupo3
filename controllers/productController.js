var express = require('express');
var router = express.Router();

const productController = {
    index: function (req, res) {
        return res.render('index', { title: 'Home' });
    },
    detail: function (req, res) {
        const productId = req.params.id;
        return res.render('product', { title: `Detalle del producto ${productId}` });
    }
}

module.exports = productController;
