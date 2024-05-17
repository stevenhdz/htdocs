package main

import (
	"errors"
	"fmt"
	"log"
	"os"
	"strconv"
)

func devide(a, b int) (int, error) {
	if b == 0 {
		//fmt.Errorf("cannot divide by zero")
		return 0, errors.New("cannot divide by zero")
	}
	//controlar panic recover
	defer func() {
		if r := recover(); r != nil {
			fmt.Println("Error: ", r)
		}
	}()
	validateZero(b)
	return a / b, nil
}

func validateZero(divisor int) {
	if divisor == 0 {
		//panic
		panic("cannot divide by zero")
	}
}

func main() {
	//string to int
	str := "123" // "0S"
	num, err := strconv.Atoi(str)
	if err != nil {
		fmt.Println("Error: ", err)
	}
	fmt.Println("num: ", num)

	//devide error
	/*
		result, err := devide(10, 0)
	*/
	result, err := devide(10, 1)
	if err != nil {
		fmt.Println("Error: ", err)
		return
	}
	fmt.Println("result: ", result)

	//defer execute last
	//pilas de ejecucion
	defer fmt.Println("hello 3")
	fmt.Println("hello 1")
	fmt.Println("hello 2")

	file, err := os.Create("test.txt")
	if err != nil {
		fmt.Println("Error: ", err)
		return
	}

	defer file.Close()

	_, err = file.Write([]byte("Hello World"))
	if err != nil {
		fmt.Println(err)
		return
	}

	//logs
	log.Print("Este es un msj de log")
	log.Println("Este es un msj de log 2")
	log.SetPrefix("main():")
	//stopper
	log.Fatal("Este es un msj de log 3")
	log.Panic("Este es un msj de log 4")

}
