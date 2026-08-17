from conceptoClase import *
import random

def persona1():

    nombres_mujeres = ["MARIA CARMEN", "MARIA",   "CARMEN",  "ANA MARIA",   "JOSEFA",  "ISABEL",
                       "MARIA PILAR", "MARIA DOLORES",   "LAURA",   "MARIA TERESA", "ANA", "CRISTINA", "MARTA",
                       "MARIA ANGELES",   "FRANCISCA",   "LUCIA",   "MARIA ISABEL", "MARIA JOSE",  "ANTONIA",
                       "DOLORES", "SARA", "PAULA",   "ELENA",   "MARIA LUISA", "RAQUEL",  "ROSA MARIA",  "PILAR",
                       "CONCEPCION",  "MANUELA", "MARIA JESUS", "MERCEDES", "JULIA",   "BEATRIZ", "NURIA",   "SILVIA",
                       "ROSARIO", "JUANA",   "ALBA", "IRENE",   "TERESA",  "ENCARNACION", "PATRICIA", "MONTSERRAT",
                       "ANDREA",  "ROCIO",   "MONICA",  "ROSA", "ALICIA",  "MARIA MAR",   "SONIA",   "SANDRA",
                       "ANGELA",  "MARINA",  "SUSANA",  "NATALIA", "YOLANDA", "MARGARITA",   "MARIA JOSEFA", "CLAUDIA", "EVA", "MARIA ROSARIO",
                       "INMACULADA",  "SOFIA",   "MARIA MERCEDES",  "CARLA",   "ANA ISABEL",  "ESTHER",  "NOELIA",  "VERONICA", "ANGELES", "NEREA",
                       "CAROLINA", "MARIA VICTORIA",  "EVA MARIA",   "INES", "MIRIAM",  "MARIA ROSA",  "DANIELA", "LORENA",  "ANA BELEN",   "MARIA ELENA",
                       "MARIA CONCEPCION", "VICTORIA", "AMPARO",  "MARIA ANTONIA",   "CATALINA", "MARTINA", "LIDIA",   "ALEJANDRA",   "CELIA",
                       "MARIA NIEVES", "CONSUELO", "OLGA", "AINHOA",  "FATIMA",  "GLORIA",  "EMILIA",  "MARIA SOLEDAD",   "CLARA",   "MARIA CRISTINA"]

    nombre = ["HUGO", "RICARDO", "SALVADOR", "GUILLERMO", "EMILIO", "GABRIEL", "MARC",
              "GONZALO", "JULIO", "JULIAN", "MOHAMED", "JOSE MIGUEL", "TOMAS", "MARTIN",
              "AGUSTIN", "JOSE RAMON", "NICOLAS", "ISMAEL", "JOAN", "FELIX", "SAMUEL",
              "CRISTIAN", "AITOR", "LUCAS", "HECTOR", "JUAN FRANCISCO", "IKER", "JOSEP",
              "JOSE CARLOS", "ALEX", "MARIANO", "DOMINGO", "SEBASTIAN", "ALFREDO", "CESAR",
              "JOSE ANGEL", "FELIPE", "JOSE IGNACIO", "VICTOR MANUEL", "RODRIGO", "LUIS MIGUEL",
              "MATEO", "JOSE FRANCISCO", "JUAN LUIS", "XAVIER", "ALBERT"]

    """ apellidos = [] """

    identificacion = [str(random.randint(1, 100000))]
    telefono = [str(random.randint(300000000, 359999999))]
    estatura = [round(random.uniform(1.30, 2.00), 2)]
    edad = [random.randint(18, 90)]
    peso = [round(random.uniform(45.0, 100.0), 1)]
    sexo = ["M", "F"]

    """ for x in sexo:
        print(x) """

    nombre = random.choice(nombre)
    nombres_mujeres = random.choice(nombres_mujeres)
    identificacion = random.choice(identificacion)
    telefono = random.choice(telefono)
    estatura = random.choice(estatura)
    edad = random.choice(edad)
    peso = random.choice(peso)
    sexo = random.choice(sexo)

    pers1 = Persona(nombre, identificacion, telefono,edad, peso, sexo, estatura)
    return pers1

    pers2 = Persona(nombre, identificacion, telefono,edad, peso, sexo, estatura)
    return pers2
