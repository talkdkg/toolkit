# Module for sorting, written for Python 3
#!/usr/bin/env python3

version = '1'

def helloWorld():
   print("Hello Mundo!")

def swap(arr, x, y):
   tmp = arr[x]
   arr[x] = arr[y]
   arr[y] = tmp

def nativeSort(arr):
   arr.sort()
   return arr

def insertionSort(arr):
   
   for i in range(0, len(arr)): 
      for j in range(i, 0, -1): 
      #for j := i; j > 0; j--: 
         if (arr[j] < arr[j-1]): 
            swap(arr, j, j-1);
         else: 
            break
   return arr

def selectionSort(arr):
   min = 0 
   for i in range(0, len(arr)): 
      min = i;

      for j in range(i+1, len(arr)): 
      #for j := i+1; j < cnt; j++ {
         if (arr[j] < arr[min]): 
            min = j;
      #swap the min found with pointer i
      swap(arr, i , min);
   return arr

def quickSort(arr):
   return arr

