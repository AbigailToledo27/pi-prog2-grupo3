var express = require('express');
var router = express.Router();
const {body} = require('express-validator')
const usuarioController = require('../controllers/usersController');
const db = require('../database/models');
const bcrypt = require('bcryptjs');

/* GET users listing. */

// Validaciones
let validationsRegister = [
    body('usuario')
        .notEmpty().withMessage('Completa el nombre').bail(), //preguntar
    body('email')
        .notEmpty().withMessage('Completa el email').bail()
        .isEmail().withMessage('Ingresá un email válido')
        .custom(function (value) {
            return db.Usuario.findOne({where: {email:value}})
            .then(function (usuarioExiste) {
                if (usuarioExiste){
                    throw new Error("El email ya esta registrado")
                }
            })
        }),
    body('password')
        .notEmpty().withMessage('Completa la contraseña').bail()
        .isLength({min:3}).withMessage('La contraseña debe tener mas de 3 caracteres')
]

let validationsLogin = [
    body('email')
        .notEmpty().withMessage('Completa el email').bail()
        .isEmail().withMessage('Ingresá un email válido')
        .custom(function (value) {
            return db.Usuario.findOne({where: {email:value}})
            .then(function (usuario) {
                if (!usuario){
                    throw new Error("El email no existe");
                    
                }
            })
        }),
    body('password')
        .notEmpty().withMessage('Completa la contraseña').bail()
        .custom(function (value, {req}) {
            return db.Usuario.findOne({where:{email: req.body.email}})
            .then(function (usuario) {
                if (usuario){
                    let verificoPass = bcrypt.compareSync(value, usuario.contrasena) //verifico la password con la de la base de datos
                    if (!verificoPass){
                        throw new Error("Contraseña incorrecta");
                        
                    }
                }
            })
        })
]

router.get('/login', usuarioController.showLogin);
router.post('/login',validationsLogin, usuarioController.loginSubmit);

router.get('/register', usuarioController.showRegister);
router.post('/register',validationsRegister, usuarioController.registerSubmit);

router.post('/cerrarSesion', usuarioController.cerrarSesion);

router.get('/profile', usuarioController.perfilUsuario);
router.get('/profile/:id', usuarioController.perfil);



module.exports = router;
