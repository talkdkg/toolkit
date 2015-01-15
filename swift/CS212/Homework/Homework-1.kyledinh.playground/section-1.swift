// Kyle Dinh, 2015-10-15 for CS212

import UIKit

// The generateArray function randomly creates an array of Int optionals
// The following questions ask you to perform different calculations based
// on random arrays created by the function. Each time you run the playground
// you should get different results. You can force the playground to run again
// using the Editor --> Execute Playground menu item. 

func generateArray() -> [Int?] {
    let size = Int(arc4random() % 20)
    var array = [Int?]()
    var value: Int?
    
    for i in 0...size {
        value = -10 + Int(arc4random() % 110)
        array.append(value >= 0 ? value : nil)
    }
    
    return array
}

// Question 1: Counting nils
//
// Write code that counts the number of nil values in array1

let array1 = generateArray()
var nIndex = array1.count - 1
var cntNils = 0

for i in array1 {
    if i == nil {
        cntNils += 1
    }
}

println(cntNils)
    
// Question 2: Mean
//
// Write code that calcuates the mean value of the non nil elements in array1.
// You do not necessarily need to write functions. You can start your code
// directly under the declaration of array2

let array2 = generateArray()
nIndex = array2.count - 1
var total = 0
var divisor = 0
var average = 0

for i in 0...nIndex {
    var item = array2[i]
    if item != nil {
        total += item!
        divisor += 1
        average = total / divisor
    }
}

println(average)


// Question 3: New Array
//
// Write code that creates a new array named nilFree that has the same elements
// as array3, except without the nil values. The elements in nilFree should be
// Ints, not Int optionals

let array3 = generateArray()
var intArr: [Int] = []
nIndex = array3.count - 1

for i in 0...nIndex {
    var item = array3[i]
    if item != nil {
        intArr.append(item!)
    }
}


// Question 4: Sort array
//
// Write code that will sort array4 using your own logic. You might want to 
// review the logic for Selection Sort or even Bubble Sort. Find a sort 
// algorithm that you like in a language that you are familiar with and then 
// translate it to Swift. Resist the temptation to find a sort online that
// is alread written in swift. Do not use Swift's sort method.

let array4 = generateArray()
var arrSorted : [Int] = []
nIndex = array4.count - 1

for i in 0...nIndex {
    
    if var item = array4[i] {
        if arrSorted.count == 0 {
            arrSorted.append(item)
        } else {

            var j : Int
            for j = 0; j < arrSorted.count; ++j {
                
                // insert before a larger item
                if item <= arrSorted[j] {
                    arrSorted.insert(item, atIndex: j)
                    break
                }
                
                // insert between 2 values (within range)
                if  j < arrSorted.count-1 {
                    if item >= arrSorted[j] && item <= arrSorted[j+1]  {
                        arrSorted.insert(item, atIndex: j+1)
                        break
                    }
                }
                // append at the end of the array
                if item >= arrSorted[j] && j == arrSorted.count-1 {
                    arrSorted.append(item)
                    break
                }
                
            }
        }
        print(arrSorted)
    }
}

print(arrSorted)




