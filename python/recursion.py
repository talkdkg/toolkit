#!/usr/bin/env python3

def sumarray(arr, total, pos):
   if pos < len(arr):
      total = sumarray(arr, total, pos+1) + arr[pos]
      print(total)
   return total

def sum2(arr):
   total = 0
   for i in range(0, len(arr)):
      total = total + arr[i] 
      print(total)
   return total

def sum3(arr):
   total = 0 
   if len(arr) > 0:
      total = arr[-1]
      print(total)
      total = total + sum3(arr[:-1])
   return total

def gcd(a, b):
   if b == 0:
      return a
   return gcd(b, a % b)

print("gcd of 245, 234 : ", gcd(245, 234))
print("gcd of 400, 88 : ",  gcd(400, 88))
print("gcd of 99, 36 : ", gcd(99, 36))


arr = [1,2,3]
print("sumarray of 1,2,3 :", sumarray(arr, 0, 0))

arr = [3,8,3]
print("sum2 of 3,8,3 :", sum2(arr))

arr = [23,43,4003]
print("sum3 of 23,43,4003 :", sum3(arr))

