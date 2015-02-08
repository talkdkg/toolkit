//
//  CalcTest.swift
//  CalcApp
//
//  Created by Kyle Dinh on 2/7/15.
//  Copyright (c) 2015 Kyle Dinh. All rights reserved.
//

import XCTest

class CalcTest: XCTestCase {

    override func setUp() {
        super.setUp()
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }
    
    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
        super.tearDown()
    }

    func unitTestCalcClass() {
        // This is an example of a functional test case.
        var c = Calc()
        c.key_num(1)
        c.key_num(3)
        XCTAssert(c.inputs[0] == 13, "Pass insert numbers")
        c.key_plus()
        c.key_num(2)
        XCTAssert(c.inputs[1] == 2, "Pass second input")
        c.equal()
        XCTAssert(c.total == 15, "Pass add total")
        c.clear()
        XCTAssert(c.total == 0, "Pass clear total")
        c.key_num(2)
        c.key_num(0)
        c.key_minus()
        c.key_num(9)
        XCTAssert(c.total == 11, "Pass subtraction total")
        
    }


}
