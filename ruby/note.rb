names = ["Bobby", "Ed", "Abba", "Dorren", "Camden", "Fran"]

names << "Greg"
names << "Herbert"
names = names.sort

#names.each with_index | name |
names.each do | name |
   puts name
end 

puts "---"
puts names[0..3].reverse

# Hashes

pets = {
   "dog" => "Fido",
   "cat" => "Toonces",
   "fish" => "Goldy"
}

animals = {
   2 => "Fido",
   3 => "Toonces",
   4 => "Goldy"
}

puts pets["dog"] 
puts animals[4]

animals.each do | index, name |
   puts " #{ index }. #{ name }"
end

def hello (str)  
  x = 4
  x.times do | y |
     puts  " #{ y.to_s }  Hello #{ str }"
  end
end

hello("Bob")
puts "Has key dog in pets? : #{ pets.has_key?("dog") }"
puts "Has value Goldy in pets? : #{ pets.has_value?("Goldy") }"

g_pets = pets.find_all{ | animal, name | name[0] == "G" }
puts g_pets.inspect
