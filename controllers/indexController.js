const db = require('../database/models')

const indexController = {
    index: function (req, res) {
        db.Producto.findAll({
            include: [
                { association: 'comentarios' }
            ]
        })
            .then(function(productos) {
                return res.render('index', {
                    title: 'Home',
                    productos: productos
                });
            })
            .catch(function(error) {
                return res.send(error);
            });
    }
}

module.exports = indexController;
