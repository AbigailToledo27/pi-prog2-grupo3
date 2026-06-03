var express = require('express');
const db = require('../database/models');

const productController = {
    index: function (req, res) {
    },
    addComent: function (req,res) {
    },
    addComentPost: function (req,res){
      let productId = req.params.id;
      let user = res.locals.user;

      if (req.session.user == undefined){
        return res.redirect('/');
      }
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
