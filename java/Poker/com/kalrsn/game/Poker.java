package com.kalrsn.game;

import java.util.ArrayList;
import java.util.Collections;


public class Poker extends Game {

	private int INX_STRAIGHTFLUSH = 0;
	private int INX_QUAD = 1;
	private int INX_FULLHOUSE = 2;
	private int INX_FLUSH = 3;
	private int INX_STRAIGHT = 4;
	private int INX_TRIP = 5;
	private int INX_2PAIR = 6;
	private int INX_PAIR = 7; 
	
	public void startGame() {
		initPlayers();
		System.out.println("Starting Game!");
		System.out.println("Num of players " + players.size());
		for (Player player : players) {
			System.out.println(player);
		}

		int roundsInDeck = 52 / (5 * players.size());

		try {
			for (int i=0; i<roundsInDeck; i++) {
				System.out.println();
				System.out.println(deck.getRemainingCnt() + " cards left in the deck.");				
				playARound();
			}
		} catch (Exception e) { System.out.println("Error:" + e); }	
	}

	protected void playARound() {
		System.out.println("Playing a round!");
		Player winningPlayer = null;
		Long winningHand = 0L;
		int n = 0;

		deck.shuffle();
		System.out.println("Deck Shuffled!");
		for (Player player : players) {

			ArrayList<Card> hand = dealAHand(player);
			char[] handHex = getHandValue(hand);
			String handString = new String(handHex);

			Long handValue = Long.parseLong(handString, 16);
			System.out.println(player.showHand());
			System.out.println("handValue: " + Long.toHexString(handValue));

			if ((handValue == winningHand) && (n>0)) {
				winningPlayer = null;
			}			
			if (handValue > winningHand) {
				winningHand = handValue;
				winningPlayer = player;	
			}
			n++;
		}	

		if (winningPlayer == null) {
			System.out.println("It's a tie!");	
		} else {
			winningPlayer.won();
			System.out.println("The winner is " + winningPlayer.getName() + " with " + descWinningHand(winningHand));	
		} 
		endRound();
	}	


	private String descWinningHand(Long winningHand) {
		String handDesc = "High Card";
		String handHex = Long.toHexString(winningHand);
		char hand[] = handHex.toCharArray();

		if ((hand.length == 6)) handDesc = "A Pair of " + Card.getHexRank(hand[0]) +"s";
		if ((hand.length == 7)) handDesc = "Two Pairs";
		if ((hand.length == 8)) handDesc = "Trips of " + Card.getHexRank(hand[0]) +"s";
		if ((hand.length == 9)) handDesc = "A " + Card.getHexRank(hand[0])+ " high straight.";
		if ((hand.length == 10)) handDesc = "A Flush, " + Card.getHexRank(hand[0])+ " high.";
		if ((hand.length == 11)) handDesc = "A Full House";
		if ((hand.length == 12)) handDesc = "Quads of " + Card.getHexRank(hand[0]) +"s";
		if ((hand.length == 13)) handDesc = "A " + Card.getHexRank(hand[0]) + " high straight flush.";		
		return handDesc;
	}

	protected char[] getHandValue(ArrayList<Card> hand) {
		long handValue = 0;
		char handHex[];
		Integer handInt[] = {0,0,0,0,0};

		String tmpStr = "";
		ArrayList<Integer> cards = new ArrayList<Integer>();

		for (Card card : hand) {
			Card.Rank rank = card.rank();
			int ord = rank.ordinal() +1;
			if (ord == 1) { ord = 14; }
			cards.add(ord);
			handValue += ord;
		}

		Collections.sort(cards);
		Collections.reverse(cards);
		int n = 0;
		for (Integer cardInteger : cards){
			handInt[n] = cardInteger;
			tmpStr += Integer.toHexString(cardInteger);
			n++;
		}
		tmpStr = "00000000" + tmpStr;
		handHex = tmpStr.toCharArray();
		handHex = checkPair(handHex, handInt);
		handHex = checkTwoPair(handHex, handInt);
		handHex = checkTrip(handHex, handInt);
		handHex = checkStraight(handHex, handInt);			
		handHex = checkFlush(handHex, hand);
		handHex = checkFullHouse(handHex);
		handHex = checkQuad(handHex, handInt);
		handHex = checkStraightFlush(handHex);
		return handHex;
	} 

	private char[] checkPair(char[] handHex, Integer[] handInt) {
		for (int i=4; i>1; i--) {
			if ((handInt[i] == handInt[i-1]) && (handInt[i] != handInt[i-2])) {
				handHex[INX_PAIR] = Integer.toHexString(handInt[i]).charAt(0);	
			}
		}
		if ((handInt[1] == handInt[0]) && (handInt[1] != handInt[2])) {
			handHex[INX_PAIR] = Integer.toHexString(handInt[1]).charAt(0);	
		}	
		return handHex;
	}

	private char[] checkTwoPair(char[] handHex, Integer[] handInt) {
		for (int i=4; i>1; i--) {
			if ((handInt[i] == handInt[i-1]) && (handInt[i] != handInt[i-2]) &&
					(Integer.toHexString(handInt[i]).charAt(0) != handHex[INX_PAIR])) {
				handHex[INX_2PAIR] = handHex[INX_PAIR];
			}		
		}
		if (((handInt[1] == handInt[0]) && (handInt[1] != handInt[2])) && 
				(Integer.toHexString(handInt[0]).charAt(0) != handHex[INX_PAIR])) {
			handHex[INX_2PAIR] = Integer.toHexString(handInt[1]).charAt(0);	
		}	
		return handHex;
	}	

	private char[] checkTrip(char[] handHex, Integer[] handInt) {
		if ((handInt[0] == handInt[1]) &&
			(handInt[0] == handInt[2])) {
			handHex[INX_TRIP] = Integer.toHexString(handInt[0]).charAt(0);			
		}
		if ((handInt[1] == handInt[2]) &&
			(handInt[1] == handInt[3])) {
			handHex[INX_TRIP] = Integer.toHexString(handInt[1]).charAt(0);
		}
		if ((handInt[2] == handInt[3]) &&
			(handInt[2] == handInt[4])) {
			handHex[INX_TRIP] = Integer.toHexString(handInt[2]).charAt(0);
		}		
		return handHex;
	}	

	private char[] checkStraight(char[] handHex, Integer[] handInt) {
		if ((handInt[0] - handInt[1] == 1) &&
				(handInt[1] - handInt[2] == 1) &&
				(handInt[2] - handInt[3] == 1) &&
				(handInt[3] - handInt[4] == 1)) {
			handHex[INX_STRAIGHT] = handHex[8];			
		}
		if ((handInt[0] - handInt[1] == 9) &&
				(handInt[1] - handInt[2] == 1) &&
				(handInt[2] - handInt[3] == 1) &&
				(handInt[3] - handInt[4] == 1)) {
			handHex[INX_STRAIGHT] = handHex[10];	// 5 high straight		
		}
		return handHex;
	}	
	
	private char[] checkFlush(char[] handHex, ArrayList<Card> hand) {
		if ((hand.get(0).suit().equals(hand.get(1).suit())) &&  
				(hand.get(0).suit().equals(hand.get(2).suit())) &&
				(hand.get(0).suit().equals(hand.get(3).suit())) &&
				(hand.get(0).suit().equals(hand.get(4).suit())))
		{ handHex[INX_FLUSH] = '1'; } // flush
		return handHex;
	}

	private char[] checkFullHouse(char[] handHex) {
		if ((handHex[INX_TRIP] != '0') && (handHex[INX_PAIR] != '0')) {
			handHex[INX_FULLHOUSE] = handHex[INX_TRIP];
		}		
		return handHex;
	}

	private char[] checkQuad(char[] handHex, Integer[] handInt) {
		if ((handInt[0] == handInt[1]) &&
			(handInt[0] == handInt[2]) &&
			(handInt[0] == handInt[3])) {
			handHex[INX_QUAD] = Integer.toHexString(handInt[0]).charAt(0);			
		}
		if ((handInt[1] == handInt[2]) &&
			(handInt[1] == handInt[3]) &&
			(handInt[1] == handInt[4])) {
			handHex[INX_QUAD] = Integer.toHexString(handInt[1]).charAt(0);	//	
		}
		return handHex;
	}

	private char[] checkStraightFlush(char[] handHex) {
		if ((handHex[INX_FLUSH] != '0') && (handHex[INX_STRAIGHT] != '0')) {
		    handHex[INX_STRAIGHTFLUSH] = handHex[INX_STRAIGHT];
		}
		return handHex;
	}

	protected ArrayList<Card> dealAHand(Player player) {
		for (int i=1; i<6; i++) {
			player.takeCard(deck.deal());
		}
		return player.getHand();
	}
}
