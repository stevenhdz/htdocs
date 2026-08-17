import numpy as np
from sys import getsizeof


# List
array = []
array = [1, 2, 3, 4, 5]
print(getsizeof(array))
# Array index find value in an array
print(array[0])
# Array append find insert
array.append(6)
# Array insert in a specific position
array.insert(2, 7)
# Array remove value
array.remove(7)
# Array pop value in a specific position
array.pop(1)
# Array delete in a specific position
del array[0]
print(array)
# Array slicing in an array from 1 to 3 (3 not included)
sub_array = array[1:3]
print(sub_array)
# Array length in an array
longitud = len(array)
print(longitud)

np_arreglo = np.array([1, 2, 3, 4, 5])
np_arreglo = np_arreglo * 2
print(np_arreglo)
