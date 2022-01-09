""" Señor
Edison Valencia 

Calle 18A Sur 38-350
Medellin """
import random



nombre = [
              "HUGO", "RICARDO", "SALVADOR", "GUILLERMO", "EMILIO", "GABRIEL", "MARC",
              "GONZALO", "JULIO", "JULIAN", "MOHAMED", "JOSE MIGUEL", "TOMAS", "MARTIN",
              "AGUSTIN", "JOSE RAMON", "NICOLAS", "ISMAEL", "JOAN", "FELIX", "SAMUEL",
              "CRISTIAN", "AITOR", "LUCAS", "HECTOR", "JUAN FRANCISCO", "IKER", "JOSEP",
              "JOSE CARLOS", "ALEX", "MARIANO", "DOMINGO", "SEBASTIAN", "ALFREDO", "CESAR",
              "JOSE ANGEL", "FELIPE", "JOSE IGNACIO", "VICTOR MANUEL", "RODRIGO", "LUIS MIGUEL",
              "MATEO", "JOSE FRANCISCO", "JUAN LUIS", "XAVIER", "ALBERT"
         ]

es = [
    "CALLE", "CARRERA", "AVENIDA"
]

brujula = [
    "SUR", "NORTE", "OESTE", "ESTE"
]

letras = [
    "A", "B", "C", "D", ""
]


def main():
 nombres = random.choice(nombre)
 for nombres in nombre:
    archivo = open('pruebas.txt', 'a')
    archivo.write(f"\n{'-'*25}\nSeñor \n {nombres} \n {random.choice(es)} {random.randint(1, 900)}{random.choice(letras)} {random.choice(brujula)} {random.randint(1, 900)} - {random.randint(1, 900)}  Medellin")
    archivo.close()
    pass

if __name__=='__main__':
  main()