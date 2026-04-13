var express = require('express');
var router = express.Router();
const usuarioController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/login', usuarioController.loginForm);
router.get('/login/ingresar', usuarioController.loginSubmit);
router.get('/register', usuarioController.registerForm);
router.get('/register/ingresar', usuarioController.registerSubmit);
router.get('/profile', usuarioController.perfilUsuario);
router.get('/profile/:id', usuarioController.perfil);
router.get('/cerrarSesion', usuarioController.cerrarSesion);

module.exports = router;
