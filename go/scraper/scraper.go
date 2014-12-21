package main
import (
    "fmt"
    "log"
    "github.com/PuerkitoBio/goquery"
)

func main() {
    var doc *goquery.Document
    var e error

    if doc, e = goquery.NewDocument("http://kyledinh.com/index.html"); e != nil {
        log.Fatal(e)
        fmt.Printf("ERR: Could not find website")
    }

    fmt.Printf("Parsing doc!\n")
    // Find the review items (the type of the Selection would be *goquery.Selection)
    doc.Find("section").Each(func(i int, s *goquery.Selection) {
        // For each item found, get the band and title
        name := s.Find("h1").Text()
        date := s.Find("h2").Text()
        desc := s.Find("h4").Text()
        fmt.Printf("Section %d: %s (%s)\n\t\t%s\n\n", i + 1, name, date, desc)
    })
}
