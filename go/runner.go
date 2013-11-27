package main

import (
   "fmt"
   "time"
)

func simulateEvent(name string, timeInSecs int64) {
   // sleep for a while to simulate time consumed by event
   fmt.Println("Started ", name, ": Should take", timeInSecs, "seconds.")
   time.Sleep(time.Duration(timeInSecs) * time.Second)
   fmt.Println("Finished ", name)
}

func main() {
   go simulateEvent("100m sprint", 10)
   go simulateEvent("Long jump", 6)
   go simulateEvent("High jump", 3)

   time.Sleep(12 * 1e9)
}
