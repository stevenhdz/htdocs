import SQLite from 'react-native-sqlite-storage';

const DB_NAME = 'finanzas.db';

SQLite.enablePromise(true);

/** 
 * Inicializa la base de datos
 * Crea la tabla transactions2 si no existe
 * @returns
 * @example
 * initDatabase();
 */
export const initDatabase = async () => {
  try {
    const db = await SQLite.openDatabase({
      name: DB_NAME,
      location: 'default',
    });
    await db.executeSql(`
      CREATE TABLE IF NOT EXISTS transactions2 (
        id TEXT PRIMARY KEY,
        type TEXT NOT NULL,
        amount REAL NOT NULL,
        description TEXT,
        date TEXT NOT NULL,
        pay INTEGER NOT NULL
      );
    `);
    console.log('Database initialized');
  } catch (error) {
    console.error('Error initializing database: ', error);
  }
};

/**
 * Guarda una transacción en la base de datos
 * @param {string} type
 * @param {number} amount
 * @param {string} description
 * @param {string} date
 * @param {number} pay
 * @returns {Promise<void>}
 * @example
 * saveTransaction('ingreso', 100, 'Salario', '2021-09-01', 0);
 * */
export const saveTransaction = async (
  type: string,
  amount: number,
  description: string,
  date: string,
  pay: number,
) => {
  try {
    const db = await SQLite.openDatabase({
      name: DB_NAME,
      location: 'default',
    });
    await db.executeSql(
      'INSERT INTO transactions2 (id, type, amount, description, date, pay) VALUES (?, ?, ?, ?, ?, ?)',
      [Math.random().toString(), type, amount, description, date, pay],
    );
    console.log('Transaction saved');
  } catch (error) {
    console.error('Error saving transaction: ', error);
  }
};

/**
 * Elimina una transacción de la base de datos
 * @param {string} id
 * @returns {Promise<void>}
 * @example
 * deleteTransactions('1');
 * */
export const deleteTransactions = async (id: string) => {
  try {
    const db = await SQLite.openDatabase({
      name: DB_NAME,
      location: 'default',
    });
    await db.executeSql('DELETE FROM transactions2 WHERE id = ?', [id]);
    console.log('Transaction deleted');
  } catch (error) {
    console.error('Error deleting transaction: ', error);
  }
};

/** 
 * Obtiene todas las transacciones de la base de datos
 * @returns {Promise<any[]>}
 * @example
 * fetchTransactions();
 * */
export const fetchTransactions = async () => {
  try {
    const db = await SQLite.openDatabase({
      name: DB_NAME,
      location: 'default',
    });
    const [results] = await db.executeSql('SELECT * FROM transactions2');
    const transactions: any[] = [];
    for (let i = 0; i < results.rows.length; i++) {
      const row = results.rows.item(i);
      transactions.push({
        id: row.id,
        type: row.type,
        amount: row.amount,
        description: row.description,
        date: row.date,
        pay: row.pay
      });
    }
    console.log(transactions)
    return transactions;
  } catch (error) {
    console.error('Error fetching transactions: ', error);
    return [];
  }
};

/**
 * Actualiza el valor de pay de las transacciones
 * @param {string[]} transactionIds
 * @param {number} payValue
 * @returns {Promise<void>}
 * @example
 * updateTransactionsPay(['1', '2'], 1);
 * */
export const updateTransactionsPay = async (transactionIds: string[], payValue: number) => {
  try {
    const db = await SQLite.openDatabase({
      name: DB_NAME,
      location: 'default',
    });
    console.log("id", transactionIds)
    const transactionIdsString = transactionIds.map(id => `'${id}'`).join(',');
    const query = `UPDATE transactions2 SET pay = ${payValue} WHERE id IN (${transactionIdsString})`;
    await db.executeSql(query);
  } catch (error) {
    console.error('Error fetching transactions: ', error);
    return [];
  }
};

/** 
 * Actualiza el valor de pay de una transacción
 * @param {string} id
 * @param {number} pay
 * @returns {Promise<void>}
 * @example
 * updateTransactionPay('1', 1);
 * */
export const updateTransactionPay = async (id: string, pay: number) => {
  try {
    const db = await SQLite.openDatabase({
      name: DB_NAME,
      location: 'default',
    });
    await db.executeSql(
      'UPDATE transactions2 SET pay = ? WHERE id = ?',
      [pay, id],
    );
    console.log('Transaction pay updated');
  } catch (error) {
    console.error('Error updating transaction pay: ', error);
  }
};
