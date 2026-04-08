const usuario = require('../db/productos').usuario;
const usuarios = require('../db/productos').usuarios;
const productos = require('../db/productos').productos;

const usuarioController = {
    loginForm: function(req,res) {
        return res.render('login',{title:'Iniciar sesión'})
    },
    loginSubmit: function(req,res) {
        return res.render('login',{title:'Iniciar sesión'}) /*le pongo lo mismo porque no se como redirigir para que no se rompa */
    },
    registerForm: function(req,res) {
        return res.render('register',{title:'Crear cuenta'})
    },
    registerSubmit: function(req,res) {
        return res.render('login',{title:'Iniciar sesión'}) /*le pongo lo mismo porque no se como redirigir para que no se rompa */
    },
    perfilUsuario: function(req,res) {
        return res.render('profile',{usuario:usuario, productos: productos})
    },
    perfil: function (req,res) {
        const usuarioId = req.params.id;
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].id == usuarioId) {
                return res.render('profile', {usuario: usuarios[i], productos: productos});
            }
        }
    }

};

module.exports = usuarioController;
