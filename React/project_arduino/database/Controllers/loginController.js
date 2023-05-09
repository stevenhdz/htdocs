const database = require("../db");
const UserLogin = require("../Models/userLogin");
const bcrypt = require("bcrypt");

class UserLoginController {
  async createUser(req, res) {
    try {
      const { usuario, password, number_doc, idRolF } = req.body;

      const existingUser = await UserLogin.findOne({ where: { number_doc } });

        if (existingUser) {
        // Si ya existe un usuario con este número de documento, enviamos un error al cliente.
        return res.status(409).json({ message: 'Ya existe un usuario con este número de documento.' });
        }

      const encryptedPassword = await bcrypt.hash(password, 10);

      const user = await UserLogin.create({
        usuario,
        password:encryptedPassword,
        number_doc,
        idRolF,
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteMultiple(req, res) {
    try {
      const ids = req.body;
      const result = await UserLogin.destroy({ where: { id_credentials: ids } });
  
      if (result == 0) {
        res.status(404).json({ error: "Roles no encontrados" });
      } else {
        res.status(201).json({ message: "Roles eliminados" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ocurrió un error en el servidor" });
    }
  }


  async getAllUsers(req, res) {
    try {
      const users = await UserLogin.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getUserById(req, res1) {
    try {
      const { usuario, password } = req.body;

      const user = await UserLogin.findOne({ where: { usuario } });
      bcrypt.compare(password, user.password, function(err, res) {
        if(!res){
          res1.status(404).json({message: 'passwords do not match'});
        } else {
          res1.status(200).json(user);
        }
      });
    } catch (error) {
      res1.status(500).json({ message: error.message });
    }
  }

  async updateUser(req, res) {
    try {
      const { id_credentials } = req.params;
      const {
          usuario,
          number_doc,
          idRolF,
          password
      } = req.body;
      const encryptedPassword = await bcrypt.hash(password, 10);
      const result = await UserLogin.update(
        {
          usuario,
          number_doc,
          idRolF,
          password : encryptedPassword
        },
        {
          where: { id_credentials },
        }
      );
      if (result[0] == 0) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({ message: "User updated successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const { id_credentials } = req.params;
      const result = await UserLogin.destroy({
        where: { id_credentials },
      });
      if (result == 0) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = UserLoginController;
