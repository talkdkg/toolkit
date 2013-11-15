def transFizzBuzz(i)
   if ((i % 3).zero? && (i % 5).zero?) 
      return "FizzBuzz"
   end
   if (i % 3).zero? 
      return "Fizz"
   end
   if (i % 5).zero? 
      return "Buzz"
   end
   return i
end

(1..100).step(1) do |i|
   puts(transFizzBuzz(i))
end
