package main

import (
    "fmt"
    "strconv"
)

type Fs func(int) string

func slow(x int) string { return "slow-" + strconv.Itoa(x) }
func heavy(x int) string { return "heavy-" + strconv.Itoa(x) }

func makefaster(f Fs) Fs {
    cache := make(map[int]string)
    return func(x int) string {
        if cache[x] == "" {
            var a = f(x)
            cache[x] = a
            return "added to cache : " + a
        }
        return "from cache : " + cache[x]
    }
}

func main() {
    n := 42

    fmt.Println(slow(n))
    f1 := makefaster(slow)
    f2 := makefaster(heavy)

    fmt.Println(f1(n))
    fmt.Println(f1(n))
    fmt.Println(f1(23))

    fmt.Println(f2(n))
    fmt.Println(f2(n))
    fmt.Println(f2(23))
}
