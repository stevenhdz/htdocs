import { Request, Response } from "express";
import { UserModel } from "../models/user.model";
import { User } from "../interfaces/user.interface";

export class UserController {
  static async createUser(req: Request, res: Response) {
    const user: User = req.body;
    try {
      const userId = await UserModel.create(user);
      res.status(201).json({ id: userId });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getUsers(req: Request, res: Response) {
    try {
      const users = await UserModel.findAll();
      res.json(users);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const user: User = req.body;
    try {
      const changes = await UserModel.update(Number(id), user);
      if (changes > 0) {
        res.json({ message: "User updated successfully" });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const changes = await UserModel.delete(Number(id));
      if (changes > 0) {
        res.json({ message: "User deleted successfully" });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
