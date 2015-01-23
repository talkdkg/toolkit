func sumOfSquared(max: Int) -> Int {
	var sum = 0
	for i in 1...max {
		sum += i * i
		println(i)
	}
	return sum 
}

func squareASum(max: Int) -> Int {
	var sum = 0
	for i in 1...max {
		sum += i 
	}
	return sum * sum 
}


var num = sumOfSquared(10)
println("======= \(num)")

var sqr = squareASum(10)
println("======= \(sqr)")

var diff = squareASum(100) - sumOfSquared(100)
var answer = diff 
println("ANSWER: \(answer)")
