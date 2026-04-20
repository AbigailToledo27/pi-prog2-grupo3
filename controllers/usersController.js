const usuario = require('../db/productos').usuario;
const usuarios = require('../db/productos').usuarios;
const productos = require('../db/productos').productos;

const usuarioController = {
    loginForm: function(req,res) {
        return res.render('login',{title:'Iniciar sesión', logueado: false, usuario:usuario})
    },
    loginSubmit: function(req,res) {
        return res.render('index',{title:'Iniciar sesión', productos: productos, logueado: true, usuario:usuario})
    },
    registerForm: function(req,res) {
        return res.render('register',{title:'Crear cuenta', logueado: false, usuario:usuario})
    },
    registerSubmit: function(req,res) {
        return res.render('login',{title:'Iniciar sesión', logueado: false, usuario:usuario})
    },
    cerrarSesion: function(req,res) {
        return res.render('index',{title:'Home', productos: productos, logueado: false, usuario:usuario})
    },
    perfilUsuario: function(req,res) {
        return res.render('profile',{usuario:usuario, productos: productos, logueado: true})
    },
    perfil: function (req,res) {
        const usuarioId = req.params.id;
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].id == usuarioId) {
                return res.render('profile', {usuario: usuarios[i], productos: productos, logueado: true});
            }
        }
    }

};

module.exports = usuarioController;
