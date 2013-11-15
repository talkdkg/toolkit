// reads the dictionary; group the anagrams; print array of larges #s
val src = io.Source.fromFile("unixdict.txt", "utf-8")
val vls = src.getLines.toList.groupBy(_.sorted).values
val max = vls.map(_.size).max
val output = vls.filter(_.size == max).map(_.mkString(" ")).mkString("\n")
println(output)
