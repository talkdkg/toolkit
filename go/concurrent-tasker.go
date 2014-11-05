package main

import (
	"bufio"
	"fmt"
	"log"
	"net"
	"os"
	"strings"
	"sync"
)

type Config struct {
	numOfChannels int
}

type task interface {
	process()
	print()
}

type factory interface {
	make(line string) task
}

func run(f factory, cfg Config) {
	var wg sync.WaitGroup

	in := make(chan task)

	wg.Add(1)
	go func() {
		s := bufio.NewScanner(os.Stdin)
		for s.Scan() {
			in <- f.make(s.Text())
		}
		if s.Err() != nil {
			log.Fatalf("Error reading STDIN: %s", s.Err())
		}
		close(in)
		wg.Done()
	}()

	out := make(chan task)

	for i := 0; i < cfg.numOfChannels; i++ {
		wg.Add(1)
		go func() {
			for t := range in {
				t.process()
				out <- t
			}
			wg.Done()
		}()
	}

	go func() {
		wg.Wait()
		close(out)
	}()

	for t := range out {
		t.print()
	}
}

type lookupFactory struct {
}

func (f *lookupFactory) make(line string) task {
	return &lookup{name: line}
}

type lookup struct {
	name       string
	err        error
	cloudflare bool
}

func (l *lookup) process() {
	nss, err := net.LookupNS(l.name)
	if err != nil {
		l.err = err
	} else {
		for _, ns := range nss {
			if strings.HasSuffix(ns.Host, ".ns.cloudflare.com.") {
				l.cloudflare = true
				break
			}
		}
	}
}

func (l *lookup) print() {
	fmt.Printf("%s, %v\n", l.name, l.cloudflare)
}

func main() {
	Cfg := Config{numOfChannels: 10}
	run(&lookupFactory{}, Cfg)
}
