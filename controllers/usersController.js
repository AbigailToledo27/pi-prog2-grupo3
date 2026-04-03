const usuarioController = {
    loginForm: function(req,res) {
        return res.render('login',{title:'Iniciar sesión'})
    },
    loginSubmit: function(req,res) {
        return res.render('login',{title:'Iniciar sesión'}) /*le pongo lo mismo porque no se como redirigir para que no se rompa */
    },    
    registerForm: function(req,res) {
        return res.render('register',{title:'Crear cuenta'})
    },
    registerSubmit: function(req,res) {
        return res.render('login',{title:'Iniciar sesión'}) /*le pongo lo mismo porque no se como redirigir para que no se rompa */
    },
    perfilUsuario: function(req,res) {
        return res.render('profile',{title:'Mi perfil'})
    }
};

module.exports = usuarioController;