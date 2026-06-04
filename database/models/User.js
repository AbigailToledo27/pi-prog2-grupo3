/*
CREATE TABLE `usuarios` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `email` varchard(100) unsigned NOT NULL,
  `contrasena` varchard(100) NOT NULL,
  `fotoPerfil` varchard(100) NOT NULL,
  `usuario` varchard(100) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `usuario` (`usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
*/

module.exports = function (sequelize, DataTypes) {
  let alias = "Usuario";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      unsigned: true,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    contrasena: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fotoPerfil: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    usuario: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
  };
  let config = {
    tableName: 'usuarios',
    timestamps: false,
    underscored: false
  }
  let Usuario = sequelize.define(alias, cols, config);
  Uauario.associate = function(models) {
    if (models.Comentario) {
      Usuario.hasMany(models.Comentario, {
        as: 'comentarios',
        foreignKey: 'userId'
      });
    }
  }
  return Usuario;
}
