package com.kalrsn.game;

public class Card {

	public enum Rank { ACE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN, JACK, QUEEN, KING } 
	public enum Suit { C, D, H, S }

	private final Rank rank; 
	private final Suit suit;

	public Card(Rank rank, Suit suit) {
		this.rank = rank;
 		this.suit = suit;
	}

	public Rank rank() { return rank; }
	public Suit suit() { return suit; }

	public String getRankFace(Rank rank) {
		int ord = rank.ordinal() +1;
		if (ord == 1) return "A";
		if (ord == 10) return "T";
		if (ord == 11) return "J";
		if (ord == 12) return "Q";
		if (ord == 13) return "K";
 		return String.valueOf(ord);
	}
	public static String getHexRank(char hex) {
		if (hex == 'e') return "A";
		if (hex == 'a') return "T";
		if (hex == 'b') return "J";
		if (hex == 'c') return "Q";
		if (hex == 'd') return "K";
 		return Character.toString(hex);
	}
	
	public String toString() { return getRankFace(rank) + suit; }	
	
}