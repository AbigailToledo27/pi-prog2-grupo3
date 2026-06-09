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
    }
  };
  let config = {
    tableName: 'usuarios',
    timestamps: true,
    underscored: false
  }
  let Usuario = sequelize.define(alias, cols, config);
  Usuario.associate = function(models) {
    if (models.Comentario) {
      Usuario.hasMany(models.Comentario, {
        as: 'comentarios',
        foreignKey: 'userId'
      });
    }
  }
  return Usuario;
}
