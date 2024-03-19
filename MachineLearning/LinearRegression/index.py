# Importar bibliotecas
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

# Cargar datos reales desde un archivo CSV o cualquier otra fuente
# Asumamos que tienes un archivo CSV llamado 'datos.csv' con dos columnas: 'calidad_material' y 'precio'
# Puedes usar pandas para cargar los datos desde el archivo CSV

import pandas as pd

# Reemplaza 'ruta/al/archivo/datos.csv' con la ruta real de tu archivo CSV
datos = pd.read_csv('datos.csv')

# Separar las columnas en variables independientes (X) y dependientes (y)
X = datos['calidad_material'].values.reshape(-1, 1)
y = datos['precio'].values.reshape(-1, 1)

# Dividir los datos en conjuntos de entrenamiento y prueba
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Crear un modelo de regresión lineal
model = LinearRegression()

# Entrenar el modelo con los datos de entrenamiento
model.fit(X_train, y_train)

# Realizar predicciones en el conjunto de prueba
y_pred = model.predict(X_test)

# Imprimir los valores reales, predichos y aquellos que están justo en la línea
print("Valores reales vs. predichos:")
print("Calidad del Material | Precio Real | Precio Predicho (sugeridos)")
print("---------------------|--------------|------------------")
for i in range(len(X_test)):
    print(f"{X_test[i][0]:<20} | {y_test[i][0]:<12} | {y_pred[i][0]:.2f}")
    # Imprimir aquellos que están justo en la línea de regresión (+/- 0.1)
    if abs(y_test[i][0] - y_pred[i][0]) < 0.1:
        print("* En la línea de regresión *\n")

# Visualizar los resultados
plt.scatter(X_test, y_test, color='black', label='Datos reales')
plt.plot(X_test, y_pred, color='blue',
         linewidth=3, label='Regresión lineal')
plt.title('Regresión Lineal Simple para Predecir Precios')
plt.xlabel('Calidad del Material')
plt.ylabel('Precio')
plt.legend()
plt.show()
