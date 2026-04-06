var express = require('express');
var router = express.Router();

const productController = {
    index: (req, res) => {
        return res.render('index', { title: 'Home' });
    },
    detail: (req, res) => {
        const productId = req.params.id;
        return res.render('product', { title: `Detalle del producto ${productId}` });
    }
}
module.exports = productController;
