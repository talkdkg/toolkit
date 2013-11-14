#!/usr/bin/env python3

def transFizzBuzz(i):
   if (((i % 3) == 0) and ((i % 5)) == 0): 
      return "FizzBuzz"
   if ((i % 3) == 0): 
      return "Fizz"
   if ((i % 5) == 0): 
      return "Buzz"
   return i

for i in range(1,100):
   print(transFizzBuzz(i))
