// Generator Pattern - Function that returns a channel
package main

import (
   "fmt"
//   "math/rand"
)

func f(left, right chan int) {
//   left <- rand.Intn(1e3) + <-right
   left <- 3 + <-right
}

func main() {
   const n = 10000
   leftmost := make(chan int)
   right := leftmost
   left  := leftmost

   for i := 0; i < n; i++ {
      right = make(chan int)
      go f(left, right)
      left = right
   }
   go func(c chan int) { c <- 8 }(right)
   fmt.Println(<-leftmost)
}
