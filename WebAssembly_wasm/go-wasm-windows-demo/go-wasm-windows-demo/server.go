package main

import (
    "log"
    "net/http"
)

func main() {
    fs := http.FileServer(http.Dir("web"))
    log.Println("Sirviendo en http://localhost:8080")
    log.Fatal(http.ListenAndServe(":8080", fs))
}
