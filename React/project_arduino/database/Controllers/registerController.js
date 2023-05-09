const database = require("../db");
const UserRegister = require("../Models/userRegister");

class UserRegisterController {
  async createUser(req, res) {
    try {
      const { number_doc, name, name2, lastname, lastname2, email, telephone, idStatusF, idTypedocF } = req.body;
      const existingUser = await UserRegister.findOne({ where: { number_doc } });

        if (existingUser) {
        // Si ya existe un usuario con este número de documento, enviamos un error al cliente.
        return res.status(409).json({ message: 'Ya existe un usuario con este número de documento.' });
        }

      const user = await UserRegister.create({
        number_doc,
        name,
        name2,
        lastname,
        lastname2,
        email,
        telephone, 
        idStatusF, 
        idTypedocF
      });

      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await UserRegister.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteMultiple(req, res) {
    try {
      const ids = req.body;
      const result = await UserRegister.destroy({ where: { id_user: ids } });
  
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


  async getUserById(req, res) {
    try {
      const { id_user } = req.params;
      const user = await UserRegister.findByPk(id_user);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getUserByDoc(req, res) {
    try {
      const { number_doc } = req.params;
      const user = await UserRegister.findOne({
        where: { number_doc: number_doc },
      });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateUser(req, res) {
    try {
      const { id_user } = req.params;
      const { number_doc, name, name2, lastname, lastname2, email, telephone, idStatusF, idTypedocF } = req.body;
      const result = await UserRegister.update({
        number_doc,
        name,
        name2,
        lastname,
        lastname2,
        email,
        telephone, 
        idStatusF, 
        idTypedocF
      }, {
        where: { id_user }
      });
      if (result[0] == 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User updated successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const { id_user } = req.params;
      const result = await UserRegister.destroy({
        where: { id_user }
      });
      if (result == 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = UserRegisterController;

