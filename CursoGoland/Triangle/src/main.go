package main

import (
	"fmt"
	"math"
)

func main() {

	var lado1, lado2 float64
	const precision = 2

	fmt.Print("Lado 1: ")
	fmt.Scan(&lado1)

	fmt.Print("Lado 2: ")
	fmt.Scan(&lado2)

	area := (lado1 * lado2) / 2
	hipotenusa := math.Sqrt(math.Pow(lado1, 2) + math.Pow(lado2, 2))
	perimetro := lado1 + lado2 + hipotenusa

	//precision = 2 con *
	fmt.Printf("\n Area: %.*f ", precision, area)
	fmt.Printf("\n Hipotenusa: %*f ", precision, hipotenusa)
	fmt.Printf("\n Perimetro: %.2f ", perimetro)
}
