package com.kalrsn.game;

import java.util.ArrayList;
import java.util.Scanner;

public abstract class Game {

	Deck deck = null;
	ArrayList<Player> players = null;

	public static String WAR = "war";
	public static String POKER = "poker";
	public static String BLACKJACK = "blackjack";

	public Game() {

	}

	public static void main(String args[]) {
		Game game = null;
		String gameName = "";
		
		if (args.length == 0) {
			System.out.println("What game would you like to play?");
			Scanner scanner = new Scanner(System.in);
			gameName = scanner.next();

		} else {
			gameName = args[0];
		}

		if (gameName.equals(WAR)) {
			game = new War();
		}

		if (gameName.equals(POKER)) {
			game = new Poker();
		}

		System.out.println("gameName: " + gameName);
		game.startGame();
		game.gameSummary();
	
	}	

	protected void initPlayers() {
		deck = new Deck();
		players = new ArrayList<Player>();
		String name = "blank";
		System.out.println("How many players?");
		Scanner sc = new Scanner(System.in);
		int numPlayers = sc.nextInt();
		
		System.out.println("Enter names: ");
		
		for (int i=0; i<numPlayers; i++) {
			Scanner scanner = new Scanner(System.in);
			name = scanner.next();
			players.add(new Player(name));			
		}
		
		if (players.size() == 0) {
			players.add(new Player("Adam"));
			players.add(new Player("Bob"));
		}

	}

	protected void startGame() {
		System.out.println("You need to load a valid game.");
	}

	public void gameSummary() {
		System.out.println();
		System.out.println("====== GAME SUMMARY ======");
		System.out.println(deck.getRemainingCnt() + " cards left in the deck.");

		for (Player player : players) {
			System.out.println(player);
		}
		System.out.println();
	}

	protected abstract void playARound();

	protected void endRound() {
		for (Player player : players) {
			player.getHand().clear();
		}
	}

	protected int getHandValue(Card[] hand) {
		Card card = hand[0];
		int ord = card.rank().ordinal() +1;
		if (ord == 1) { ord = 14; }
		return ord;
	} 

	protected ArrayList<Card> dealAHand(Player player) {
		player.takeCard(deck.deal());
		return player.getHand();
	}

}
