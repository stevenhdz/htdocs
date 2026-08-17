import { User } from "../interfaces/user.interface";
import { initDb } from "../database";

export class UserModel {
  // Crear un usuario
  static async create(user: User): Promise<number> {
    const db = await initDb();
    const result = await db.run(
      `INSERT INTO users (name, email) VALUES (?, ?)`,
      [user.name, user.email]
    );
    return result.lastID!;
  }

  // Leer todos los usuarios
  static async findAll(): Promise<User[]> {
    const db = await initDb();
    return await db.all(`SELECT * FROM users`);
  }

  // Actualizar un usuario
  static async update(id: number, user: User): Promise<number> {
    const db = await initDb();
    const result = await db.run(
      `UPDATE users SET name = ?, email = ? WHERE id = ?`,
      [user.name, user.email, id]
    );
    return result.changes!;
  }

  // Eliminar un usuario
  static async delete(id: number): Promise<number> {
    const db = await initDb();
    const result = await db.run(`DELETE FROM users WHERE id = ?`, [id]);
    return result.changes!;
  }
}
