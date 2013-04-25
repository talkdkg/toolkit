def gcd(a: Int, b: Int): Int =
	if (b == 0) a else gcd(b, a % b)

println("gcd for 47 and 13  " + gcd(47, 13))
println("gcd for 12 and 6  " + gcd(12,6 ))
