#!/usr/bin/env python3
import threading
import time

class CountdownThread(threading.Thread):
   def __init__(self, count):
      threading.Thread.__init___(self)
      self.count = count

   def run(self):
      while self.count > 0:
         print("Counting down", self.count
         self.count -= 1
         time.sleep(5)
      return

def countdown(count, name):
   while count > 0:
      print(name, " - counting down", count)
      count -= 1
      time.sleep(5)
   print(name, " has ended!")

if __name__ == '__main__':

   t1 = CountdownThread(10)
   t1.start()

   t2 = threading.Thread(target=countdown, args=(8, "Alfa", ))
   t2.start()

   print("Threads are strated")