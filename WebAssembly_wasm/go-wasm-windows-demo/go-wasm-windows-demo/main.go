package main

import (
    "syscall/js"
)

func add(this js.Value, args []js.Value) interface{} {
    if len(args) < 2 {
        return js.ValueOf(0)
    }
    return js.ValueOf(args[0].Int() + args[1].Int())
}

func greet(this js.Value, args []js.Value) interface{} {
    name := "mundo"
    if len(args) > 0 {
        name = args[0].String()
    }
    return js.ValueOf("Hola, " + name + " 👋")
}

func main() {
    js.Global().Set("add", js.FuncOf(add))
    js.Global().Set("greet", js.FuncOf(greet))
    select {}
}
