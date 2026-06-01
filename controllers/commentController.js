var express = require('express');
var router = express.Router();
const db = require('../database/models');

const productController = {
    index: function (req, res) {
    },
    addComent: function (req,res) {
    },
    addComentPost: function (req,res){
      let productId = req.params.id;
      let user = res.locals.user;

      db.Comentario.create({
        productId: productId,
        userId: user.id,
        comentario: req.body.comentario
      })
        .then(function() {
          return res.redirect('/product/detail/' + productId);
        })
        .catch(function(error) {
          return res.send(error);
        });
    }
}

module.exports = productController;
