#!/usr/bin/env python3
import math
import pprint
import os.path
import sys

def trimWords(words):
   return words.replace(',', '').replace('.','').lower()

def maxCountInArrays(keywordArr, segmentArr):
   num = 0
   for i in range(0, len(keywordArr)-1):
      cnt = 0
      for j in range(0, len(segmentArr)-1):
         if keywordArr[i] == segmentArr[j]:
            cnt += 1
      if cnt > num:
         num = cnt
   return num

def readFileToArray(path):
   f = open(path)
   arr = [line.strip() for line in f] 
   f.close()
   return arr

def permute(arr, num, top, pos):
   quotient = num / top
   remainder = num % top
   arr[pos] = remainder
   if (quotient < top):
      arr[pos+1] = quotient
   if (quotient >= top):
      permute(arr, quotient, top, pos+1)
   return arr


## return row with the lowest value of the last column  
## [7,8,3,5,7]
## [7,8,3,5,2] <--------
## [7,8,3,5,4]

def shortestSubsegment(arr):
   shortest = []
   pos = len(arr[0])-1
   num = sys.maxsize 
   for i in range(0, len(arr)):
      combo = arr[i]
      if num > combo[pos]:
         num = combo[pos]
         shortest = combo
   return shortest


## Written by: Kyle Dinh @ https://github.com/kyledinh/toolkit/tree/master/problems/subsegment 
## keywordArr holds the wanted elements for the sub-segment
## segmentArr is the master segment or source segment

if __name__ == "__main__":
   sourcetextfile = 'input.txt'
   if len(sys.argv) > 1:
      if os.path.isfile(sys.argv[1]):      
         sourcetextfile = sys.argv[1]
      else:   
         print("invalid source file: ", sys.argv[1])
         sys.exit()

   print("input file: ", sourcetextfile)

   lines = readFileToArray(sourcetextfile)
   depth = int(lines[0])
   keywordArr = lines[1:depth+1]
   segmentArr = trimWords(lines[depth+1]).split(' ')
   breath = maxCountInArrays(keywordArr, segmentArr) 

   # Build matrix with the default -1 value
   matrix = [[-1 for i in range(breath)] for i in range(depth)]

   print("depth: ", depth)
   print("breath: ", breath)
   print(len(lines))
   print("src 1: ", segmentArr[0])

   pprint.pprint(matrix)
   pprint.pprint(keywordArr)
   pprint.pprint(segmentArr)

   # Update matrix with index of keyword finds

   for x in range(0, depth):
      y = 0
      for i in range(0, len(segmentArr)):
         if segmentArr[i] == keywordArr[x]:
            print("Found x: " + str(x) + " y: " + str(y) + " @ " + str(i) + "  " + str(segmentArr[i]) + " for " + str(keywordArr[x]))
            matrix[x][y] = i
            y += 1  

   for x in range(0, depth):
      print(" row of matrix for  " + " ".join(str(i) for i in matrix[x]))

   pprint.pprint(matrix)
   permutation = [0]*depth
   pprint.pprint(permutation)

   results = []
   num_possible = int(math.pow(breath, depth))

   print("total possible: " + str(num_possible))

   for x in range(0, num_possible):
      #arr = [-1 for x in range(depth)]
      n = depth+1
      arr = [-1]*n
      combo = permute(permutation, x, breath, 0)

      for i in range(0, depth):
         c = int(combo[i])
         arr[i] = matrix[i][c]

      distance = max(arr[0:depth]) - min(arr[0:depth])
      arr[depth] = distance

      if (-1 not in arr):
         results.append(arr)

   ## Outputing the results

   pprint.pprint(results)
   print("Number of possible combos: " + str(len(results)))

   if len(results) == 0:
      print("NO SUBSEGMENT FOUND")
   else:
      print(shortestSubsegment(results))

