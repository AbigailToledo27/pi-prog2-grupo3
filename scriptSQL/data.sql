CREATE SCHEMA IF NOT EXISTS data;

USE data;

CREATE TABLE IF NOT EXISTS usuarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) UNIQUE NOT NULL,
    contrasena VARCHAR(100) NOT NULL,
    fotoPerfil VARCHAR(100) NOT NULL,
    usuario VARCHAR(100) UNIQUE NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS productos(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_id INT UNSIGNED NOT NULL,
    imagen VARCHAR(100) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio FLOAT NOT NULL,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES usuarios(id)
);

CREATE TABLE IF NOT EXISTS comentarios(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    product_id INT UNSIGNED NOT NULL,
    user_id INT UNSIGNED NOT NULL,
    comentario TEXT NOT NULL,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (user_id) REFERENCES usuarios(id),
    FOREIGN KEY (product_id) REFERENCES productos(id)
);

INSERT INTO usuarios
VALUES (DEFAULT, "lucia.reader@gmail.com","123456","/images/users/chica1.jpg","LuciaReader",DEFAULT,DEFAULT,NULL);

INSERT INTO usuarios
VALUES (DEFAULT, "mateo.novelas@gmail.com","123456","/images/users/chico1.jpg","MateoNovelas",DEFAULT,DEFAULT,NULL);

INSERT INTO usuarios
VALUES (DEFAULT, "sofia.libros@gmail.com","123456","/images/users/chica2.jpg","SofiaLibros",DEFAULT,DEFAULT,NULL);

INSERT INTO usuarios
VALUES (DEFAULT, "tomas.paginas@gmail.com","123456","/images/users/chica2.jpg","TomasPaginas",DEFAULT,DEFAULT,NULL);

INSERT INTO usuarios
VALUES (DEFAULT, "valentia.lectora@gmail.com","123456","/images/users/chica3.jpg","ValenLectora",DEFAULT,DEFAULT,NULL);


INSERT INTO productos
VALUES (DEFAULT,1,"/images/products/libro1.webp","El Principito","Clásico de Antoine de Saint-Exupéry en edición tapa blanda, ideal para lectores de todas las edades.",12999,DEFAULT,DEFAULT,NULL);

INSERT INTO productos
VALUES (DEFAULT,2,"/images/products/libro2.jpg","Cien años de soledad",
"La obra más reconocida de Gabriel García Márquez, indispensable en cualquier biblioteca.",18500,
DEFAULT,DEFAULT,NULL);

INSERT INTO productos
VALUES (DEFAULT,3,"/images/products/libro3.png","Orgullo y prejuicio",
"La famosa novela de Jane Austen, con romance, ironía y crítica social.",15490,
DEFAULT,DEFAULT,NULL);

INSERT INTO productos
VALUES (DEFAULT,4,"/images/products/libro4.webp","1984",
"Distopía clásica de George Orwell, ideal para lectores que disfrutan novelas intensas y reflexivas.",14200,
DEFAULT,DEFAULT,NULL);

INSERT INTO productos
VALUES (DEFAULT,5,"/images/products/libro5.webp","Harry Potter y la piedra filosofal",
"Primer libro de la saga de J.K. Rowling, perfecto para fanáticos de la fantasía.",21999,
DEFAULT,DEFAULT,NULL);

INSERT INTO productos
VALUES (DEFAULT,1,"/images/products/libro6.webp","Don Quijote de la mancha",
"Obra maestra de Cervantes, ideal para colección o lectura académica.",19990,
DEFAULT,DEFAULT,NULL);

INSERT INTO productos
VALUES (DEFAULT,2,"/images/products/libro7.webp","La sombra del viento",
"Novela de Carlos Ruiz Zafón con misterio, emoción y amor por los libros.",17660,
DEFAULT,DEFAULT,NULL);

INSERT INTO productos
VALUES (DEFAULT,3,"/images/products/libro8.webp","Los juegos del hambre",
"Primera parte de la saga juvenil de Suzanne Collins, con acción y una lectura muy ágil.",16750,
DEFAULT,DEFAULT,NULL);

INSERT INTO productos
VALUES (DEFAULT,4,"/images/products/libro9.webp","Habitos atomicos",
"Libro de James Clear sobre productividad, hábitos y mejora personal.",18900,
DEFAULT,DEFAULT,NULL);

INSERT INTO productos
VALUES (DEFAULT,5,"/images/products/libro10.webp","El nombre del viento",
"Novela de fantasía de Patrick Rothfuss, con gran construcción de mundo y protagonista memorable.",20800,
DEFAULT,DEFAULT,NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 1, 2, "Muy linda edición, me llegó en perfecto estado.",DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 1, 3, "Un clásico hermoso para regalar o releer..",DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 1, 5, "La descripción coincide y el libro se ve muy lindo.",DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 2, 1, "Uno de mis libros favoritos, gran elección para el catálogo.",DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 2, 4, "Muy buena novela, súper recomendable.",DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 2, 5, "Buen precio para un libro tan importante.",DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 3, 1, "Hermosa historia, ideal para quienes aman los clásicos.",DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 3, 2, "Muy linda edición para tener en la biblioteca.",DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 3, 4, "Gran libro y muy buena descripción.",DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 4, 2, "Libro indispensable, siempre vale la pena leerlo.",DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 4, 3, "Muy buena opción para sumar variedad al sitio.",DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 4, 5, "deal para quienes disfrutan las distopías.",DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 5, 1, "Perfecto para quienes aman Harry Potter.",DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 5, 2, "Muy buena elección para un catálogo juvenil.",DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 5, 3, "La portada se ve linda y el precio está claro.",DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 6, 2, "Un clásico total, suma mucho tenerlo en el catálogo.",DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 6, 3, "Muy buena opcion para una tienda de libros",DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 6, 5, "Ideal para quienes buscan literatura clasica",DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 7, 1, "De los mejores libros que lei, gran incorporacion",DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 7, 4, "La portada y la descripcion invitan a leerlo",DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 7, 5, "Muy lrecomendado para quienes aman el suspenso",DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 8, 1, "Muy lentretenido, ideal para publico joven",DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 8, 2, "Me gusta que haya variedad de generos",DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 8, 4, "Buen precio y libro muy conocido",DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 9, 1, "Muy buscado hoy en día, excelente para sumar al sitio",DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 9, 3, "La descripcion resume muy bien de que trata",DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 9, 5, "Perfecto para la seccion de desarrollo personal",DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 10, 1, "Gran novela de fantasia, muy recomendable",DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 10, 2, "Muy buena elección para completar el catalogo",DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios
VALUES (DEFAULT, 10, 4, "Me gusta que haya clasicos y fantasia moderna juntos",DEFAULT, DEFAULT, NULL);