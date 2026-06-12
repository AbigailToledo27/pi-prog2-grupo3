/*
CREATE TABLE IF NOT EXISTS productos(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    userId INT UNSIGNED NOT NULL,
    imagen VARCHAR(100) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio FLOAT NOT NULL,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES usuarios(id)
);
*/
module.exports = function (sequelize, DataTypes) {
    let alias = "Producto";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            unsigned: true,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.INTEGER,    
            unsigned: true,
            allowNull: false,
        },
        imagen: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    };
    let config = {
        tableName: 'productos',
        timestamps: true,   
        underscored: false
    }
    let Producto = sequelize.define(alias, cols, config);
    Producto.associate = function(models) {
        if (models.Usuario) {
            Producto.belongsTo(models.Usuario, {
                as: 'usuario',
                foreignKey: 'userId'
            });
        }
        if (models.Comentario) {
            Producto.hasMany(models.Comentario, {
                as: 'comentarios',
                foreignKey: 'productId'
            });
        }
    };
    return Producto;
}