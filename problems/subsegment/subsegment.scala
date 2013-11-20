def trimWords(lines: List[String]) = lines flatMap { line =>
   "[a-zA-Z]+".r findAllIn line map (_.toLowerCase)
}

val file = io.Source.fromFile("input.txt","utf-8")
val lines = file.getLines.toList
val num = lines(0).toInt
val target = lines.slice(1, num+1)
val src = trimWords(lines(num +1).split(" ").toList)
val max = target.map(t => src.count(_ == t)).max     
val matrix = Array.ofDim[Int](num, max) 

println("====" + max)
println("Target " + target.mkString(" "))
println("Num " + num)
println("Src " + src.length)

for { j <- 0 to num-1 } yield {
   var cnt = 0;
   for { i <- 0 to src.length-1 } yield {
      if (src(i) == target(j)) {
         println("Found @ " + i + " " + src(i) + " for " + target(j))
         matrix(j)(cnt) = i
         cnt = cnt +1
      }
   }
}



/*
matrix(0) 0, 4, 9
      (1) 2, 6, 11
      (2) 3, 8, 13
      (3) 7, 12

0,2,3,7
4,2,3,7
9,2,3,7
*/

