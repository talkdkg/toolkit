package com.kalrsn.game;

import java.util.*;

public class Deck {

	private ArrayList<Card> deck = new ArrayList<Card>();

	public Deck(){
		for (Card.Suit suit : Card.Suit.values()) { 
			for (Card.Rank rank : Card.Rank.values()) {
				Card card = new Card(rank, suit);
				deck.add(card);
			}
		}
	}

	public int getRemainingCnt() {
		return deck.size();
	}

	public Boolean isEmpty() {
		return deck.isEmpty();
	}

	public void shuffle() {
		Collections.shuffle(deck);
	}

	public Card deal() {
		int topPos = deck.size()-1;
		Card card = deck.remove(topPos);
		return card;  
	}

}