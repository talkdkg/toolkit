
/*
Assignment - 212 - Rock/Paper/Scissors Data
In a playground, create the following structs. Write code that instantiates and tests each struct.
The RPS enum: The RPS enum should have three cases: Rock, Paper, and Scissors. It should have an init method that randomly creates an instance with the value RPS.Rock, RPS.Paper, and RPS.Scissors with equal probability. It shoudl also conform to the Printable protocol by including a String property named description.
We did not spend a lot of time on enumerations. I have include the CoinToss enum at the bottom of this assignment to act as a pattern for the RPS enum. If you are having trouble make sure that you post to the discussion board.
The Outcome enum: This is a simple enum with three cases: Win, Loss, and Tie. It should also conform the Printable protocol.
The RPSMatch:  This struct represents a single Rock Paper Scissors match. It should have the following properties:
playerMove: RPS
opponentMove: RPS
outcome: Outcome
description: string
The outcome and description properties should be calculated properties. The description should be in the form “Rock vs. Paper. Loss.” or “Scissors vs. Scissors. Tie.”
What to submit: Define all of these items in a playground, and instantiate at least one RPSMatch instance and test its description.
*/



// Kyle Dinh
import UIKit

enum RockPaperScissors: Printable {
    
    case Rock, Paper, Scissors
    
    init() {
        let randomeNumber = arc4random_uniform(3)
        self = .Rock
        if randomeNumber == 1 { self = .Paper }
        if randomeNumber == 2 { self = .Scissors }
    }
    
    // the description property from the Printable protocol
    var description: String {
        switch (self) {
        case .Rock:
            return "Rock"
        case .Paper:
            return "Paper"
        case .Scissors:
            return "Scissors"
        }
    }
}

class RPSGame: Printable {
    var oppenentHand : RockPaperScissors = RockPaperScissors()
    var playerHand : RockPaperScissors = RockPaperScissors()
    
    var description: String {
        if oppenentHand == playerHand {
            return "Tied with \(playerHand.description)"
        }
        if oppenentHand == .Rock && playerHand == .Paper {
            return "Win with \(playerHand.description) over \(oppenentHand.description)"
        }
        if oppenentHand == .Paper && playerHand == .Scissors {
            return "Win with \(playerHand.description) over \(oppenentHand.description)"
        }
        if oppenentHand == .Scissors && playerHand == .Rock {
            return "Win with \(playerHand.description) over \(oppenentHand.description)"
        }
        
        return "Lost with \(playerHand.description) by \(oppenentHand.description)"
    }
    
}


// A sample instantiation of a CoinToss
let hand1 = RockPaperScissors()
hand1.description

let hand2 = RockPaperScissors()
hand2.description

let game1 = RPSGame()
game1.description

let game2 = RPSGame()
game2.description

let game3 = RPSGame()
game3.description

let game4 = RPSGame()
game4.description



