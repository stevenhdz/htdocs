<!DOCTYPE html>
<html> 
    <head> 
        <title>Unidad 4 - Ejemplo 3 Formulario con Diferentes Controles</title>
        <meta http-equiv="Content-Type" 
              content="text/html; charset=ISO-8859-1" />
        <!-- Para la presentación de este formulario no se requiere de
        código PHP solo HTML, se usó una plantilla CSS gratuita
        descargada de internet que se vincula en la siguiente línea.-->
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <section class="container">
            <div class="login">
                <h1>POR FAVOR LLENE ESTE FORMULARIO</h1>
                <!-- Se crea un formulario con diferentes tipos de controles
                para que el usuario pueda diligenciar los datos solicitados
                los datos serán enviados a una página distinta en la cual
                pueden ser procesados, puede ver que el método usado es
                POST y el argumento action tiene el valor "recibeDatos.php"
                que es la página que va a recibir y procesar los datos del
                formulario-->
                <form method="post" action="recibeDatos.php">
                    <p>
                        <label>
                            Nombre
                            <input type="text" name="nombre" 
                                   placeholder="Nombre Completo" 
                                   autofocus required>
                        </label>
                    </p>
                    <p>
                        <label>
                            Fecha de Nacimiento
                            <input type="date" name="fecha_nacimiento"
                                   placeholder="Fecha de Nacimiento">
                        </label>
                    </p>
                    <p> 
                        <label>
                            Tel&eacute;fono
                            <input type="text" name="telefono"
                                   placeholder="Tel&eacute;fono"> 
                        </label>
                    </p>
                    <p>
                        <label>
                            e-mail
                            <input type="mail" name="email" 
                                   placeholder="e-mail">
                        </label>
                    </p>
                    <p>
                        <label> Estado Civil</label><br />
                        <label>
                            <input type="radio" name="estadoCivil" 
                                   value="Casado"> 
                            Casado
                        </label>
                        <label>
                            <input type="radio" name="estadoCivil" 
                                   value="Soltero"> 
                            Soltero
                        </label>
                        <label>
                            <input type="radio" name="estadoCivil" 
                                   value="Unión Libre"> 
                            Uni&oacute;n Libre
                        </label>
                    </p>
                    <p>
                        <label>
                            Departamento
                            <select name="departamento">
                                <option value ="Amazonas">Amazonas</option>
                                <option value ="Antioquia">Antioquia</option>
                                <option value ="Arauca">Arauca</option>
                                <option value ="Atlántico">
                                    Atl&aacute;ntico
                                </option>
                                <option value ="Bolívar">Bol&iacute;var</option>
                                <option value ="Boyacá">Boyac&aacute;</option>
                                <option value ="Caldas">Caldas</option>
                                <option value ="Caquetá">Caquet&aacute;</option>
                                <option value ="Casanare">Casanare</option>
                                <option value ="Cauca">Cauca</option>
                                <option value ="Cesar">Cesar</option>
                                <option value ="Chocó">Choc&oacute;</option>
                                <option value ="Córdoba">C&oacute;rdoba</option>
                                <option value ="Cundinamarca">
                                    Cundinamarca
                                </option>
                                <option value ="Guainia">Guainia</option>
                                <option value ="Guaviare">Guaviare</option>
                                <option value ="Huila">Huila</option>
                                <option value ="La Guajira">La Guajira</option>
                                <option value ="Magdalena">Magdalena</option>
                                <option value ="Meta">Meta</option>
                                <option value ="Nariño">Nari&ntilde;o</option>
                                <option value ="Norte de Santander">
                                    Norte de Santander
                                </option>
                                <option value ="Putumayo">Putumayo</option>
                                <option value ="Quindío">Quind&iacute;o</option>
                                <option value ="Risaralda">Risaralda</option>
                                <option value ="San Andrés y Providencia">
                                    San Andr&eacute;s y Providencia
                                </option>
                                <option value ="Santander">Santander</option>
                                <option value ="Sucre">Sucre</option>
                                <option value ="Tolima">Tolima</option>
                                <option value ="Valle del Cauca">
                                    Valle del Cauca
                                </option>
                                <option value ="Vaupés">Vaup&eacute;s</option>
                                <option value ="Vichada">Vichada</option>
                            </select>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type="checkbox" name="hijos"> 
                            &iquest;Tiene hijos?
                        </label>
                    </p>
                    </p>
                    <input type="hidden" name="datoOculto" value="Esta
                           información esta oculta al usuario"> 
                    <p class="submit">
                        <input type="submit" >
                    </p>
                </form>
            </div>
        </section>
    </body>
</html>