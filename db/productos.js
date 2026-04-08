const data = {
    usuario: {
        id: 0,
        email: "gasparburgi49@gmail.com",
        usuario: "GasparBurgi",
        contrasena: "123456",
        fotoPerfil: "/images/users/chico1.jpg"
    },
    usuarios: [
        {
            id: 1,
            email: "lucia.reader@gmail.com",
            usuario: "LuciaReader",
            contrasena: "123456",
            fotoPerfil: "/images/users/chica1.jpg"
        },
        {
            id: 2,
            email: "mateo.novelas@gmail.com",
            usuario: "MateoNovelas",
            contrasena: "123456",
            fotoPerfil: "/images/users/chico1.jpg"
        },
        {
            id: 3,
            email: "sofia.libros@gmail.com",
            usuario: "SofiLibros",
            contrasena: "123456",
            fotoPerfil: "/images/users/chica2.jpg"
        },
        {
            id: 4,
            email: "tomas.paginas@gmail.com",
            usuario: "TomiPaginas",
            contrasena: "123456",
            fotoPerfil: "/images/users/chico2.jpg"
        },
        {
            id: 5,
            email: "valentina.lectora@gmail.com",
            usuario: "ValeLectora",
            contrasena: "123456",
            fotoPerfil: "/images/users/chica3.jpg"
        }
    ],
    productos: [
        {
            id: 1,
            usuarioId: 1,
            nombre: "El principito",
            precio: 12999,
            imagen: "/images/products/libro1.webp",
            descripcion: "Clásico de Antoine de Saint-Exupéry en edición tapa blanda, ideal para lectores de todas las edades.",
            cantidadComentarios: 3,
            comentarios: [
                {
                    id: 1,
                    usuarioId: 2,
                    nombreUsuario: "MateoNovelas",
                    texto: "Muy linda edición, me llegó en perfecto estado.",
                    imagenPerfil: "/images/chico1.jpg"
                },
                {
                    id: 2,
                    usuarioId: 3,
                    nombreUsuario: "SofiLibros",
                    texto: "Un clásico hermoso para regalar o releer.",
                    imagenPerfil: "/images/chica2.jpg"
                },
                {
                    id: 3,
                    usuarioId: 5,
                    nombreUsuario: "ValeLectora",
                    texto: "La descripción coincide y el libro se ve muy lindo.",
                    imagenPerfil: "/images/chica3.jpg"
                }
            ]
        },
        {
            id: 2,
            usuarioId: 2,
            nombre: "Cien años de soledad",
            precio: 18500,
            imagen: "/images/products/libro2.jpg",
            descripcion: "La obra más reconocida de Gabriel García Márquez, indispensable en cualquier biblioteca.",
            cantidadComentarios: 3,
            comentarios: [
                {
                    id: 4,
                    usuarioId: 1,
                    nombreUsuario: "LuciaReader",
                    texto: "Uno de mis libros favoritos, gran elección para el catálogo.",
                    imagenPerfil: "/images/chica1.jpg"
                },
                {
                    id: 5,
                    usuarioId: 4,
                    nombreUsuario: "TomiPaginas",
                    texto: "Muy buena novela, súper recomendable.",
                    imagenPerfil: "/images/chico2.jpg"
                },
                {
                    id: 6,
                    usuarioId: 5,
                    nombreUsuario: "ValeLectora",
                    texto: "Buen precio para un libro tan importante.",
                    imagenPerfil: "/images/chica3.jpg"
                }
            ]
        },
        {
            id: 3,
            usuarioId: 3,
            nombre: "Orgullo y prejuicio",
            precio: 15490,
            imagen: "/images/products/libro3.png",
            descripcion: "La famosa novela de Jane Austen, con romance, ironía y crítica social.",
            cantidadComentarios: 3,
            comentarios: [
                {
                    id: 7,
                    usuarioId: 1,
                    nombreUsuario: "LuciaReader",
                    texto: "Hermosa historia, ideal para quienes aman los clásicos.",
                    imagenPerfil: "/images/chica1.jpg"
                },
                {
                    id: 8,
                    usuarioId: 2,
                    nombreUsuario: "MateoNovelas",
                    texto: "Muy linda edición para tener en la biblioteca.",
                    imagenPerfil: "/images/chico2.jpg"
                },
                {
                    id: 9,
                    usuarioId: 4,
                    nombreUsuario: "TomiPaginas",
                    texto: "Gran libro y muy buena descripción.",
                    imagenPerfil: "/images/chico2.jpg"
                }
            ]
        },
        {
            id: 4,
            usuarioId: 4,
            nombre: "1984",
            precio: 14200,
            imagen: "/images/products/libro4.webp",
            descripcion: "Distopía clásica de George Orwell, ideal para lectores que disfrutan novelas intensas y reflexivas.",
            cantidadComentarios: 3,
            comentarios: [
                {
                    id: 10,
                    usuarioId: 2,
                    nombreUsuario: "MateoNovelas",
                    texto: "Libro indispensable, siempre vale la pena leerlo.",
                    imagenPerfil: "/images/chico1.jpg"
                },
                {
                    id: 11,
                    usuarioId: 3,
                    nombreUsuario: "SofiLibros",
                    texto: "Muy buena opción para sumar variedad al sitio.",
                    imagenPerfil: "/images/chica2.jpg"
                },
                {
                    id: 12,
                    usuarioId: 5,
                    nombreUsuario: "ValeLectora",
                    texto: "Ideal para quienes disfrutan las distopías.",
                    imagenPerfil: "/images/chica3.jpg"
                }
            ]
        },
        {
            id: 5,
            usuarioId: 5,
            nombre: "Harry Potter y la piedra filosofal",
            precio: 21999,
            imagen: "/images/products/libro5.webp",
            descripcion: "Primer libro de la saga de J.K. Rowling, perfecto para fanáticos de la fantasía.",
            cantidadComentarios: 3,
            comentarios: [
                {
                    id: 13,
                    usuarioId: 1,
                    nombreUsuario: "LuciaReader",
                    texto: "Perfecto para quienes aman Harry Potter.",
                    imagenPerfil: "/images/chica1.jpg"
                },
                {
                    id: 14,
                    usuarioId: 2,
                    nombreUsuario: "MateoNovelas",
                    texto: "Muy buena elección para un catálogo juvenil.",
                    imagenPerfil: "/images/chico1.jpg"
                },
                {
                    id: 15,
                    usuarioId: 4,
                    nombreUsuario: "TomiPaginas",
                    texto: "La portada se ve linda y el precio está claro.",
                    imagenPerfil: "/images/chico2.jpg"
                }
            ]
        },
        {
            id: 6,
            usuarioId: 1,
            nombre: "Don Quijote de la Mancha",
            precio: 19990,
            imagen: "/images/products/libro6.webp",
            descripcion: "Obra maestra de Cervantes, ideal para colección o lectura académica.",
            cantidadComentarios: 3,
            comentarios: [
                {
                    id: 16,
                    usuarioId: 2,
                    nombreUsuario: "MateoNovelas",
                    texto: "Un clásico total, suma mucho tenerlo en el catálogo.",
                    imagenPerfil: "/images/chico1.jpg"
                },
                {
                    id: 17,
                    usuarioId: 3,
                    nombreUsuario: "SofiLibros",
                    texto: "Muy buena opción para una tienda de libros.",
                    imagenPerfil: "/images/chica2.jpg"
                },
                {
                    id: 18,
                    usuarioId: 5,
                    nombreUsuario: "ValeLectora",
                    texto: "Ideal para quienes buscan literatura clásica.",
                    imagenPerfil: "/images/chica3.jpg"
                }
            ]
        },
        {
            id: 7,
            usuarioId: 2,
            nombre: "La sombra del viento",
            precio: 17600,
            imagen: "/images/products/libro7.webp",
            descripcion: "Novela de Carlos Ruiz Zafón con misterio, emoción y amor por los libros.",
            cantidadComentarios: 3,
            comentarios: [
                {
                    id: 19,
                    usuarioId: 1,
                    nombreUsuario: "LuciaReader",
                    texto: "De los mejores libros que leí, gran incorporación.",
                    imagenPerfil: "/images/chica1.jpg"
                },
                {
                    id: 20,
                    usuarioId: 4,
                    nombreUsuario: "TomiPaginas",
                    texto: "La portada y la descripción invitan a leerlo.",
                    imagenPerfil: "/images/chico2.jpg"
                },
                {
                    id: 21,
                    usuarioId: 5,
                    nombreUsuario: "ValeLectora",
                    texto: "Muy recomendado para quienes aman el suspenso.",
                    imagenPerfil: "/images/chica3.jpg"
                }
            ]
        },
        {
            id: 8,
            usuarioId: 3,
            nombre: "Los juegos del hambre",
            precio: 16750,
            imagen: "/images/products/libro8.webp",
            descripcion: "Primera parte de la saga juvenil de Suzanne Collins, con acción y una lectura muy ágil.",
            cantidadComentarios: 3,
            comentarios: [
                {
                    id: 22,
                    usuarioId: 1,
                    nombreUsuario: "LuciaReader",
                    texto: "Muy entretenido, ideal para público joven.",
                    imagenPerfil: "/images/chica1.jpg"
                },
                {
                    id: 23,
                    usuarioId: 2,
                    nombreUsuario: "MateoNovelas",
                    texto: "Me gusta que haya variedad de géneros.",
                    imagenPerfil: "/images/chico1.jpg"
                },
                {
                    id: 24,
                    usuarioId: 4,
                    nombreUsuario: "TomiPaginas",
                    texto: "Buen precio y libro muy conocido.",
                    imagenPerfil: "/images/chico2.jpg"
                }
            ]
        },
        {
            id: 9,
            usuarioId: 4,
            nombre: "Hábitos atómicos",
            precio: 18900,
            imagen: "/images/products/libro9.webp",
            descripcion: "Libro de James Clear sobre productividad, hábitos y mejora personal.",
            cantidadComentarios: 3,
            comentarios: [
                {
                    id: 25,
                    usuarioId: 1,
                    nombreUsuario: "LuciaReader",
                    texto: "Muy buscado hoy en día, excelente para sumar al sitio.",
                    imagenPerfil: "/images/chica1.jpg"
                },
                {
                    id: 26,
                    usuarioId: 3,
                    nombreUsuario: "SofiLibros",
                    texto: "La descripción resume muy bien de qué trata.",
                    imagenPerfil: "/images/chica2.jpg"
                },
                {
                    id: 27,
                    usuarioId: 5,
                    nombreUsuario: "ValeLectora",
                    texto: "Perfecto para la sección de desarrollo personal.",
                    imagenPerfil: "/images/chica3.jpg"
                }
            ]
        },
        {
            id: 10,
            usuarioId: 5,
            nombre: "El nombre del viento",
            precio: 20800,
            imagen: "/images/products/libro10.webp",
            descripcion: "Novela de fantasía de Patrick Rothfuss, con gran construcción de mundo y protagonista memorable.",
            cantidadComentarios: 3,
            comentarios: [
                {
                    id: 28,
                    usuarioId: 1,
                    nombreUsuario: "LuciaReader",
                    texto: "Gran novela de fantasía, muy recomendable.",
                    imagenPerfil: "/images/chica1.jpg"
                },
                {
                    id: 29,
                    usuarioId: 2,
                    nombreUsuario: "MateoNovelas",
                    texto: "Muy buena elección para completar el catálogo.",
                    imagenPerfil: "/images/chico1.jpg"
                },
                {
                    id: 30,
                    usuarioId: 4,
                    nombreUsuario: "TomiPaginas",
                    texto: "Me gusta que haya clásicos y fantasía moderna juntos.",
                    imagenPerfil: "/images/chico2.jpg"
                }
            ]
        }
    ]
};

module.exports = data;
