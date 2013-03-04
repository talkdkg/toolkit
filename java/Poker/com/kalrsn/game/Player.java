package com.kalrsn.game;

import java.util.ArrayList;

public class Player {

	private String name; 
	private int score;
	private ArrayList<Card> hand;
	private Long chips;

	public Player(String name) {
		this.name = name;
		this.score = 0;
		this.chips = new Long(500L);
		this.hand = new ArrayList<Card>();
	}

	public String getName() { return name; }
	public ArrayList<Card> getHand() { return hand; }
	public void setHand(ArrayList<Card> hand) {
		this.hand = hand;
	} 

	public void takeCard(Card card) {
		this.hand.add(card);
	}

	public void discard() { this.hand = null; }
	public void won() { this.score++; }
	public void lost() { this.score--; }
	public void addChips(int chips) { this.chips += chips; }
	public void lessChips(int chips) { this.chips -= chips; }

	public String showHand() { 
		String msg = this.name + "'s hand is ";
		for (Card card : this.hand) {
			msg += card.toString() + " ";
		}
		return msg;
	}
	public String toString() { return this.name + "'s score is " + score + " and with " + this.chips + " chips  "; }
	
}
