class MySQLConnection {
    connect() {

    }
}

class PostgreSQLConnection {
    connect() {
        
    }
}

class PasswordReminder {
    constructor(dbConnection) {
        this.dbConnection = dbConnection
    }
}