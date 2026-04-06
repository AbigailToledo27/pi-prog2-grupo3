var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

/* El product deberia tener rutas para mostrar el detalle del producto */
router.get('/', productController.index);
router.get('/detail/:id', productController.detail);

module.exports = router;
