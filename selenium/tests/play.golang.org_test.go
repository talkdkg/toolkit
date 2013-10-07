package selenium_test

import (
   "fmt"
   "github.com/sourcegraph/go-selenium"
   "time"
)

var code string = `
package main
import "fmt"

func main() {
   fmt.Println("Kyle")
}
`

func ExampleTest01() {
   var webDriver selenium.WebDriver
   var err error
   var elem selenium.WebElement

   caps := selenium.Capabilities(map[string]interface{}{"browserName": "firefox"})
   if webDriver, err = selenium.NewRemote(caps, "http://localhost:4444/wd/hub"); err != nil {
      fmt.Printf("Failed to open session: %s\n", err)
      return
   }
   defer webDriver.Quit()

   err = webDriver.Get("http://play.golang.org/?simple=1")
   if err != nil {
      fmt.Printf("Failed to load page: %s\n", err)
      return
   }

   if title, err := webDriver.Title(); err == nil {
      fmt.Printf("Page title: %s\n", title)
   } else {
      fmt.Printf("Failed to get page title: %s", err)
      return
   }

   // Enter code in textarea
   elem, _ = webDriver.FindElement(selenium.ByCSSSelector, "#code")
   elem.Clear()
   elem.SendKeys(code)

   elem, err = webDriver.FindElement(selenium.ByCSSSelector, "#run")
   if err != nil {
      fmt.Printf("Failed to find element: %s\n", err)
      return
   }

   if text, err := elem.Text(); err == nil {
      text = "OK"
      fmt.Printf("Repository: %s\n", text)
   } else {
      fmt.Printf("Failed to get text of element: %s\n", err)
      return
   }
   time.Sleep(time.Millisecond * 1000)

   // Click the run button
   btn, _ := webDriver.FindElement(selenium.ByCSSSelector, "#run")
   btn.Click()

   // Get the result
   div, _ := webDriver.FindElement(selenium.ByCSSSelector, "#output")

   output := ""
   // Wait for run to finish
   for {
      output, _ = div.Text()
      if output != "Waiting for remote server..." {
         break
      }
      time.Sleep(time.Millisecond * 100)
   }

   time.Sleep(time.Millisecond * 1000)
   
   // output:
   // Page title: Go Playground
   // Repository: OK

}
