package main

import (
	"fmt"
	"runtime"
	"time"
)

func main() {

	t := time.Now()
	hora := t.Hour()

	fmt.Println(hora)

	if hora < 12 {
		fmt.Println("Mañana")
	} else if hora < 18 {
		fmt.Println("Tarde")
	} else {
		fmt.Println("Noche")
	}

	//
	if t := time.Now(); t.Hour() < 12 {
		fmt.Println("Mañana")
	} else if t.Hour() < 18 {
		fmt.Println("Tarde")
	} else {
		fmt.Println("Noche")
	}

	switch t := time.Now(); {
	case t.Hour() < 12:
		fmt.Println("Mañana")
	case t.Hour() < 18:
		fmt.Println("Tarde")
	case t.Hour() < 24:
		fmt.Println("Noche")
	}

	os := runtime.GOOS

	switch os {
	case "darwin":
		fmt.Println("Go run darwin")
	case "freebsd":
		fmt.Println("Go run freebsd")
	case "linux":
		fmt.Println("Go run linux")
	case "windows":
		fmt.Println("Go run windows")
	default:
		fmt.Println("No soportado")
	}

	var i int = 1

	for i <= 10 {
		fmt.Println(i)
		i++
	}

	for j := 1; j <= 10; j++ {
		fmt.Println(j)
		//parar el bucle
		if j == 5 {
			break
			//continue
		}
	}

	//call function
	hello("Steven")

	//call function
	saludo := helloM("Steven")
	fmt.Println(saludo)

	//call function
	resultSum, resultMul := calc(1, 2)
	fmt.Println("Suma: ", resultSum, "Multiplicacion: ", resultMul)

	//call function
	sum, mul := calcs(1, 2)
	fmt.Println("Suma: ", sum, "Multiplicacion: ", mul)

}

func hello(name string) {
	fmt.Printf("Hello %s from hello()", name)
}

func helloM(name string) string {
	return fmt.Sprintf("\nHello %s from helloM()", name)
}

/**
* calc calculates the sum and multiplication of two integers.
*  x, y int
*  sum, mul int
 */
func calc(x, y int) (int, int) {
	sum := x + y
	mul := x * y
	return sum, mul
}

// calcs calculates the sum and multiplication of two integers.
//
// x, y int
// sum, mul int
func calcs(x, y int) (sum, mul int) {
	sum = x + y
	mul = x * y
	return sum, mul
}
