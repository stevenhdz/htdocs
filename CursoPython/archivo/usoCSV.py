
import csv


""" https://datos.gov.co/  """
""" http://medata.gov.co/   in csv """

def datosCSV(documento):
    datoss = []
    with open(documento, newline='',encoding='utf-8') as csvfile:
        lineas = csv.reader(csvfile, delimiter=',')
        for row in lineas:
            datoss.append(row)

    datos=[] 
    for item in datoss[1:]: 
        CódigoInstitución = int(item[0])
        NombreInstitución = str(item[1])
        NúmeroIdentificaciónTributariaNIT = str(item[2])
        PrincipalSeccional = str(item[3])
        NaturalezaJurídica = str(item[4])
        Sectorm = str(item[5])
        CarácterAcadémico = str(item[6])
        CodDepartamento = int(item[7])
        DepartamentoDomicilio = str(item[8])
        CodMunicipio = int(item[9])
        MunicipioDomicilio = str(item[10])
        DirecciónDomicilio = str(item[11])
        TeléfonoDomicilio = str(item[12])
        NormadeCreación = str(item[13])
        FechaNormadeCreación = str(item[14])
        AcreditadaAltaCalidad = str(item[15])
        FechaAcreditación = str(item[16])
        ResolucióndelaAcreditación = str(item[17])
        VigenciadelaAcreditación = str(item[18])
        Estado = str(item[19])
        FechaActualizacion = str(item[20])
        PáginaWeb = str(item[21])
        datos.append([CódigoInstitución,NombreInstitución,NúmeroIdentificaciónTributariaNIT,PrincipalSeccional,NaturalezaJurídica,Sectorm,CarácterAcadémico,CodDepartamento,DepartamentoDomicilio,CodMunicipio,MunicipioDomicilio ,DirecciónDomicilio ,TeléfonoDomicilio ,NormadeCreación ,FechaNormadeCreación ,AcreditadaAltaCalidad ,FechaAcreditación ,ResolucióndelaAcreditación ,VigenciadelaAcreditación ,Estado ,FechaActualizacion ,PáginaWeb])
    return datos   

def main():
    nombredocumento = input("Nombre del documento seguido de la extension: ")
    data = datosCSV(nombredocumento)
    for x in data:
        print(x)

if __name__ == '__main__':
    main()