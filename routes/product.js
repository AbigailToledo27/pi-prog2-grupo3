var express = require('express');
var router = express.Router();
const {body} = require('express-validator')
const productController = require('../controllers/productController');

// Validaciones

let validationsProduct = [
    body('imagen')
        .notEmpty().withMessage('Completa la imagen del producto').bail(),
    body('nombre')
        .notEmpty().withMessage('Completa el nombre del producto').bail(),
    body('descripcion')
        .notEmpty().withMessage('Completa la descripción del producto').bail(),
    body('precio')
        .notEmpty().withMessage('Completa el precio del producto').bail()
];

// Rutas

/*Mostrar productos*/
router.get('/', productController.index);

/*Detalle del producto*/
router.get('/detail/:id', productController.detail);

/*Editar producto*/
router.get('/edit/:id', productController.edit);
router.post('/edit/:id', validationsProduct, productController.editProduct);

/*Agregar producto*/
router.get('/add', productController.add);
router.post('/add', validationsProduct, productController.addProduct);

/*Eliminar producto*/
router.post('/delete/:id', productController.deleteProduct);

/*Buscar productos*/
router.get('/search', productController.search);

module.exports = router;
