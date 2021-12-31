from capa_datos import *
from capa_usuario import *


def main():
    #coenxion
    nombreBaseDatos = 'inventario'
    objDB = SQL(nombreBaseDatos)
    while True:
        opcion = menu_principal()
        if opcion == 0:
            break
        elif opcion == 1: #Insertar
            #descomenta la linea 16, si deseas ver la parte grafica para el formulario de ingreso de datos
            # y comenta la linea 17
            #datosIngreso = captarDatosProductoGUI(titulo_producto, estructura_producto)
            datosIngreso = captarDatosProductoTXTx(titulo_producto, estructura_producto)
            if datosIngreso != None:
                comando = crearSQLcomandoInsert('productos',datosIngreso)
                respuesta_sql = objDB.ejecutar_dml(comando['comandoSQL'],comando['datos'])
                verMensajeDatos('Operación INSERT', respuesta_sql)
                stop()
            else:
                verMensajeDatos('Operación INSERT', "Erorr en la ingrese de datos por el usuario")
                stop()
            pass
        elif opcion == 2: #Consultar
            comando_sql = "SELECT rowid,* FROM productos;"
            respuesta_sql = objDB.ejecutar_dml(comando_sql) 
            verTablaDatos('Operación SELECT', etiquetas_producto, respuesta_sql)
            stop()
            pass
        elif opcion == 3: #Actualizar
            comando_sql = "SELECT rowid,* FROM productos;"
            respuesta_sql = objDB.ejecutar_dml(comando_sql) 
            verTablaDatos('Resgistros Activos:', etiquetas_producto, respuesta_sql)
            idReg = captarInt('Cual número de registro desea Actualizar? ')
            comando = crearSQLcomandoUpdate('productos', captarDatosProductoTXTx(titulo_producto, estructura_producto, respuesta_sql[idReg-1]),idReg)
            respuesta_sql = objDB.ejecutar_dml(comando['comandoSQL'],comando['datos'])
            verMensajeDatos('Operación UPDATE', respuesta_sql)
            stop()
            pass
        elif opcion == 4: #Borrar
            comando_sql = "SELECT rowid,* FROM productos;"
            respuesta_sql = objDB.ejecutar_dml(comando_sql) 
            verTablaDatos('Resgistros Activos:', etiquetas_producto, respuesta_sql)
            idReg = captarInt('Cual número de registro desea eliminar? ')
            comando_sql = "DELETE FROM productos WHERE rowid=?;"
            respuesta_sql = objDB.ejecutar_dml(comando_sql, [idReg])
            verMensajeDatos('Operación DELETE', respuesta_sql)
            stop()
            pass

    objDB.cerrarConexion()
    verMensajeDatos('Cerrar Aplicación', 'Gracias.')

    
if __name__ == '__main__':
    main()
