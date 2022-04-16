CREATE DATABASE tickets_manager;
/*
usuarios asignacion compuetrs serial
asignacion a sends 
proveedor con shopping intermedia fechas de adquision 
*/
USE tickets_manager;
CREATE TABLE proveedores(
  idProveedores INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  nombre  VARCHAR(50) NOT NULL
);
CREATE TABLE adquisicion(
  idAqusicion INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  idProveedor INT NOT NULL,
  idShopping INT NOT NULL,
  FOREIGN KEY (idProveedor) REFERENCES proveedores(idProveedores),
  FOREIGN KEY (idShopping) REFERENCES shopping(idShopping)
);
/* tipo de equipo */
CREATE TABLE type_computers(
  idType INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL
);
/*modelo equipo*/
CREATE TABLE model(
  idModel INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL
);
/*marca equipo*/
CREATE TABLE brand(
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
  serial VARCHAR(10) NOT NULL,
  FOREIGN KEY (id_type) REFERENCES type_computers(idType),
  FOREIGN KEY (id_model) REFERENCES model(idModel),
  FOREIGN KEY (id_brand) REFERENCES brand(idBrand)
);
/* stock de cada computador */
CREATE TABLE stockComputers(
  idstockComputers INT PRIMARY KEY NOT NULL,
  computer_id INT NOT NULL,
  count INT NOT NULL,
  FOREIGN KEY (computer_id) REFERENCES computers(idComputer)
);
/* registro para mandar a realizar compra segun el stock de los equipos */
CREATE TABLE shopping(
  idShopping INT PRIMARY KEY NOT NULL,
  count INT NOT NULL,
  description VARCHAR(255) NOT NULL,
  created DATETIME NOT NULL,
  user_id INT NOT NULL,
  FOREIGN KEY (idShopping) REFERENCES stockComputers(idstockComputers)
);
/*esta de esos equipos enviados si fue recibido 1 no 0*/
CREATE TABLE statusSends(
  idStatuSend INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(150) NOT NULL
);
/* rol del usuario admin, agente*/
CREATE TABLE role(
  idRole INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(150) NOT NULL
);
/* usuarios tienen un rol */
CREATE TABLE user(
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
  FOREIGN KEY (role_id) REFERENCES role(idRole)
);
/* categoria o clasificacion de tickets */
CREATE TABLE category(
  idCategory INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(150) NOT NULL
);
/* proyecto en caso de ser varios */
CREATE TABLE project(
  idProject INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(150) NOT NULL,
  description VARCHAR(255) NOT NULL
);
/*estado abierto, cerrado*/
CREATE TABLE statu(
  idStatu INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(150) NOT NULL
);
/* el tipo es incidente, bug, peticion */
CREATE TABLE type(
  idTypes INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(150) NOT NULL
);
/* las prioridades serian AlTA, BAJA, MEDIA */
CREATE TABLE priority(
  idPriority INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(150) NOT NULL
);
/* centralizacion de lo solicitado */
CREATE TABLE ticket(
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
  FOREIGN KEY (type_id) REFERENCES type(idTypes),
  FOREIGN KEY (user_id) REFERENCES user(idUser),
  FOREIGN KEY (agent_id) REFERENCES user(idUser),
  FOREIGN KEY (project_id) REFERENCES project(idProject),
  FOREIGN KEY (category_id) REFERENCES category(idCategory),
  FOREIGN KEY (priority_id) REFERENCES priority(idPriority),
  FOREIGN KEY (status_id) REFERENCES statu(idStatu)
);
/*el usuario puede comentar n cantidad de veces al igual que otra persona un mismo ticket (segun la sesion) */
CREATE TABLE comment(
  idComment INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  descriptions VARCHAR(150) NOT NULL,
  ticket_id INT NOT NULL,
  user_id INT NOT NULL,
  FOREIGN KEY (ticket_id) REFERENCES ticket(idTicket)
);
CREATE TABLE asign(
  idAsing INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  idstockComputers INT NOT NULL,
  idUsers INT NOT NULL,
  FOREIGN KEY (idstockComputers) REFERENCES stockComputers(idstockComputers),
  FOREIGN KEY (idUsers) REFERENCES user(idUser)
);
/* regisro de equipos a enviar */
CREATE TABLE sends(
  idSend INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  proyecto VARCHAR(50) NOT NULL,
  date_created DATETIME NOT NULL,
  id_status_sends INT NOT NULL,
  FOREIGN KEY (id_status_sends) REFERENCES statusSends(idStatuSend),
  FOREIGN KEY (idSend) REFERENCES asign(idAsing)
);