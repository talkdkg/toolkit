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
   rx := regexp.MustCompile("[^A-Za-z0-9 ]+")
   word = rx.ReplaceAllString(word, "")
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

func maxCountInArrays(arr []string, segments []string) (int) {
   max := 0
   for i := range arr {
      cnt := 0
      for j := range segments {
         if arr[i] == segments[j] { cnt++ }
      }
      if cnt > max { max = cnt }
   }
   return max
}

func containsIntInArray(arr []int, value int) (bool) {
   for i := 0; i < len(arr); i++ {
      if arr[i] == value { return true }
   }
   return false
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

func fillArray(length, value int) ([]int) {
   arr := make([]int, length)
   for i := 0; i < length; i++ {
      arr[i] = value
   }
   return arr
}

func maxInArray(arr []int) (int) {
   num := arr[0]
   for i := 0; i < len(arr); i++ {
      if arr[i] > num { num = arr[i] }
   }
   return num
}

func minInArray(arr []int) (int) {
   num := arr[0]
   for i := 0; i < len(arr); i++ {
      if arr[i] < num { num = arr[i] }
   }
   return num
}

func shortestSubsegment(arr [][]int) ([]int) {
   shortest := make([]int, 0)
   pos := len(arr[0]) -1
   num := 1000000  // find the system max int
   for i := 0; i < len(arr); i++ {
      combo := arr[i]
      if num > combo[pos] {
         num = combo[pos]
         shortest = combo
      }
   }
   return shortest
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

   for x := 0; x < depth; x++ {
      y := 0
      for i := 0; i < len(segmentArr); i++ {
         if segmentArr[i] == keywordArr[x] {
            println("Found @ ", i, " ", segmentArr[i], " for ", keywordArr[x])
            matrix[x][y] = i
            y = y+1
         }
      }
   }

   fmt.Printf("matrix : %-8T %2d %v\n", matrix, len(matrix), matrix)

   permutationArr := fillArray(depth, 0)
   results := make([][]int, 0)
   num_possible := calcIntPow(breath, depth)
   fmt.Println("# of purmutations : ", num_possible)

   for x := 0; x < num_possible; x++ {
      combo := permute(permutationArr, x, breath, 0)
      //fmt.Println("combo       : ", combo)
      arr := fillArray(depth, -1)
      for i := 0; i < len(arr); i++ {
         arr[i] = matrix[i][combo[i]]
      }
      //fmt.Println("permutation : ", arr)
      distance := maxInArray(arr) - minInArray(arr)
      arr = append(arr, distance)
      if !containsIntInArray(arr, -1) {
         results = append(results, arr)
      }
   }

   // Final output, shortest of all the possible combos
   if len(results) == 0 {
      fmt.Println("NO SUBSEGMENTS FOUND")
   } else {
      fmt.Println("# of results", len(results))
      fmt.Println("Shortest subsegment: ", shortestSubsegment(results))
   }
}

