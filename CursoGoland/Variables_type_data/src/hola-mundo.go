package main

import (
	"fmt"
	"math"
	"strconv"

	"rsc.io/quote"
)

var globalVariable int

// constante no es necesario poner tipo
const Pi float32 = 3.14

const (
	X = 100
	Y = 0b1010 //binario
	Z = 0o12   //octal
	W = 0xFF   //hexadecimal
)

const (
	Domingo = iota + 1
	Lunes
	Martes
	Miercoles
	Jueves
	Viernes
	Sabado
)

func main() {
	fmt.Print("Hola mundo")
	fmt.Println(quote.Hello())

	//declaracion de variables
	/*
		var firstName, lastName string
		var age int
	*/

	/*
		var (
			firstName, lastName string
			age                 int
		)

		firstName = "Steven"
		lastName = "Hernandez"
		age = 26
	*/

	/*
		var (
			firstName string = "Steven"
			lastName  string = "Hernandez"
			age       int    = 26
		)
	*/

	/*
		var (
			firstName = "Steven"
			lastName  = "Hernandez"
			age       = 26
		)
	*/

	/*
		var firstName, lastName, age = "Steven", "Hernandez", 26
	*/

	firstName, lastName, age := "Steven", "Hernandez", 26
	age = 27

	fmt.Println(firstName, lastName, age)
	fmt.Println(Pi)
	fmt.Println(X, Y, Z, W)
	fmt.Println(Viernes)

	//int int8 int16 int32 int64
	//uint uint8 uint16 uint32 uint64 uintptr only positive
	var integer uint = 127
	//float32 float64
	var float float32 = 3.14

	fmt.Println(integer, float)
	//mirar maximos y minimos
	fmt.Println(math.MinInt8, math.MaxInt8)
	//boolean
	var valueBool bool = true
	fmt.Println(valueBool)
	//string
	fullName := "Steven Hernandez \t(alias: \"stevenhdz\")\n"
	fmt.Println(fullName)
	//bytes
	var a byte = 'a' //code ascii
	fmt.Println(a)

	s := "hola"
	fmt.Println(s[0])
	//rune unicode decimal code
	var r rune = '💕'
	fmt.Println(r)

	//predetermined values
	var (
		defaultInt    int
		defaultUint   uint
		defaultFloat  float32
		defaultBool   bool
		defaultString string
	)

	fmt.Println(defaultInt, defaultUint, defaultFloat, defaultBool, defaultString)

	//conversion
	var integer16 int16 = 50
	var integer32 int32 = 100

	fmt.Println(int32(integer16) + integer32)

	//conversion string a int
	sd := "100"
	i, _ := strconv.Atoi(sd)
	fmt.Println(i + i)

	//conversion int a string concat
	n := 42
	sd = strconv.Itoa(n)
	fmt.Println(sd + sd)

	//fmt printf and scanf
	var nameH string
	var lastNameH string
	var ageH int

	fmt.Print("Ingresa tu nombre: ")
	fmt.Scanln(&nameH, &lastNameH)
	fmt.Print("Ingresa tu edad: ")
	fmt.Scanln(&ageH)

	fmt.Printf("Hola %s %s, tienes %d años \n", nameH, lastNameH, ageH)

	//fmt sprintf and printf

	//%s string, %d int, %f float, %t boolean, %v variable, %T type, %b binary, %o octal, %x hexadecimal, %c character, %U unicode, %q quoted, %e exponential, %p pointer...
	nameQ := "Steven"
	ageQ := 26

	fmt.Printf("Hola %s, tienes %d años \n", nameQ, ageQ)

	greeting := fmt.Sprintf("Hola %s, tienes %d años", nameQ, ageQ)
	fmt.Println(greeting)

	//artimetica library math
	ass := 10
	bss := 3

	bss++ //increment
	bss-- //decrement

	bss = bss + int(math.Abs(float64(ass-bss))) //sum with variable value
	bss += 5                                    //sum with variable value
	bss -= 5                                    //sub with variable value
	bss *= 5                                    //mul with variable value
	bss /= 5                                    //div with variable value
	bss %= 5                                    //mod with variable value

	fmt.Println(ass + bss)  //sum
	fmt.Println(ass - bss)  //sub
	fmt.Println(ass * bss)  //mul
	fmt.Println(ass / bss)  //div
	fmt.Println(ass % bss)  //mod
	fmt.Println(ass & bss)  //and
	fmt.Println(ass | bss)  //or
	fmt.Println(ass ^ bss)  //xor
	fmt.Println(ass << bss) //shift left
	fmt.Println(ass >> bss) //shift right
	fmt.Println(ass &^ bss) //and not
	fmt.Println(ass == bss) //equal
	fmt.Println(ass != bss) //not equal
	fmt.Println(ass > bss)  //greater
	fmt.Println(ass < bss)  //less
	fmt.Println(ass >= bss) //greater or equal
	fmt.Println(ass <= bss) //less or equal

}
