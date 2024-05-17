package main

import (
	"fmt"
)

func main() {
	//matrix

	/*
		var matrix [5]int
		var matrix = [5]int{0, 0, 0, 0, 0}
	*/
	var matrix = [...]int{0, 0, 0, 0, 0}

	matrix[0] = 1
	matrix[1] = 2
	matrix[2] = 3

	fmt.Println(matrix)

	for i := 0; i < len(matrix); i++ {
		fmt.Println(matrix[i])
	}

	//range
	for index, value := range matrix {
		fmt.Println("index: ", index, "value: ", value)
	}

	//matrix bidimensional
	var matrix2 = [2][3]int{{1, 2, 3}, {4, 5, 6}}
	fmt.Println(matrix2)

	//slice
	slice := []string{"Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"}
	sliceNew := slice[0:5]
	fmt.Println(sliceNew)

	sliceNew = append(sliceNew, "Viernes")
	fmt.Println(sliceNew)

	sliceNew = append(sliceNew[0:2], sliceNew[3:]...)
	fmt.Println(sliceNew)

	fmt.Println(len(sliceNew))
	fmt.Println(cap(sliceNew))

	//make
	names := make([]string, 5, 10)
	names[0] = "Steven"
	fmt.Println(names)

	sliceNumber1 := []int{1, 2, 3, 4, 5}
	sliceNumber2 := make([]int, 5)
	copy(sliceNumber2, sliceNumber1)

	fmt.Println(sliceNumber1)
	fmt.Println(sliceNumber2)

	//maps

	colors := map[string]string{
		"red":   "#ff0000",
		"green": "#00ff00",
		"blue":  "#0000ff",
	}
	fmt.Println(colors)
	fmt.Println(colors["red"])
	colors["white"] = "#ffffff"

	fmt.Println(colors)

	//verify ok
	valor, ok := colors["red"]

	if ok {
		fmt.Println("existe")
	} else {
		fmt.Println("no existe")
	}
	fmt.Println(valor)

	//delete
	delete(colors, "red")

	for key, value := range colors {
		fmt.Printf("key: %s value: %s\n", key, value)
	}
}
