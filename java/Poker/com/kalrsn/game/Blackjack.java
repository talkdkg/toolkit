package com.kalrsn.game;

import java.util.ArrayList;

public class Blackjack extends Game {

	public void startGame() {
		initPlayers();
		System.out.println("Starting Game!");
		System.out.println("Num of players " + players.size());
		for (Player player : players) {
			System.out.println(player);
		}

		int roundsInDeck = 52 / (players.size());
		
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
		int winningHand = -1;
		int n = 0;

		deck.shuffle();
		System.out.println("Deck Shuffled!");
		for (Player player : players) {
			ArrayList<Card> hand = dealAHand(player);
			int handValue = getHandValue(hand);
			player.showHand();
			System.out.println("handValue: "+ handValue);

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
			System.out.println("The winner is " + winningPlayer.getName());	
		} 

		endRound();
	}	


	protected int getHandValue(ArrayList<Card> hand) {
		Card.Rank rank = hand.get(0).rank();
		int ord = rank.ordinal() +1;
		if (ord == 1) { ord = 14; }
		return ord;
	} 

	protected ArrayList<Card> dealAHand(Player player) {
		player.takeCard(deck.deal());
		return player.getHand();
	}

}