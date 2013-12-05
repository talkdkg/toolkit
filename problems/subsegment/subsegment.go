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
 */

func ReadLines(path string) ([]string, error) {
   file, err := os.Open(path)
   if err != nil {
      return nil, err
   }
   defer file.Close()

   var lines []string
   scanner := bufio.NewScanner(file)
   for scanner.Scan() {
      lines = append(lines, scanner.Text())
   }
   return lines, scanner.Err()
}

func trimWords(word string) (string) {
   wordRx := regexp.MustCompile("[^A-Za-z0-9 ]+")
   word = wordRx.ReplaceAllString(word, "")
   return strings.ToLower(word)
}

func handleErr(err error) {
   if err != nil {
      log.Fatalf("Error with : %s", err)
   }
}

func maxCountInArrays(arr []string, src []string) (int) {
   var max int = 0
   for i := 0; i < len(arr); i++ {
      var cnt int = 0
      for j := 0; j < len(src); j++ {
         if arr[i] == src[j] { cnt++ }
      }
      if cnt > max { max = cnt }
   }
   return max
}

func main() {
   var depth, breath int
   var lines, target, src []string
   var err error

   lines, err = ReadLines("input.txt")
   handleErr(err)

   depth, err = strconv.Atoi(lines[0])
   handleErr(err)

   target = lines[1:depth +1]
   src = strings.Fields(trimWords(lines[depth +1]))

   breath = maxCountInArrays(target, src)

   fmt.Println(depth)
   fmt.Println("Targets are : %q boody", target)
   fmt.Println("Fields are : ", src)
   fmt.Println("length : ", len(src))
   fmt.Println("breath : ", breath)

}

