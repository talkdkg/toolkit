//
//  CalcAppTests.swift
//  CalcAppTests
//
//  Created by Kyle Dinh on 2/5/15.
//  Copyright (c) 2015 Kyle Dinh. All rights reserved.
//

import UIKit
import XCTest

class CalcAppTests: XCTestCase {
    
    override func setUp() {
        super.setUp()
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }
    
    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
        super.tearDown()
    }
    
    func testViewController() {
        // This is an example of a functional test case.
        var v = ViewController()
        v.dspScreen = UILabel()
        
        v.key_num_3()
        v.key_num_4()
        XCTAssert(v.calc.inputs[0] == 34, "Pass insert numbers")
        v.key_plus()
        v.key_num_2()
        XCTAssert(v.calc.inputs[1] == 2, "Pass second input")
        v.key_equal()
        XCTAssert(v.dspScreen.text == "36", "Pass add total")
        v.key_clear()
        XCTAssert(v.dspScreen.text == "0", "Pass clear total")

        v.key_num_9()
        v.key_num_9()
        XCTAssert(v.calc.inputs[0] == 99, "Pass insert numbers")
        v.key_minus()
        v.key_num_8()
        XCTAssert(v.calc.inputs[1] == 8, "Pass second input")
        v.key_equal()
        XCTAssert(v.dspScreen.text == "91", "Pass second total")
        
    }
    
    func testPerformanceExample() {
        // This is an example of a performance test case.
        self.measureBlock() {
            // Put the code you want to measure the time of here.
        }
    }
    
}
