//---------------------------------
// permuations of a 2d array
// treeify will give you a combonation for each number
// max is the breath for each unit in your combonation
// pos is the depth, always starts at 0 
//---------------------------------

def treeify(arr: Array[Int], num: Int, max: Int, pos: Int) : Array[Int] = {
    val quotient = num / max
    val remainder = num % max

    arr(pos) = remainder
    if (quotient < max) { arr(pos+1) = quotient }
    if (quotient >= max) { treeify(arr, quotient, max, pos+1) }
    return arr
}

val comboArray = Array.fill(4)(0)

for { x <- 0 to math.pow(3, 4).toInt -1 } yield {
	var a = treeify(comboArray, x, 3, 0)
    println("For  " + x +" : " + a.mkString(" ")) 
}
