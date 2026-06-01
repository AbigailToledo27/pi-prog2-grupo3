var express = require('express');
var router = express.Router();
const commentController = require('../controllers/commentController');

/* El product deberia tener rutas para mostrar el detalle del producto */
router.get('/', commentController.index);
router.get('/agregarComentario',commentController.addComent);
router.post('/agregarComentario/:id', commentController.addComentPost);

module.exports = router;
