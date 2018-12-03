
var GLOBAL_CONFIG= require("../../global-config"); //cogido de config.local.js

module.exports = function (app) {
    
//    function insertaRol(models, cb) {
//    var RoleMapping = app.models.RoleMapping;
//    var Role = app.models.Role;
//    models.Usuario.create(
//        {username: 'Pepe', 
//         email: GLOBAL_CONFIG.adminCredentials.email, 
//         password: GLOBAL_CONFIG.adminCredentials.password, 
//         emailVerified: true}
//  , function(err, usuario) {
//    if (err) return cb(err);
//
//    //create the admin role
//    models.Role.create({
//      name: 'docente'
//    }, function(err, role) {
//      if (err) cb(err);
//      console.info(usuario);
//      //make bob an admin
//      role.principals.create({
//        principalType: RoleMapping.USER,
//        principalId: usuario.id
//      }, function(err, principal) {
//        cb(err);
//      });
//    });
//  });
//
//}
//    
  if (process.env.AUTOMIGRATE === "true") {
    app.dataSources.db.automigrate(null, function (err) {
      if (err) throw err;
      console.log("Modelos creados");
      app.loadFixtures()
        .then(function () {
            insertaRoles(app.models, function(err, roles){
                rolAdmin = roles[0];
                insertaAdmin(app.models, rolAdmin, function(err){
                if (err) throw(err);
                insertaCoordinadores(app);
                });
            });
        })
        .catch(function (err) {
          console.log('Errors:', err);
        });
    });
  }
};

function insertaRoles(models, cb) {
    models.Role.create(
            {name: 'admin',
             name: 'docente',
             name: 'alumno' }),
         function(err, roles) {
          return roles;
};

function insertaCoordinadores(app) {
  app.models.Juego.find({}, function (err, juegos) {
    let coordinadores = juegos.map((juego) => {
      console.log(juego);
      return new Promise((resolve) => {
        console.log('Llamando a add con id: ' + juego.id);
        juego.coordinadores.add(juego.id, resolve);
      });
    });

    Promise.all(coordinadores).then(() => console.log('Datos cargados correctamente!'));
  });
  }

//
//function insertaAdmin(models, cb) {
//models.Usuario.create(
//        {username: 'Jonh', 
//        email: GLOBAL_CONFIG.adminCredentials.email, 
//        password: GLOBAL_CONFIG.adminCredentials.password,
//        emailVerified: true}
//  , function(err, usuario) {
//    if (err) return cb(err);
//
//    //create the admin role
//    models.Role.create({
//      name: 'admin'
//    }, function(err, role) {
//      if (err) cb(err);
//
//      //make jonh an admin
//      role.principals.create({
//        principalType: RoleMapping.USER,
//        principalId: usuario.id
//      }, function(err, principal) {
//        cb(err);
//      });
//    });
//  });
//  };

