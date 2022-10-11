/*exec*/
CREATE DATABASE tickets_manager2;
/*
usuarios asignacion compuetrs serial
asignacion a sends 
proveedor con shopping intermedia fechas de adquision 
*/
USE tickets_manager2;
CREATE TABLE proveedores(
  idProveedores INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  nombre  VARCHAR(50) NOT NULL
);
/* tipo de equipo */
CREATE TABLE tipocomputadores(
  idType INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL
);
/*modelo equipo*/
CREATE TABLE modelo(
  idModel INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL
);
/*marca equipo*/
CREATE TABLE marca(
  idBrand INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL
);
/* computadores con sus tipos marca modelo */
CREATE TABLE computers(
  idComputer INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  id_type INT NOT NULL,
  id_model INT NOT NULL,
  id_brand INT NOT NULL,
  descripcion VARCHAR(255) NOT NULL,
   count INT NOT NULL,
   idAsing INT NOT NULL,
  serial VARCHAR(10) NOT NULL,

  FOREIGN KEY (idAsing) REFERENCES asignacion(idAsing),
  FOREIGN KEY (id_type) REFERENCES tipocomputadores(idType),
  FOREIGN KEY (id_model) REFERENCES modelo(idModel),
  FOREIGN KEY (id_brand) REFERENCES marca(idBrand)
);

CREATE TABLE adquisicion(
  idAqusicion INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  idProveedor INT NOT NULL,
  idShopping INT NOT NULL,
  idComputer INT NOT NULL,
  FOREIGN KEY (idComputer) REFERENCES proveedores(idComputer),
  FOREIGN KEY (idProveedor) REFERENCES proveedores(idProveedores),
  FOREIGN KEY (idShopping) REFERENCES compras(idShopping)
);
/*esta de esos equipos enviados si fue recibido 1 no 0*/
CREATE TABLE eestadosenvio(
  idStatuSend INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(150) NOT NULL
);
/* rol del usuario admin, agente*/
CREATE TABLE rol(
  idRole INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(150) NOT NULL
);
/* usuarios tienen un rol */
CREATE TABLE usuarios(
  idUser INT PRIMARY KEY NOT NULL,
  Name1 VARCHAR(50) NOT NULL,
  Name2 VARCHAR(50) NULL,
  lastName1 VARCHAR(50) NOT NULL,
  lastName2 VARCHAR(50) NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(50) NOT NULL,
  number VARCHAR(15) NOT NULL,
  isActive TINYINT NOT NULL,
  role_id INT NOT NULL,
  created DATETIME NOT NULL,
  updated DATETIME,
  FOREIGN KEY (role_id) REFERENCES rol(idRole)
);
/* categoria o clasificacion de tickets */
CREATE TABLE categorias(
  idCategory INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(150) NOT NULL
);
/* proyecto en caso de ser varios */
CREATE TABLE proyectos(
  idProject INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(150) NOT NULL,
  description VARCHAR(255) NOT NULL
);
/*estado abierto, cerrado*/
CREATE TABLE estados(
  idStatu INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(150) NOT NULL
);
/* el tipo es incidente, bug, peticion */
CREATE TABLE tipos(
  idTypes INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(150) NOT NULL
);
/* las prioridades serian AlTA, BAJA, MEDIA */
CREATE TABLE prioridad(
  idPriority INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(150) NOT NULL
);
/* centralizacion de lo solicitado */
CREATE TABLE casos(
  idTicket INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  title VARCHAR(50) NOT NULL,
  description VARCHAR(255) NOT NULL,
  files BLOB,
  solution VARCHAR(255),
  updated DATETIME NOT NULL,
  created DATETIME,
  type_id INT NOT NULL,
  user_id INT NOT NULL,
  agent_id INT NOT NULL,
  project_id INT NOT NULL,
  category_id INT NOT NULL,
  priority_id INT NOT NULL,
  status_id INT NOT NULL,
  FOREIGN KEY (type_id) REFERENCES tipos(idTypes),
  FOREIGN KEY (user_id) REFERENCES usuarios(idUser),
  FOREIGN KEY (project_id) REFERENCES proyectos(idProject),
  FOREIGN KEY (category_id) REFERENCES categorias(idCategory),
  FOREIGN KEY (priority_id) REFERENCES prioridad(idPriority),
  FOREIGN KEY (status_id) REFERENCES estados(idStatu)
);
/*el usuario puede comentar n cantidad de veces al igual que otra persona un mismo ticket (segun la sesion) */
CREATE TABLE comentario(
  idComment INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  descriptions VARCHAR(150) NOT NULL,
  ticket_id INT NOT NULL,
  user_id INT NOT NULL,
  FOREIGN KEY (ticket_id) REFERENCES casos(idTicket)
);
CREATE TABLE asignacion(
  idAsing INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  idstockComputers INT NOT NULL,
  idUsers INT NOT NULL,
  FOREIGN KEY (idstockComputers) REFERENCES stockComptadores(idstockComputers),
  FOREIGN KEY (idUsers) REFERENCES usuarios(idUser)
);
/* regisro de equipos a enviar */
CREATE TABLE envios(
  idSend INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  proyecto VARCHAR(50) NOT NULL,
  date_created DATETIME NOT NULL,
  id_status_sends INT NOT NULL,
  FOREIGN KEY (id_status_sends) REFERENCES eestadosenvio(idStatuSend),
  FOREIGN KEY (idSend) REFERENCES asignacion(idAsing)
);