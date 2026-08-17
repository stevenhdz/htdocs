async function syncModels() {
  const database = require("./db");

  const Rol = require("./Models/rol.js");
  const Status = require("./Models/status");
  const TypeDoc = require("./Models/typedoc");
  const UserLogin = require("./Models/userLogin.js");
  const UserRegister = require("./Models/userRegister");
  const Hardware_place = require("./Models/hardwarePlace");
  const Report = require("./Models/reports");
  const Hardware = require("./Models/hardware");
  const Place = require("./Models/place");
  const Department = require("./Models/department");
  const Municipality = require("./Models/municipality");

  //1:N
  Rol.hasMany(UserLogin, { foreignKey: "idRolF", onDelete: "RESTRICT" });
  Status.hasMany(UserRegister, { foreignKey: "idStatusF", onDelete: "RESTRICT" });
  TypeDoc.hasMany(UserRegister, { foreignKey: "idTypedocF", onDelete: "RESTRICT" });
  UserRegister.hasMany(Report, { foreignKey: "idUserRegisterF" });
  Hardware_place.hasMany(Report, { foreignKey: "idHardwareF" });
  Hardware.hasMany(Hardware_place, { foreignKey: "idHardwareF", onDelete: "RESTRICT" });
  
  Place.hasMany(Hardware_place, { foreignKey: "idPlaceF" });
  Department.hasMany(Municipality, { foreignKey: "idDepartmentF", onDelete: "RESTRICT" });
  Municipality.hasMany(Place, { foreignKey: "idMunicipalityF", onDelete: "RESTRICT" });

  //1:1
  /* 
  
  UserRegister.hasOne(UserLogin, {
    foreignKey: "number_doc",
    sourceKey: "number_doc",
  });
  UserLogin.belongsTo(UserRegister, {
    foreignKey: "number_doc",
    targetKey: "number_doc",
  }); 
  
  */

  await database.sync({ force: false }); // false Crea la tabla si no existe // true Recrea todo si existe
}

module.exports = syncModels;
