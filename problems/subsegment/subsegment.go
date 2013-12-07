package main

import (
   "bufio"
   "fmt"
   "log"
   "os"
   "regexp"
   "strconv"
   "strings"
)

/* Subsegment Problem
 * Written by: Kyle Dinh
 * https://github.com/kyledinh/toolkit/blob/master/problems/subsegment/subsegment.go
 * go version go1.1.1 darwin/amd64
 */

func ReadLines(path string) ([]string, error) {
   file, err := os.Open(path)
   if err != nil { return nil, err }
   defer file.Close()

   var lines []string
   scanner := bufio.NewScanner(file)
   for scanner.Scan() { lines = append(lines, scanner.Text()) }
   return lines, scanner.Err()
}

func trimWords(word string) (string) {
   wordRx := regexp.MustCompile("[^A-Za-z0-9 ]+")
   word = wordRx.ReplaceAllString(word, "")
   return strings.ToLower(word)
}

func mkMatrix(x, y, val int) ([][]int) {
   var row [][]int
   for i := 0; i < x; i++ {
      var block []int
      for j := 0; j < y; j++ {
         block = append(block, val)
      }
      row = append(row, block)
   }
   return row
}

func handleErr(err error) {
   if err != nil { log.Fatalf("Error with : %s", err) }
}

func maxCountInArrays(arr []string, src []string) (int) {
   max := 0
   for i := 0; i < len(arr); i++ {
      cnt := 0
      for j := 0; j < len(src); j++ {
         if arr[i] == src[j] { cnt++ }
      }
      if cnt > max { max = cnt }
   }
   return max
}

func permute(arr []int, num, max, pos int) ([]int) {
   quotient := num / max
   remainder := num % max
   arr[pos] = remainder
   if (quotient < max) { arr[pos+1] = quotient }
   if (quotient >= max) { permute(arr, quotient, max, pos+1) }
   return arr
}

func calcIntPow(x, y int) (int) {
   result := x
   for i := 1; i < y; i++ {
      result = result * x
      //fmt.Println("x : %d ", result)
   }
   return result
}


func main() {
   var depth, breath int
   var keywordArr, segmentArr, lines []string
   var err error

   lines, err = ReadLines("input.txt")
   handleErr(err)

   depth, err = strconv.Atoi(lines[0])
   handleErr(err)

   keywordArr = lines[1:depth +1]
   segmentArr = strings.Fields(trimWords(lines[depth +1]))

   breath = maxCountInArrays(keywordArr, segmentArr)
   matrix := mkMatrix(depth, breath, -1)

   fmt.Println("keywordArr are : ", keywordArr)
   fmt.Println("segmentArr are : ", segmentArr)
   fmt.Println("length : ", len(segmentArr))
   fmt.Println("breath : ", breath)
   fmt.Println("depth : ", depth)

   fmt.Printf("matrix : %-8T %2d %v\n", matrix, len(matrix), matrix)

   //permutation := []
//   var results [][]int
   num_possible := calcIntPow(breath, depth)
   fmt.Println("# of purmutations : ", num_possible)

}

