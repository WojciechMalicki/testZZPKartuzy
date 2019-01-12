var consoleArray = ['gra się zaczyna<br>'];
var consoleLayout = document.getElementById("console");
consoleLayout.innerHTML=consoleArray;
var wood = 100;
var stone = 100;
var people = 3000;
var gold = 1000;
var food = 200;
var iron = 500;
var men = 70;
var farm=
{
	cost:{food:0, gold:5, wood:20,men:5,iron:0, stone:5},
	give:{food:5, gold:5, wood:20,men:0,iron:0,stone:0},
	
};
var forge=
{
	cost:{food:8, gold:5, wood:5,men:3,iron:0, stone:20},
	give:{food:0, gold:0, wood:0,men:0,iron:10, stone:0},
	
};
var house={
	cost:{food:5, gold:5, wood:20,men:0,iron:3,stone:10},
	give:{food:0, gold:0, wood:0,men:5,iron:0,stone:0},
	
};
var totem={
	cost:{food:75,gold:200,wood:453,men:67,iron:56,stone:46},
};
//podstawowe wartości surowców dla każdego gracza
var posibilities = "LISTA TWOICH MOŻLIWOŚCI <br/> <br/>";
var ilosc_mozliwosci = 10;
var playerNames = "";
var uchwyt = 3;
var player_number;
var nick;
var turn=1;
var completed_turns=0;

function player(stn,gld,peo,nme,wod,frm,frg,hous,irn,fd,mn,nr,ttm)
{
	this.gold = gld;
	this.nick = nme;
	this.stone = stn;
	this.wood = wod;
	this.people = peo;
	this.farm = frm;
	this.forge = frg;
	this.house = hous;
	this.iron = irn;
	this.food = fd;
	this.men = mn;
	this.totem = ttm;
	this.number = nr;//zmienna wprowadzona do użycia nazwy objektu np. Player0 w onclicku linijki 243
}


function player_list()
{
    var write = " ";
    player_number = document.getElementById("liczba_graczy").value;
    if(player_number<5&&player_number>1){
    for(i=0;i<player_number;i++)
    {
        write += '<input type="text" class="placeholder" id = gracz_' + i + '><br/> <br/>';
    }
    document.getElementById("green").innerHTML = 'Podaj nazwy graczy  <br/> <br/>'+ write + '<br/> <br/> <button onclick="create_players()" class="build">Akceptuj</button>';
    }
}

function create_players()
{
    for(i=0;i<player_number;i++)
    {
    	playerNames = "";
        playerNames += document.getElementById("gracz_"  + i).value;
        if(i==0)
        {
        	var nick0 = document.getElementById("gracz_"  + i).value;
            Player0 = new player(stone,gold,people,nick0,wood,0,0,0,iron,food,men,0,0);
            write_players(Player0);
        }
        if(i==1)
        {

            var nick1 = document.getElementById("gracz_"  + i).value;
            Player1 = new player(stone,gold,people,nick1,wood,0,0,0,iron,food,men,1,0);  
            write_players(Player1);
        }
        if(i==2)
        {
            var nick2 = document.getElementById("gracz_"  + i).value;
            Player2 = new player(stone,gold,people,nick2,wood,0,0,0,iron,food,men,2,0);  
            write_players(Player2);
        }
        if(i==3)
        {
            var nick3 = document.getElementById("gracz_"  + i).value;
            Player3 = new player(stone,gold,people,nick3,wood,0,0,0,iron,food,men,3,0);  
            write_players(Player3);

        }
        playerNames += "<br/> <br/>"
    }
    document.getElementById("green").innerHTML = "";
    start();
}

function start()
{
    	
    	consolePrint("rozpoczyna się tura "+turn)
    	if(player_number==4)
    	{
	        if(turn==2)
	        {
	            document.getElementById("green").innerHTML = "Tura gracza o nicku: <br/> <br/>" + Player1.nick+"<br/><br/>";
	            document.getElementById("green").innerHTML += '<input type="button" value="zbuduj budynek" class="build" onclick="building_menu(Player1)"><br/><br/>';
	            document.getElementById("green").innerHTML += '<input type="button" value="zakończ ture" class="build" onclick="end_of_turn(Player1)"><br/><br/>';
	            var random = Math.floor((Math.random() * random_amount) + 1);
	            random_effects(random,Player1);
	            write_buildings(Player1.farm,Player1.forge,Player1.house,Player1.totem);
	            write_resource(Player1.wood,Player1.gold,Player1.stone,Player1.men,Player1.food,Player1.iron);
	            turn=2;
	        }
	        else if(turn==3)
	        {
	            document.getElementById("green").innerHTML = "Tura gracza o nicku: <br/> <br/>" + Player2.nick+"<br/><br/>";
	            document.getElementById("green").innerHTML += '<input type="button" value="zbuduj budynek" class="build" onclick="building_menu(Player2)"><br/><br/>';
	            document.getElementById("green").innerHTML += '<input type="button" value="zakończ ture" class="build" onclick="end_of_turn(Player2)"><br/><br/>';
	            var random = Math.floor((Math.random() * random_amount) + 1);
	            random_effects(random,Player2);
	            write_buildings(Player2.farm,Player2.forge,Player2.house,Player2.totem);
	            write_resource(Player2.wood,Player2.gold,Player2.stone,Player2.men,Player2.food,Player2.iron);
	            turn=3;
	            
	        }
	        else if(turn==4)
	        {
	            document.getElementById("green").innerHTML = "Tura gracza o nicku: <br/> <br/>" + Player3.nick+"<br/><br/>";
	            document.getElementById("green").innerHTML += '<input type="button" value="zbuduj budynek" class="build" onclick="building_menu(Player3)"><br/><br/>';
	            document.getElementById("green").innerHTML += '<input type="button" value="zakończ ture" class="build" onclick="end_of_turn(Player3)"><br/><br/>';
	            var random = Math.floor((Math.random() * random_amount) + 1);
	            random_effects(random,Player3);
	            write_buildings(Player3.farm,Player3.forge,Player3.house,Player3.totem);
	            write_resource(Player3.wood,Player3.gold,Player3.stone,Player3.men,Player3.food,Player3.iron);
	            turn=0;	        
	        }
	        else
	        {
	            document.getElementById("green").innerHTML = "Tura gracza o nicku: <br/> <br/>" + Player0.nick+"<br/><br/>";
	            document.getElementById("green").innerHTML += '<input type="button" value="zbuduj budynek" class="build" onclick="building_menu(Player0)"><br/><br/>';
	            document.getElementById("green").innerHTML += '<input type="button" value="zakończ ture" class="build" onclick="end_of_turn(Player0)"><br/><br/>';
	            var random = Math.floor((Math.random() * random_amount) + 1);
	            random_effects(random,Player0);
	            write_buildings(Player0.farm,Player0.forge,Player0.house,Player0.totem);
	            write_resource(Player0.wood,Player0.gold,Player0.stone,Player0.men,Player0.food,Player0.iron);
	            turn=1;
	        }
    	}


    	if(player_number==3)
    	{
    		if(turn==2)
	        {
	            document.getElementById("green").innerHTML = "Tura gracza o nicku: <br/> <br/>" + Player1.nick+"<br/><br/>";
	            document.getElementById("green").innerHTML += '<input type="button" value="zbuduj budynek" class="build" onclick="building_menu(Player1)"><br/><br/>';
	            document.getElementById("green").innerHTML += '<input type="button" value="zakończ ture" class="build" onclick="end_of_turn(Player1)"><br/><br/>';
	            var random = Math.floor((Math.random() * random_amount) + 1);
	            random_effects(random,Player1);
	            write_buildings(Player1.farm,Player1.forge,Player1.house,Player1.totem);
	            write_resource(Player1.wood,Player1.gold,Player1.stone,Player1.men,Player1.food,Player1.iron);
	            turn=2;
	           
	        }
	        else if(turn==3)
	        {
	            document.getElementById("green").innerHTML = "Tura gracza o nicku: <br/> <br/>" + Player2.nick+"<br/><br/>";
	            document.getElementById("green").innerHTML += '<input type="button" value="zbuduj budynek" class="build" onclick="building_menu(Player2)"><br/><br/>';
	            document.getElementById("green").innerHTML += '<input type="button" value="zakończ ture" class="build" onclick="end_of_turn(Player2)"><br/><br/>';
	            var random = Math.floor((Math.random() * random_amount) + 1);
	            random_effects(random,Player2);
	            write_buildings(Player2.farm,Player2.forge,Player2.house,Player2.totem);
	            write_resource(Player2.wood,Player2.gold,Player2.stone,Player2.men,Player2.food,Player2.iron);
	            turn=0;
	        }
	        else
	        {
	            document.getElementById("green").innerHTML = "Tura gracza o nicku: <br/> <br/>" + Player0.nick+"<br/><br/>";
	            document.getElementById("green").innerHTML += '<input type="button" value="zbuduj budynek" class="build" onclick="building_menu(Player0)"><br/><br/>';
	            document.getElementById("green").innerHTML += '<input type="button" value="zakończ ture" class="build" onclick="end_of_turn(Player0)"><br/><br/>';
	            var random = Math.floor((Math.random() * random_amount) + 1);
	            random_effects(random,Player0);
	            write_buildings(Player0.farm,Player0.forge,Player0.house,Player0.totem);
	            write_resource(Player0.wood,Player0.gold,Player0.stone,Player0.men,Player0.food,Player0.iron);
	            turn=1;
	            
	        }
    	}
    	if(player_number==2)
    	{
    		if(turn==2)
	        {
	            document.getElementById("green").innerHTML = "Tura gracza o nicku: <br/> <br/>" + Player1.nick+"<br/><br/>";
	            document.getElementById("green").innerHTML += '<input type="button" value="zbuduj budynek" class="build" onclick="building_menu(Player1)"><br/><br/>';
	            document.getElementById("green").innerHTML += '<input type="button" value="zakończ ture" class="build" onclick="end_of_turn(Player1)"><br/><br/>';
	            var random = Math.floor((Math.random() * random_amount) + 1);
	            random_effects(random,Player1);
	            write_buildings(Player1.farm,Player1.forge,Player1.house,Player1.totem);
	            write_resource(Player1.wood,Player1.gold,Player1.stone,Player1.men,Player1.food,Player1.iron);
	            turn=0;
	        }
	        else
	        {
	            document.getElementById("green").innerHTML = "Tura gracza o nicku: <br/> <br/>" + Player0.nick+"<br/><br/>";
	            document.getElementById("green").innerHTML += '<input type="button" value="zbuduj budynek" class="build" onclick="building_menu(Player0)"><br/><br/>';
	            document.getElementById("green").innerHTML += '<input type="button" value="zakończ ture" class="build" onclick="end_of_turn(Player0)"><br/><br/>';
	            var random = Math.floor((Math.random() * random_amount) + 1);
	            random_effects(random,Player0);
	            write_buildings(Player0.farm,Player0.forge,Player0.house,Player0.totem);
	            write_resource(Player0.wood,Player0.gold,Player0.stone,Player0.men,Player0.food,Player0.iron);
	            turn=1;
	            
	        }
    	}
    	if(player_number==1)
    	{
    		win(Player0);
    	}
}

//funkcja wypisująca ilość i rodzaj budynków w divie lblue
function write_buildings(farm,forge,house,totem)
{

	var sign ="Ilość budynków <br/> <br/>";
	sign += "Farmy: "+farm +"<br/><br/>";
	sign += "Kuźnie: "+forge+"<br/><br/>";
	sign += "Domy: "+house+"<br/><br/>";
	sign += "Totem: "+totem+"<br/><br/>";
	document.getElementById("lblue").innerHTML = sign;
}
//funkcja wypisująca ilość zasobów w divie zasoby
function write_resource(wood,gold,stone,men,food,iron)
{
	var sign1 = wood + " drewna  <br/>" + stone + " kamieni  <br/>" + gold + " złota <br/>" + men + " ludzi <br/> " + iron + " żelaza <br/> " + food + " jedzenia <br/>";
    document.getElementById("zasoby").innerHTML = sign1;
}
//funkcja wywoływana przy kliknięciu guzika "zakończ turę" 
function end_of_turn(Player)
{
	//odjęcie jedzenia w zależności od ilości ludzi
	consolePrint("gracz "+Player.nick+" zakończył turę")
	Player.food-=Player.men;
	consolePrint("stracił "+Player.men+" jedzenia");

	if(Player.food<0)
	{
		if(player_number==4)
		{
			if(Player.number==3)
			{
				player_number--;
				clear_players();
				write_players(Player0);
				write_players(Player1);
				write_players(Player2);
				turn--;

			}
			else if(Player.number==2)
			{
				player_number--;
				change_player(Player,Player3);
				write_players(Player0);
				write_players(Player1);
				write_players(Player2);
				turn--;
		
			}
			
			else if(Player.number==0)
			{
				player_number--;
				change_player(Player,Player1);
				change_player(Player1,Player2);
				change_player(Player2,Player3);
				write_players(Player0);
				write_players(Player1);
				write_players(Player2);
				turn--;

		
			}
			
			else if(Player.number==1)
			{
				player_number--;
				change_player(Player1,Player2);
				change_player(Player2,Player3);
				write_players(Player0);
				write_players(Player1);
				write_players(Player2);
				turn--;

			}
		}
		
		else if(player_number==3)
		{
			if(Player.number==2)
			{
				player_number--;
				clear_players();
				write_players(Player0);
				write_players(Player1);
				turn--;
			}
			else if(Player.number==0)
			{
				player_number--;
				change_player(Player0,Player1);
				change_player(Player1,Player2);
				write_players(Player0);
				write_players(Player1);
				turn--;
			}
			else if(Player.number==1)
			{
				player_number--;
				change_player(Player1,Player2);
				write_players(Player0);
				write_players(Player1);
				turn--;
			}
		
		}
		
		else if(player_number==2)
		{
			if(Player.number==0)
			{
				player_number--;

				change_player(Player0,Player1);
				write_players(Player0);
				
			}
			else if(Player.number==1)
			{
				player_number--;
				clear_players();
				write_players(Player0);
				
			}
		}
	}

	//dodawanie surowców w zależności od ilości i rodzaju budynków


	Player.iron+=forge.give.iron*Player.forge;
	Player.gold+=forge.give.gold*Player.forge;
	Player.wood+=forge.give.wood*Player.forge;
	Player.people+=forge.give.men*Player.forge;
	Player.stone+=forge.give.stone*Player.forge;
	Player.food+=forge.give.food*Player.forge;


	Player.iron+=farm.give.iron*Player.farm;
	Player.gold+=farm.give.gold*Player.farm;
	Player.wood+=farm.give.wood*Player.farm;
	Player.people+=farm.give.men*Player.farm;
	Player.stone+=farm.give.stone*Player.farm;
	Player.food+=farm.give.food*Player.farm;


	Player.iron+=house.give.iron*Player.house;
	Player.gold+=house.give.gold*Player.house;
	Player.wood+=house.give.wood*Player.house;
	Player.men+=house.give.men*Player.house;
	Player.stone+=house.give.stone*Player.house;
	Player.food+=house.give.food*Player.house;
	consolePrint("Otrzymał "+(forge.give.food*Player.forge+farm.give.food*Player.farm+house.give.food*Player.house)+" jedzenia");
	consolePrint("Otrzymał "+(forge.give.gold*Player.forge+farm.give.gold*Player.farm+house.give.gold*Player.house)+" złota");
	consolePrint("Otrzymał "+(forge.give.wood*Player.forge+farm.give.wood*Player.farm+house.give.wood*Player.house)+" drewna");
	consolePrint("Otrzymał "+(forge.give.iron*Player.forge+farm.give.iron*Player.farm+house.give.iron*Player.house)+" żelaza");
	consolePrint("Otrzymał "+(forge.give.stone*Player.forge+farm.give.stone*Player.farm+house.give.stone*Player.house)+" kamienia");
	consolePrint("Otrzymał "+(forge.give.men*Player.forge+farm.give.men*Player.farm+house.give.men*Player.house)+" ludzi");

	turn++;
	start();
	

}


//funkcja wypisująca możliwości od ilości surowców
function building_menu(player)
{
	posibilities = "LISTA TWOICH MOŻLIWOŚCI <br/> <br/>";
	var obj = 
	JSON.stringify(player.number);
 	   if(player.wood>=farm.cost.wood && player.food>=farm.cost.food && player.men>= farm.cost.men && player.gold >= farm.cost.gold && player.iron>=farm.cost.iron && player.stone >= farm.cost.stone)
 	   {
 	   		posibilities += '<input type="button" class="build" value="Zbuduj farme" onclick="build(0,Player'+obj+')" style="float:left; margin-left: 20px;">';
 	   }
       if(player.wood>=forge.cost.wood && player.food>=forge.cost.food && player.men>= forge.cost.men && player.gold >= forge.cost.gold && player.iron>=forge.cost.iron && player.stone >= forge.cost.stone)
 	   {
 	   		posibilities += '<input type="button" class="build" value="Zbuduj kuźnie" onclick="build(1,Player'+obj+')" style="margin-right:20px;">';
 	   }
 	   if(player.wood>=house.cost.wood && player.food>=house.cost.food && player.men>= house.cost.men && player.gold >= house.cost.gold && player.iron>=house.cost.iron && player.stone >= house.cost.stone)
 	   {
 	   		posibilities += '<input type="button" class="build" value="Zbuduj dom" onclick="build(2,Player'+obj+')" style="float: right; margin-right:20px;"><br/><br/><br/>';
 	   }
 	   if(player.wood>=totem.cost.wood && player.food>=totem.cost.food && player.men>= totem.cost.men && player.gold >= totem.cost.gold && player.iron>=totem.cost.iron && player.stone >= totem.cost.stone)
 	   {
 	   		posibilities += '<input type="button" class="build" value="Zbuduj totem" onclick="build(3,Player'+obj+')" style="margin:auto;"><br/><br/><br/>';
 	   }
 	   posibilities += '<input type="button" value="zakończ ture" class="build" onclick="end_of_turn(Player'+obj+')"><br/><br/>';
 	   document.getElementById("green").innerHTML = posibilities;
}


function build(type,Player)
{
	if(type==0)
	{
		Player.farm++;
		Player.wood-=farm.cost.wood;
		Player.gold-=farm.cost.gold;
		Player.stone-=farm.cost.stone;
		Player.people-=farm.cost.people;
		Player.food-=farm.cost.food;
		Player.iron-=farm.cost.iron;
		building_menu(Player);
		write_resource(Player.wood,Player.gold,Player.stone,Player.men,Player.food,Player.iron);
		write_buildings(Player.farm,Player.forge,Player.house,Player.totem);
		consolePrint(Player.nick+" wybudował farmę");
	}
	else if(type==1)
	{
		Player.forge++;
		Player.wood-=forge.cost.wood;
		Player.gold-=forge.cost.gold;
		Player.stone-=forge.cost.stone;
		Player.people-=forge.cost.people;
		Player.food-=forge.cost.food;
		Player.iron-=forge.cost.iron;
		building_menu(Player);
		write_resource(Player.wood,Player.gold,Player.stone,Player.men,Player.food,Player.iron);
		write_buildings(Player.farm,Player.forge,Player.house,Player.totem);
		consolePrint(Player.nick+" wybudował kuźnie");
	}
	else if(type==2)
	{
		Player.house++;
		Player.wood-=house.cost.wood;
		Player.gold-=house.cost.gold;
		Player.stone-=house.cost.stone;
		Player.people-=house.cost.people;
		Player.food-=house.cost.food;
		Player.iron-=house.cost.iron;
		building_menu(Player);
		write_resource(Player.wood,Player.gold,Player.stone,Player.men,Player.food,Player.iron);
		write_buildings(Player.farm,Player.forge,Player.house,Player.totem);
		consolePrint(Player.nick+" wybudował dom");
	}
	if(type==3)
	{
		win(Player);

	}

}

/*
function write_players(Player,Player_1,Player_2)
{
	document.getElementById('lblue').innerHTML = "Lista graczy <br/>";
	document.getElementById('lblue').innerHTML += Player.nick;
	document.getElementById('lblue').innerHTML += "<br/>";
	document.getElementById('lblue').innerHTML += Player_1.nick;
	document.getElementById('lblue').innerHTML += "<br/>";
	document.getElementById('lblue').innerHTML += Player_2.nick;
	document.getElementById('lblue').innerHTML += "<br/>";
}*/
function write_players(Player)
{
	document.getElementById("blue").innerHTML += "<br/><br/>" + Player.nick;
}
function change_player(Player,Player3)
{
				Player.food=Player3.food;
				Player.nick=Player3.nick;
				Player.wood=Player3.wood;
				Player.iron=Player3.iron;
				Player.men=Player3.men;
				Player.gold=Player3.gold;
				Player.stone=Player3.stone;
				Player.farm=Player3.farm;
				Player.forge=Player3.forge;
				Player.house=Player3.house;
				document.getElementById('blue').innerHTML = "Lista graczy";
}
function clear_players()
{
	document.getElementById('blue').innerHTML = "Lista graczy";
}
function win(Player)
{
	document.getElementById("green").style.fontSize = "45px";
	document.getElementById('green').innerHTML = "Wygrał gracz o nicku <br/><br/>" + Player.nick;
}
function consolePrint(text){
consoleArray.unshift(text+'<br>');
consoleLayout.innerHTML=consoleArray;
}
function random_effects(rand,Player)
{
	alert(rand);

	if(rand==7)
	{
		document.getElementById('green').innerHTML += "<br/><br/><br/> Spotka³eœ i okrad³eœ kupca <br/> otrzyma³eœ 50 drewna 60 ¿elaza i 70 z³ota";
		Player.wood += 50;
		Player.iron += 60;
		Player.gold += 70;
	}
	else if(rand==8)
	{
		document.getElementById('green').innerHTML += "<br/><br/><br/> Spotka³eœ i okrad³eœ kupca <br/> otrzyma³eœ 50 drewna 60 ¿elaza i 70 z³ota";
		Player.wood += 50;
		Player.iron += 60;
		Player.gold += 70;
	}
	else if(rand==9)
	{
		document.getElementById('green').innerHTML += "<br/><br/><br/> Spotka³eœ i okrad³eœ kupca <br/> otrzyma³eœ 50 drewna 60 ¿elaza i 70 z³ota";
		Player.wood += 50;
		Player.iron += 60;
		Player.gold += 70;
	}
	else if(rand==10)
	{
		
	}
}