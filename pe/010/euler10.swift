// array of primes unders 2million
// sum the primes in array

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

let limit = 2000000
let primes = filter(2...limit, make_isprime())

var answer = 0;

for p in primes {
	answer += p
	println(answer)
}


