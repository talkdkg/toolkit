//
//  Calc.swift
//  CalcApp
//
//  Created by Kyle Dinh on 2/5/15.
//  Copyright (c) 2015 Kyle Dinh. All rights reserved.
//

import Foundation

class Calc {
    var inputs : [Int] = [0,0]
    var position : Int = 0
    var total : Int = 0
    var operand : String = ""
    var display = ""

    func add() {
        total = inputs[0] + inputs[1]
        inputs[0] = total
    }
    
    func subtract() {
        total = inputs[0] - inputs[1]
        inputs[0] = total
    }
    
    func clear() {
        total = 0
        inputs = [0,0]
        operand = ""
        position = 0
        display = String(inputs[0])
    }

    func equal() {
        switch operand {
        case "ADD":
            add()
        case "MINUS":
            subtract()
        default:
            println("none")
            
        }
        display = String(total)
    }

    func key_plus () {
        operand = "ADD"
        if position == 0 {
            position = 1
        } else {
            inputs[1] = 0
        }
    }
    
    func key_minus () {
        operand = "MINUS"
        if position == 0 {
            position = 1
        } else {
            inputs[1] = 0
        }
    }
    
    func key_num(num: Int) {
        inputs[position] = (inputs[position] * 10) + num
        display = String(inputs[position])
    }
    
}