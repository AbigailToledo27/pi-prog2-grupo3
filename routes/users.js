var express = require('express');
var router = express.Router();
const {body} = require('express-validator')
const usuarioController = require('../controllers/usersController');


/* GET users listing. */

router.get('/login', usuarioController.loginForm);
router.post('/login', usuarioController.loginSubmit);

router.get('/register', usuarioController.registerForm);
router.post('/register', usuarioController.registerSubmit);

router.get('/profile', usuarioController.perfilUsuario);
router.get('/profile/:id', usuarioController.perfil);

router.get('/cerrarSesion', usuarioController.cerrarSesion);

module.exports = router;
