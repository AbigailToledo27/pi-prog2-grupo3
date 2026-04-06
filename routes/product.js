var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

/* El product deberia tener rutas para mostrar el detalle del producto */
router.get('/', productController.index);
router.get('/detail/:id', productController.detail);
router.get('/edit/:id', productController.edit);
router.get('/add', productController.add);
router.get('/search', productController.search);

module.exports = router;
