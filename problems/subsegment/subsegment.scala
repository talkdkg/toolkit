def trimWords(lines: List[String]) = lines flatMap { line =>
   "[a-zA-Z]+".r findAllIn line map (_.toLowerCase)
}

def treeify(arr: Array[Int], num: Int, max: Int, pos: Int) : Array[Int] = {
   val quotient = num / max
   val remainder = num % max

   arr(pos) = remainder
   if (quotient < max) { arr(pos+1) = quotient }
   if (quotient >= max) { treeify(arr, quotient, max, pos+1) }
   return arr
}

//-------------------------------
// subsegment will take an input.txt -> matrix of indexes of occurances
// matrix -> permutate all combos to -> results -> filter to -> answers
// Written by: Kyle Dinh @ https://github.com/kyledinh/toolkit/tree/master/problems/subsegment
// scala 2.10.1
//-------------------------------

val file = io.Source.fromFile("input.txt","utf-8")
val lines = file.getLines.toList
val depth = lines(0).toInt
val target = lines.slice(1, depth+1)
val src = trimWords(lines(depth +1).split(" ").toList)
val breath = target.map(t => src.count(_ == t)).max     

//val matrix = Array.ofDim[Int](depth, breath) 
val matrix = Array.fill(depth, breath)(-1)

println("Target: " + target.mkString(" "))
println("depth " + depth + ", breath " + breath)
println("Src length: " + src.length)

for { x <- 0 to depth-1 } yield {
   var y = 0;
   // fill the array with -1 as initial value
   //for { k <- 0 to breath-1 } yield { matrix(x)(k) = -1 }

   for { i <- 0 to src.length-1 } yield {
      if (src(i) == target(x)) {
         println("Found @ " + i + " " + src(i) + " for " + target(x))
         matrix(x)(y) = i
         y = y+1
      }
   }
}

for { x <- 0 to depth-1 } yield {
   println(x + " row of matrix " + matrix(x).deep.mkString(" "))
}

/*
matrix(0) 0, 4, 9
      (1) 2, 6, 11
      (2) 3, 8, 13
      (3) 7, 12

combos:
0,2,3,7
4,2,3,7
9,2,3,7
...
*/

// Now, permutate through the matrix for each combonation; a num from each row(depth)
val permutation = Array.fill(depth)(0)
var results = List[Array[Int]]()

for { x <- 0 to math.pow(breath, depth).toInt -1 } yield {
   var arr = Array.fill(depth)(-1)
   var combo = treeify(permutation, x, breath, 0)

   for { i <- 0 to arr.length-1 } yield {
      arr(i) = matrix(i)(combo(i))
   }
   val distance = arr.max - arr.min
   arr = arr :+ distance
   println(arr.mkString(" "))

   // reject combos with a -1 from results; incomplete combos
   if (!arr.contains(-1)) { results = results :+ arr } 

   //println("For  " + x +" : " + combo.mkString(" ")  + "   " + arr.mkString(" ")  + "  : " + distance ) 
}

println("Number of possible combos: " + results.length) 

if (results.length == 0) {
   println("NO SUBSEGMENT FOUND")
} else {
   val answers = results.sortWith(_(depth) < _(depth))
   val min_num = answers.head(depth) 
   def printList(arr: Array[Int]): Unit = { println(arr.mkString(" "))}
   println("Your answer(s) for shortest substring with the length of : " + min_num)
   answers.filter(_(depth) == min_num).foreach(printList)
}
