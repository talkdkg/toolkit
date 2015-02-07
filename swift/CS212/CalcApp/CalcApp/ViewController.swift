//
//  ViewController.swift
//  CalcApp
//
//  Created by Kyle Dinh on 2/5/15.
//  Copyright (c) 2015 Kyle Dinh. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    var calc : Calc = Calc()
    
    @IBOutlet var dspScreen: UILabel!
    
    @IBAction func key_num_1 (sender: AnyObject) {
        calc.key_num(1)
        dspRefresh()
    }
    @IBAction func key_num_2 () {
        calc.key_num(2)
        dspRefresh()
    }
    @IBAction func key_num_3 () {
        calc.key_num(3)
        dspRefresh()
    }
    @IBAction func key_num_4 () {
        calc.key_num(4)
        dspRefresh()
    }
    @IBAction func key_num_5 () {
        calc.key_num(5)
        dspRefresh()
    }
    @IBAction func key_num_6 () {
        calc.key_num(6)
        dspRefresh()
    }
    @IBAction func key_num_7 () {
        calc.key_num(7)
        dspRefresh()
    }
    @IBAction func key_num_8 () {
        calc.key_num(8)
        dspRefresh()
    }
    @IBAction func key_num_9 () {
        calc.key_num(9)
        dspRefresh()
    }
    @IBAction func key_num_0 () {
        calc.key_num(0)
        dspRefresh()
    }
    @IBAction func key_clear () {
        calc.clear()
        dspRefresh()
    }
    @IBAction func key_equal () {
        calc.equal()
        dspRefresh()
    }
    @IBAction func key_plus () {
        calc.key_plus()
        dspRefresh()
    }
    @IBAction func key_minus () {
        calc.key_minus()
        dspRefresh()
    }
    
    func dspRefresh () {
        dspScreen.text = calc.display
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        println("ViewController load with calc object a \(calc.inputs[1])")
        dspRefresh()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

}

