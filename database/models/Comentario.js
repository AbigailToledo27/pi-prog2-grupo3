/*
CREATE TABLE `comentarios` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `productId` int unsigned NOT NULL,
  `userId` int unsigned NOT NULL,
  `comentario` text NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `productId` (`productId`),
  CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
*/

module.exports = function (sequelize, DataTypes) {
  let alias = "Comentario";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      unsigned: true,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      unsigned: true,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      unsigned: true,
      allowNull: false
    },
    comentario: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  };
  let config = {
    tableName: 'comentarios',
    timestamps: false,
    underscored: false
  }
  let Comentario = sequelize.define(alias, cols, config);
  Comentario.associate = function(models) {
    if (models.Producto) {
      Comentario.belongsTo(models.Producto,{
        as: 'producto',
        foreignKey: 'productId'
      });
    }

    if (models.Usuario) {
      Comentario.belongsTo(models.Usuario,{
        as: 'usuario',
        foreignKey: 'userId'
      });
    }
  }
  return Comentario;
}
