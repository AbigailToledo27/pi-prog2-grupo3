const db = require('../database/models')
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');


const usuarioController = {
    showLogin: function(req,res) {
        if (req.session.user)
            return res.redirect('/users/profile/' + req.session.user.id)
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
                    res.cookie('userId', usuario.id, {maxAge:1000*60})
                    console.log(req.cookies.materia)
                }
                return res.redirect('/') //solo para probar el login
                //return res.redirect('/users/profile/' + usuario.id) //descomentar esta linea para cuando este lo de productos y sí se pueda redirigir al perfil del usuario
            })
    },
    showRegister: function(req,res) {
        if (req.session.user)
            return res.redirect('/users/profile/' + req.session.user.id)
        return res.render('register',{title:'Crear cuenta'})
    },
    registerSubmit: function(req,res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.render('register', {errors:errors.mapped(), old:req.body})
        }
        const {usuario, email, password}= req.body
        const passwordHasheada = bcrypt.hashSync(password, 10)
        db.Usuario.create({
            usuario: usuario,
            email: email,
            contrasena: passwordHasheada,
            fotoPerfil: 'profile-default.png'
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
        res.clearCookie('userId')
        return res.redirect('/')
    },
    perfilUsuario: function(req,res) {
        if (!req.session.user)
            return res.redirect('/users/login')
        const usuarioId = req.session.user.id;
        db.Usuario.findByPk(usuarioId)
            .then(function (usuario) {
                return res.render('profile',{usuario:usuario})
            })
            .catch(function (error) {
                return res.send(error)
            })
        
    },
    perfil: function (req,res) {
        const usuarioId = req.params.id;
        db.Usuario.findByPk(usuarioId)
            .then(function (usuario) {
                if (!usuario)
                    return res.redirect('/')
                return res.render('profile',{usuario:usuario})
            })
            .catch(function (error) {
                return res.send(error)
            })
        }

};

module.exports = usuarioController;
