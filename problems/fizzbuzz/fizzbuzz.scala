def transFizzBuzz(i: Int): String = {
   if (((i % 3) == 0) && ((i % 5)) == 0) {
      return "FizzBuzz"
   }
   if ((i % 3) == 0) {
      return "Fizz"
   }
   if ((i % 5) == 0) {
      return "Buzz"
   }
   return i.toString
}

for { i <- 1 to 100 } yield println(transFizzBuzz(i))
