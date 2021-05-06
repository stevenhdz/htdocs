import sqlite3 as sql

class SQL:
    def __init__(self, basedatos):
        self.db = sql.connect(basedatos+".db")
        self.cursor = self.db.cursor()
        self.ejecutar_ddl(comando_crear_tabla_producto)

    def cerrarConexion(self):
        try:
            self.db.close()
        except sql.OperationalError as errorSQL:
            return "Error en el programa: "+str(errorSQL)

    #DDL: Lenguaje de definición de datos
    # - Create: Crear estructura
    # - Alter:  Modificar estructura
    # - Drop:   Eliminar estructura
    def ejecutar_ddl(self, comando_ddl):
        try:
            self.cursor.execute(comando_ddl)
        except sql.OperationalError as errorSQL:
            return "Error en el programa: "+str(errorSQL)


    #DML: Lenguaje de manupulación de datos
    # - Select = seleccionar o buscar
    # - Insert = añadir un registros
    # - Update = actualizar un registro
    # - Delete = borrar un regitro
    def ejecutar_dml(self, comando_dml, datos=None):
        tipo = comando_dml.split()[0].upper()
        if tipo == 'SELECT':
            return self.ejecutar_select(comando_dml)
        if tipo == 'INSERT':
            return self.ejecutar_insert(comando_dml, datos)
        if tipo == 'UPDATE':
            return self.ejecutar_update(comando_dml, datos)
        if tipo == 'DELETE':
            return self.ejecutar_delete(comando_dml, datos)
        return 'Tipo de acción DML no conocida'

    def ejecutar_select(self, comando):
        try:
            self.cursor.execute(comando)

            respuesta = self.cursor.fetchall()
            return respuesta

        except sql.OperationalError as errorSQL:
            return "Error en consulta: "+str(errorSQL)

    def ejecutar_insert(self, comando_sql, datos):
        try:
            self.cursor.execute(comando_sql, datos)
            self.db.commit()  #guardar los datos

            return "Operacion INSERT realizada" 

        except sql.OperationalError as errorSQL:
            return "Error ejecutando comando: "+str(errorSQL)
            
    def ejecutar_update(self, comando_sql, datos):
        try:
            self.cursor.execute(comando_sql,datos)
            self.db.commit()
            return "Actualizaciń Ok."

        except sql.OperationalError as errorSQL:
            return "Error en actulizar: " + str(errorSQL)

    def ejecutar_delete(self, comando_sql, datos):
        try:
            self.cursor.execute(comando_sql,datos)
            self.db.commit()     
            return "Eliminado con exito."

        except sql.OperationalError as errorSQL:
            return "Error en actulizar: "+str(errorSQL)

#==============================================

def crearSQLcomandoInsert(tabla, valores):
    if valores != None:
        datos = valores.values()
        campos = valores.keys()
        
        comando_sql = f"INSERT INTO {tabla} ("
        parametros = '('
        for etiqueta in campos:
            comando_sql += etiqueta + ','
            parametros += '?,'
        comando_sql += ')'
        comando_sql = comando_sql.replace(',)', ')')
        parametros += ')'
        parametros = parametros.replace(',)', ')')
        comando_sql += ' VALUES ' + parametros

        return {'comandoSQL':comando_sql, 'campos':list(campos), 'datos':list(datos)}
    else:
        return None


def crearSQLcomandoUpdate(tabla, valores, rowid):
    if valores != None:
        datos = list(valores.values())
        campos = list(valores.keys())
        
        comando_sql = f"UPDATE {tabla} SET "
        for etiqueta in campos:
            comando_sql += etiqueta + '=?,'
        comando_sql += ')'
        comando_sql = comando_sql.replace(',)', ' WHERE rowid=?;')
        datos.append(rowid)
        return {'comandoSQL':comando_sql, 'campos':list(campos), 'datos':list(datos)}
    else:
        return None


#====================================================0000

comando_crear_tabla_producto = """
    CREATE TABLE IF NOT EXISTS productos(
        codigo TEXT NOT NULL,
        nombre  TEXT NOT NULL,
        tipo TEXT NOT NULL,
        valor INTEGER NOT NULL
    );
"""
estructura_producto = [
    {'nombre':'codigo', 'texto':'Código del producto nuevo? ', 'tipo':'string'},
    {'nombre':'nombre', 'texto':'Nombre del producto? ', 'tipo':'string'},
    {'nombre':'tipo', 'texto':'Tipo del producto? ', 'tipo':'string'},
    {'nombre':'valor', 'texto':'Valor por unidad? ', 'tipo':'int'}
]
titulo_producto = 'INGRESO DE PRODUCTO'
etiquetas_producto = ['rowId', 'codigo', 'nombre', 'tipo', 'valor']
