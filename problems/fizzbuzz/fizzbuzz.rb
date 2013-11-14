def transFizzBuzz(i)
   if (((i % 3) == 0) && ((i % 5)) == 0) 
      return "FizzBuzz"
   end
   if ((i % 3) == 0) 
      return "Fizz"
   end
   if ((i % 5) == 0) 
      return "Buzz"
   end
   return i
end

(1..100).step(1) do |i|
   puts(transFizzBuzz(i))
end
