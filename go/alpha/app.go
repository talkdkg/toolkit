package main

import (
   "./com/kalrsn"
   "fmt"
)

func main() {
   sw := kalrsn.Stopwatch {}
   sw.Start()
   var p kalrsn.Person
   p.Name = "Frank"
   p.Age = 38
  
   fmt.Printf("This is a person %s and is %v \n", p.Name, p.Age)
   fmt.Printf("Duration to run this app %s \n", sw.Stop())
   fmt.Printf("Dur  : %s \n", sw.Dur.String())
   fmt.Printf("Beginning : %s \n", sw.Beginning.String())
   fmt.Printf("Ending    : %s \n", sw.Ending.String())

}

