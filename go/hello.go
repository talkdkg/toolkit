package main

import "fmt"

func main() {

    msg, dest := "Hello", "France"
    a := [...]string{"Alpha","Beta","Delta"}
    for i := 0; i < 10; i++ {

        fmt.Printf("%s %s %v\n", msg, dest, i)
    }
    fmt.Printf("%s %s %s \n", a[0], a[1], a[2])
}
