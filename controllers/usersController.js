const db = require('../database/models')
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');


const usuarioController = {
    showLogin: function(req,res) {
        return res.render('login',{title:'Iniciar sesión'})
    },
    loginSubmit: function(req,res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.render('login', {errors:errors.mapped(), old:req.body})
        }
        //ya validamos email y contraseña en rutes con custom
        db.Usuario.findOne({where:{email:req.body.email}})
            .then(function (usuario) {
                req.session.user = {
                    id: usuario.id,
                    usuario: usuario.usuario,
                    email: usuario.email
                }
                //verificosi el usuario hace click en el boton para ser recordado
                if (req.body.remember){
                    req.cookie('userId', usuario.id, {maxAge:1000*60})
                }
                return res.redirect('/profile/:id')
            })
    },
    showRegister: function(req,res) {
        return res.render('register',{title:'Crear cuenta'})
    },
    registerSubmit: function(req,res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.render('login', {errors:errors.mapped(), old:req.body})
        }
        const {usuario, email, password}= req.body
        const passwordHasheada = bcrypt.hashSync(password, 10)
        db.Usuario.create({
            usuario: usuario,
            email: email,
            contrasena: passwordHasheada
        })
        .then(function() {
            return res.redirect("/users/login");
        })
        .catch(function(error) {
            return res.send(error);
        });
    },
    cerrarSesion: function(req,res) {
        req.session.destroy()
        res.crearCookie('userId')
        return res.redirect('/')
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
