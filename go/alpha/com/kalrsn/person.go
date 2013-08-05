package kalrsn

import(
   . "fmt"
)

type Person struct{
   Name string
   Age int
}
 
func PersonTest(){
   p1 := Person{"Bob",30}
   Printf("%s is %v \n", p1)
}
