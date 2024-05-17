package main

import (
	"fmt"
	"math/rand"
)

func main() {
	play()
}

func play() {
	numRandom := rand.Intn(100)
	var num int
	var intents int
	const maxIntents = 10

	for intents < maxIntents {
		intents++
		fmt.Printf("Ingrese un numero, Intento %d: ", maxIntents-intents+1)
		fmt.Scanln(&num)

		if num == numRandom {
			fmt.Println("Ganaste")
			playAgain()
			return
		} else if num > numRandom {
			fmt.Println("Menor")
		} else if num < numRandom {
			fmt.Println("Mayor")
		}
	}

	fmt.Println("Se agotaron los intentos, el numero era: ", numRandom)
	playAgain()
}

func playAgain() {
	var answer string

	fmt.Print("Quieres jugar de nuevo? (s/n): ")
	fmt.Scanln(&answer)

	switch answer {
	case "s":
		play()
	case "n":
		fmt.Println("Adios")
	default:
		fmt.Println("Opcion no valida")
		playAgain()
	}

}
