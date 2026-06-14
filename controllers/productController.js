const db = require('../database/models');
const { validationResult } = require('express-validator');

const productController = {
    index: function (req, res) {
        return res.render('index', { 
            title: 'Home', 
            logueado: req.session.user != undefined, 
            usuario: res.locals.user 
        });
    },
    detail: function (req, res) {
        const productId = req.params.id;
        db.Producto.findByPk(productId, {
            include: [
                {association: 'usuario'},
                {association: 'comentarios', 
                    include: [{association: 'usuario'}]}
            ]
        })
        .then(function(producto) {
            if (!producto)
                return res.redirect('/')
            return res.render('product', { 
                title: `Detalle del producto ${producto.nombre}`, 
                product: producto,
                logueado: req.session.user != undefined,
                usuario: res.locals.user
            });
        })
        .catch(function(error) {
            return res.send(error);
        });
    },
    edit: function (req, res) {
        const productId = req.params.id;

        if (req.session.user == undefined){
            return res.redirect('/users/login');
        }

        db.Producto.findByPk(productId)
        .then(function(producto) {
            if (!producto){
                return res.redirect('/')
            } 

            if (producto.userId !== req.session.user.id){
                return res.redirect('/');
            }

            return res.render('product-edit', { 
                title: `Editar producto ${producto.nombre}`, 
                product: producto, 
                logueado: true, 
                usuario: res.locals.user 
            });
        })
        .catch(function(error) {
            return res.send(error);
        });

    },
    editProduct: function (req, res) {
        const productId = req.params.id;

        if (req.session.user == undefined){
            return res.redirect('/users/login');
        }

        db.Producto.findByPk(productId)
        .then(function(producto) {
            if (!producto){
                return res.redirect('/')
            }
            if (producto.userId !== req.session.user.id){
                return res.redirect('/');
            }

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.render('product-edit', {
                title: `Editar producto ${producto.nombre}`,
                product: producto,
                errors: errors.mapped(),
                old: req.body,
                logueado: true,
                usuario: res.locals.user
            });
        }

        return db.Producto.update({
            imagen: req.body.imagen,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio
        }, {
            where: {
                id: productId
            }
        })
        .then(function() {
            return res.redirect('/product/detail/' + productId);
        });
        })
        .catch(function(error) {
            return res.send(error);
        });
    },
    add: function (req, res) {
        if (req.session.user == undefined){
            return res.redirect('/users/login');
        }
        return res.render('product-add', { 
            title: 'Agregar producto', 
            logueado: true,
            usuario: res.locals.user
        });
    },
    search: function (req, res) {
        const searchTerm = req.query.search;

        db.Producto.findAll({
            where: {
                nombre: {
                    [db.Sequelize.Op.like]: `%${searchTerm}%`   
                }
            }, 
            include: [
                {association: 'usuario'}
            ]
        })
        .then(function(productos) {
            return res.render('search-results', {
                title: `Resultados de búsqueda para ${searchTerm}`,
                results: productos,
                searchTerm: searchTerm,
            });
        })
        .catch(function(error) {
            return res.send(error);
        }); 
    },
    addProduct: function (req, res) {
        if (req.session.user == undefined){
            return res.redirect('/users/login');
        }

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.render('product-add', {
                title: 'Agregar producto',
                errors: errors.mapped(),
                old: req.body,
                logueado: true,
                usuario: res.locals.user
            });
        }

        db.Producto.create({
            userId: req.session.user.id,
            imagen: req.body.imagen,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio
        })
        .then(function(producto) {
            return res.redirect('/product/detail/' + producto.id);
        })
        .catch(function(error) {
            return res.send(error);
        });
    },
    deleteProduct: function (req, res) {
        const productId = req.params.id;

        if (req.session.user == undefined){
            return res.redirect('/users/login');
        }

        db.Producto.findByPk(productId)
        .then(function(producto) {
            if (!producto){
                return res.redirect('/')
            }
            if (producto.userId !== req.session.user.id){
                return res.redirect('/');
            }

            return db.Comentario.destroy({
                where: {
                    productId: productId
                }
            })
            .then(function() {
                return db.Producto.destroy({
                    where: {
                        id: productId
                    }
                });
            })
            .then(function() {
                return res.redirect('/');
            });
        })
        .catch(function(error) {
            return res.send(error);
        });
    }
}

module.exports = productController;
