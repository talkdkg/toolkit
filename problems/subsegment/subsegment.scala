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


for { x <- 0 to num-1 } yield {
   var y = 0;
   // fill the array with -1 as initial value
   for { k <- 0 to max-1 } yield { matrix(x)(k) = -1 }

   for { i <- 0 to src.length-1 } yield {
      if (src(i) == target(x)) {
         println("Found @ " + i + " " + src(i) + " for " + target(x))
         matrix(x)(y) = i
         y = y+1
      }
   }
}

for { x <- 0 to num-1 } yield {
   println(x + " row of matrix " + matrix(x).deep.mkString(" "))
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

