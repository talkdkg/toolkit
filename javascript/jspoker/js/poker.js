
backsrc = "img/card_vr.png";
DECK = new Array();
PLAYERS = new Array();


function player(name, points, hand) {
	this.name=name;
	this.points=points;
	this.hand=hand;
}

function createPlayers() {
	var names = $('#playerform span :input');
	jQuery.each(names, function(i,v) {
		console.log("created name " + i + " : " + v.value);
		PLAYERS[i] = new player(v.value,0,new Array(5));
	});
	
	startGame();
}

function playerSetup() {
	var num = $('#numofplayers').val()
	/* limit placed to 3 players */
	if (/^[1-3]+$/.test(num)) {
		console.log("num of players: " + num);
		$('#setupform h3').text("Enter players names");
			
		for (var i=1; i < num; ++i) {
			$('#player').clone().appendTo('#playerform span');
		}
		$('#playerform').show();
		$('#numofplayers').hide();
		$('#num_player_submit').hide();
	} else {
		alert('We are only taking 1 to 3 players');
	}
}

function getDeck() {
	$.ajax({
		type: "GET",
		url: "deck.xml",
		dataType: "xml",
		success: parseXml
	});

	for (var i=0; i < 5; ++i) {
		$('#card'+i+' img').attr("src", backsrc);
	}
}

function parseXml(xml) {
	console.log("parseXml");
	DECK = [];
	$(xml).find("card").each(function() {
		DECK.push($(this).attr("face"));
	});
	redrawMessage();
}

function redrawMessage() {
	$('#message').empty();
	for ( var i=0, len=DECK.length; i<len; ++i ){
	  	$('#message').append(DECK[i] + " | ");
	}
	console.log("num of cards in the deck:" + DECK.length);
}

shuffle = function(o){ //v1.0
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

function shuffleDeck() {
	shuffle(DECK);
	redrawMessage();
}

function redrawCards() {
	jQuery.each(PLAYERS, function(i, player) {
		$('#hands table:eq('+i+') #playername').text(player.name);
		for (var n=0; n < 5; ++n) {
			var cardface = player.hand[n];
			console.log(player.name + " cardface :" + cardface);
			$('#hands table:eq('+i+') #card'+n+' img').attr("src", "img/card_" + cardface + ".png");
		}
	});
}

function deal() {
	jQuery.each(PLAYERS, function(i, player) {
		for (var n=0; n < 5; ++n) {
			player.hand[n] = DECK.pop();
		}
	});

	redrawCards();
	redrawMessage();
}

function startGame() {
	jQuery.each(PLAYERS, function(i, player) {
		if (i>0) {
			$('#playerhand').clone().appendTo('#hands');
		}
	});

	$('#setupform').hide();
	$('#controls').show();
}

function init() {
	$('#btn_start').click(function() {
		getDeck();
	});

	$('#btn_shuffle').click(function() {
		shuffleDeck();
	});
	
	$('#btn_deal').click(function() {
		if (DECK.length > (5*PLAYERS.length)) {
			deal();
		} else {
			alert('You do not have enough cards. \n Please get a new deck.');
		}
	});

	$('#num_player_submit').click(function() {
		playerSetup();
	});

	$('#setup_submit').click(function() {
		createPlayers();
	});
}

$(document).ready(function() {
	console.log('document is ready');
	$(":input").not(":button, :submit, :reset, :hidden").each( function() {
    	this.value = this.defaultValue;     
	});
	init();
});
