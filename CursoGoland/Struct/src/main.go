package main

import "fmt"

type Person struct {
	name  string
	age   int
	email string
}

func (p *Person) hi() {
	fmt.Println("Hi, my name is", p.name)
}

func main() {
	//instance of struct
	var people Person
	people.name = "Steven"
	people.age = 26
	people.email = "5Hr6r@example.com"

	fmt.Println(people)

	p := Person{"Steven", 26, "5Hr6r@example.com"}
	p.age = 27

	fmt.Println(p)

	p2 := Person{"Alex", 27, "5Hr6r@example.com"}
	fmt.Println(p2)

	//pointers

	var x int = 10
	fmt.Println(x)
	edit(&x)
	fmt.Println(x)

	//instancia

	k := Person{"Steven", 26, "5Hr6r@example.com"}
	k.hi()
}

func edit(x *int) {
	*x = 20
	fmt.Println(x)
}
