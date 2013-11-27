// Generator Pattern - Function that returns a channel
package main

import (
   "fmt"
   "math/rand"
   "time"
)

func boring(msg string) <-chan string {
    c := make(chan string)
    go func() {
       for i := 0; ; i++ {
          c <- fmt.Sprintf("%s %d", msg, i)
          time.Sleep(time.Duration(rand.Intn(1e3)) * time.Millisecond)
       }
    }()
    return c
}

func fanIn(input1, input2 <-chan string) <-chan string {
   c := make(chan string)
   go func() {
      for {
         select {
            case s := <-input1: c <- s
            case s := <-input2: c <- s
            case <-time.After(1 * time.Second):
               fmt.Println("Timed OUT!")
               return
         }
      }
   }()
   //go func() { for { c <- <-input1 } }()
   //go func() { for { c <- <-input2 } }()
   return c
}

func main() {
   c := fanIn(boring("Joe"), boring("Ann"))
   for i := 0; i < 100; i++ {
      fmt.Println(<-c)
   }
   fmt.Println("You are both boring. I'm leaving.")
}
