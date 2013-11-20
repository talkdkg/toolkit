package main

import (
   "fmt"
   "strconv"
)

func transFizzBuzz(i int) (string) {
   if (i % 3) == 0 && (i % 5) == 0 {
      return "FizzBuzz"
   }
   if (i % 3) == 0 {
      return "Fizz"
   }
   if (i % 5) == 0 {
      return "Buzz"
   }
   return strconv.Itoa(i)
}

func main() {
   for i := 1; i < 101; i++ {
      fmt.Println(transFizzBuzz(i))
   }
}
