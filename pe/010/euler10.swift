/* array of primes unders 2million
   sum the primes in array
*/

func make_isprime() -> (Int -> Bool) {
    var memo = [Int]()
    func isprime(n: Int) -> Bool {
        for prime in memo {
            if n % prime == 0 { return false }
        }
        memo.append(n)
        return true
    }
    return isprime
}

func isPrime(n: Int, max: Int) -> Bool {

	if n == 2 { return true }
	if n % 2 == 0 { return false }

	for var i = 3; i < max; i += 2 {
		if n % i == 0 && n != i {
			return false
		}
	}	
	return true
}


let limit = 2000000 
var answer = 0;
var primes : [Int] = []

for i in 2...limit {
	if isPrime(i, limit) { 
		primes.append(i)
	}
} 


for p in primes {
	answer += p
	println(answer)
}

println("== COUNT ===")
println(primes.count)


/*
142907828981
142909828950
142911828929
142913828922
== COUNT ===
148933

real	38m11.305s
user	37m49.397s
sys	0m6.719s
*/

