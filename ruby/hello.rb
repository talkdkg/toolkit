puts "Hello World"
puts "How much was your bill?"
bill = gets.to_f

puts "How much do you want to tip? (%)"
tip_p = gets.to_f
tip = bill * (tip_p * 0.01)

puts "Your tip is #{ sprintf("$%.2f", tip) } and your total is #{ sprintf("$%.2f", tip + bill) }" 

if (tip_p < 15)
   puts "You're cheap!"
elsif (tip_p > 20)
   puts "You're a big spender!"
else
   puts "Thanks for the tip!"
end

