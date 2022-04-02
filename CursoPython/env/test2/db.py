import sqlite3
from sqlite3 import Error


def menu():
    continuar = "S"
    while (continuar == "S"):
        print( """
        -------------------------------------
        |          MENU PRINCIPAL           |
        -------------------------------------
        |    1. Crear tabla                 |
        |    2. Insertar datos en tabla     |
        |    3. Consultar datos en tabla    |
        |    4. Eliminar datos en tabla     |
        |    5. Salir                       |
        -------------------------------------  
        """)
        option = int(input('opcion: '))
        print(option)
        if (option == 1):
            create_table('name2')
        elif (option == 2):
            insert_table('name2')
        elif(option == 3):
            select_table('name2')
        elif(option == 4):
            delete_table('name2')
        else:
            continuar = option >= 5
            print('exited')

def create_connection(db_file):
    conn = None
    try:
        conn = sqlite3.connect(db_file)
        print('connection established')
        return conn
    except Error as e:
        print(e)

def create_table(name):
    nameTable = name
    conn = create_connection("en_clase.db")
    conn.cursor()
    conn.execute(f"create table if not exists {nameTable} (name text not null, first_appeared text not null)")
    print(f"create table {nameTable} {conn}")
    if conn:
        conn.close()
        print('connection interrupted')

def insert_table(name):
    nameTable = name
    fullname = input('name ? ')
    lastname = input('last name ? ')
    conn = create_connection("en_clase.db")
    conn.cursor()
    conn.execute(f"INSERT INTO {nameTable} VALUES ('{fullname}','{lastname}')")
    conn.commit()
    print(f"insert in table {nameTable} {conn}")
    if conn:
        conn.close()
        print('connection interrupted')
    
def select_table(name):
    nameTable = name
    conn = create_connection("en_clase.db")
    conn.cursor()
    for row in conn.execute(f"select name, first_appeared from {nameTable}"):
        print(row)
    if conn:
        conn.close()
        print('connection interrupted')
    
def delete_table(name):
    nameTable = name
    conn = create_connection("en_clase.db")
    conn.cursor()
    print("I just deleted", conn.execute(f"delete from {nameTable}").rowcount, "rows")
    if conn:
        conn.close()
        print('connection interrupted')
        
if __name__ == '__main__':
    menu()