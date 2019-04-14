/*
OBIEKTOWA WERSJA GRY revOmeaG
BY: ZzP 2018/2019 INF
VERSION: 3.1.2 (WERSJĘ PROSZĘ ZMIENIAĆ PRZY MODYFIKACJACH)
*/
var consoleArray = 'gra się zaczyna<br>';
var consoleLayout = document.getElementById("console");
consoleLayout.innerHTML=consoleArray;
var loadingState = 0;
var wood = 100;
var stone = 100;
var people = 3000;
var gold = 1000;
var food = 200;
var iron = 500;
var men = 70;
var soldier = 45;
var random_amount = 10;
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

var barracks={
	cost:{food:10,gold:20,wood:0,men:10,iron:50,stone:30},
	give:{food:0, gold:0, wood:0,men:0,iron:10, stone:0, soldier:30},
};

var mine={
	cost:{food:0,gold:10,wood:20,men:10,iron:0,stone:0},
	give:{food:0, gold:30, wood:0,men:0,iron:10, stone:20},
};

var defbuilding={
	cost:{food:20,gold:5,wood:20,soldier:20,iron:20,stone:10},
	give:{food:0, gold:0, wood:0,men:0,iron:0, stone:40},
}

var Players=[];
var posibilities = "LISTA TWOICH MOŻLIWOŚCI <br/> <br/>";
var ilosc_mozliwosci = 10;
var playerNames = "";
var uchwyt = 3;
var player_number;
var nick;
var turn=0;
var xD = 1;
var completed_turns=0;
window.addEventListener('keyup', function (e) {
	if (e.keyCode === 13&&loadingState==0) {
player_list();

}else if (e.keyCode === 13&& loadingState==1) {
create_players();
}}, false);

function player_list()
{
    var write = " ";
    player_number = document.getElementById("liczba_graczy").value;
    if(player_number<11&&player_number>1){
    for(i=0;i<player_number;i++)
    {
        write += '<input type="text" class="placeholder" id = gracz_' + i + '><br/> <br/>';
    }
    document.getElementById("green").innerHTML = 'Podaj nazwy graczy  <br/> <br/>'+ write + '<br/> <br/> <button onclick="create_players()" class="build">Akceptuj</button>';

		loadingState=1;} else {
			consolePrint('musisz podać liczbe wiekszą od 1 i mniejszą lub równą 10')
			return 0;
		}
}
function create_players()
{
	for (var i = 0; i < player_number; i++) {
		if (document.getElementById('gracz_'+i).value===null||document.getElementById('gracz_'+i).value==='') {
			consolePrint('musisz podać nazwę gracza '+(i+1));
			return 0;
    }
	}
    for(i=0;i<player_number;i++)
    {
    	playerNames = "";
        playerNames += document.getElementById("gracz_"  + i).value;
        create_player(i, document.getElementById('gracz_'+i).value)
        playerNames += "<br/> <br/>"
    }
    document.getElementById("green").innerHTML = "";
    clear_players();
    write_players();
    start();
}
function create_player(number, name) {
  Players[number]={
    nick:name,
    id:number,
    wood:wood,
    stone:stone,
    people:people,
    gold:gold,
    food:food,
    iron:iron,
    men:men,
    soldier:0,
    farm:0,
    forge:0,
    house:0,
    totem:0,
    barracks:0,
	defbuilding:0,
	mine:0,
  }
}
function start()
{
  if(player_number===1)
  {
    win();
    return 0;
  }
consolePrint("rozpoczyna się tura "+completed_turns)


document.getElementById("green").innerHTML = "Tura gracza o nicku: <br/> <br/>" + Players[turn].nick+"<br/><br/>";
document.getElementById("green").innerHTML += '<input type="button" value="zbuduj budynek" class="build" onclick="building_menu()"><br/><br/>';
document.getElementById("green").innerHTML += '<input type="button" value="zakończ ture" class="build" onclick="end_of_turn()"><br/><br/>';

random_effects(random_int(random_amount));
write_buildings();
write_resource();
//turn++ dopiero na koniec tury aby dodać zasoby
    }
function write_buildings()
    {

    	var sign ="Ilość budynków <br/> <br/>";
    	sign += "Farmy: "+Players[turn].farm +"<br/><br/>";
    	sign += "Kuźnie: "+Players[turn].forge+"<br/><br/>";
    	sign += "Domy: "+Players[turn].house+"<br/><br/>";
    	sign += "Totem: "+Players[turn].totem+"<br/><br/>";
    	sign += "Kopalnie: "+Players[turn].mine+"<br/><br/>";
    	sign += "Koszary: "+Players[turn].barracks+"<br/><br/>";
    	sign += "Twierdze: "+Players[turn].defbuilding+"<br/><br/>";
    	document.getElementById("lblue").innerHTML = sign;
    }
    function write_resource()
    {
    	var sign1 = Players[turn].wood + " drewna  <br/>" + Players[turn].stone + " kamieni  <br/>" + Players[turn].gold + " złota <br/>" + Players[turn].men + " ludzi <br/> " + Players[turn].iron + " żelaza <br/> " + Players[turn].food + " jedzenia <br/>" + Players[turn].soldier + " żołnierzy<br/>";
        document.getElementById("zasoby").innerHTML = sign1;
    }
function write_players()
{for(var i=0;i<player_number;i++)
	document.getElementById("blue").innerHTML += "<br/><br/>" + Players[i].nick;
}
function clear_players()
{
	document.getElementById('blue').innerHTML = "Lista graczy";
}
function win()
{
	document.getElementById("green").style.fontSize = "45px";
	document.getElementById('green').innerHTML = "Wygrał gracz o nicku <br/><br/>" + Players[0].nick;
}
function end_of_turn()
{

	//odjęcie jedzenia w zależności od ilości ludzi
	consolePrint("gracz "+Players[turn].nick+" zakończył turę")
	Players[turn].food-=Players[turn].men;
	consolePrint("stracił "+Players[turn].men+" jedzenia");

	if(Players[turn].food<0)
	{Players.splice(turn,1);
	alert(Players[turn].nick);
    player_number--;
    /*if(player_number===1)
	{
		win();
	}*/	
  clear_players();
  write_players();
  completed_turns++;
  setTimeout(start(), 1000);
}else{
  Players[turn].iron+=forge.give.iron*Players[turn].forge;
	Players[turn].gold+=forge.give.gold*Players[turn].forge;
	Players[turn].wood+=forge.give.wood*Players[turn].forge;
	Players[turn].people+=forge.give.men*Players[turn].forge;
	Players[turn].stone+=forge.give.stone*Players[turn].forge;
	Players[turn].food+=forge.give.food*Players[turn].forge;


	Players[turn].iron+=farm.give.iron*Players[turn].farm;
	Players[turn].gold+=farm.give.gold*Players[turn].farm;
	Players[turn].wood+=farm.give.wood*Players[turn].farm;
	Players[turn].people+=farm.give.men*Players[turn].farm;
	Players[turn].stone+=farm.give.stone*Players[turn].farm;
	Players[turn].food+=farm.give.food*Players[turn].farm;


	Players[turn].iron+=house.give.iron*Players[turn].house;
	Players[turn].gold+=house.give.gold*Players[turn].house;
	Players[turn].wood+=house.give.wood*Players[turn].house;
	Players[turn].men+=house.give.men*Players[turn].house;
	Players[turn].stone+=house.give.stone*Players[turn].house;
	Players[turn].food+=house.give.food*Players[turn].house;

	Players[turn].iron+=barracks.give.iron*Players[turn].barracks;
	Players[turn].gold+=barracks.give.gold*Players[turn].barracks;
	Players[turn].wood+=barracks.give.wood*Players[turn].barracks;
	Players[turn].men+=barracks.give.men*Players[turn].barracks;
	Players[turn].stone+=barracks.give.stone*Players[turn].barracks;
	Players[turn].food+=barracks.give.food*Players[turn].barracks;
	Players[turn].soldier+=barracks.give.soldier*Players[turn].barracks;

	Players[turn].iron+=mine.give.iron*Players[turn].mine;
	Players[turn].gold+=mine.give.gold*Players[turn].mine;
	Players[turn].wood+=mine.give.wood*Players[turn].mine;
	Players[turn].men+=mine.give.men*Players[turn].mine;
	Players[turn].stone+=mine.give.stone*Players[turn].mine;
	Players[turn].food+=mine.give.food*Players[turn].mine;

	Players[turn].iron+=defbuilding.give.iron*Players[turn].defbuilding;
	Players[turn].gold+=defbuilding.give.gold*Players[turn].defbuilding;
	Players[turn].wood+=defbuilding.give.wood*Players[turn].defbuilding;
	Players[turn].men+=defbuilding.give.men*Players[turn].defbuilding;
	Players[turn].stone+=defbuilding.give.stone*Players[turn].defbuilding;
	Players[turn].food+=defbuilding.give.food*Players[turn].defbuilding;

	consolePrint("Otrzymał "+(forge.give.food*Players[turn].forge+farm.give.food*Players[turn].farm+house.give.food*Players[turn].house+barracks.give.food*Players[turn].barracks+defbuilding.give.food*Players[turn].defbuilding+mine.give.food*Players[turn].mine)+" jedzenia");
	consolePrint("Otrzymał "+(forge.give.gold*Players[turn].forge+farm.give.gold*Players[turn].farm+house.give.gold*Players[turn].house+barracks.give.gold*Players[turn].barracks+defbuilding.give.gold*Players[turn].defbuilding+mine.give.gold*Players[turn].mine)+" złota");
	consolePrint("Otrzymał "+(forge.give.wood*Players[turn].forge+farm.give.wood*Players[turn].farm+house.give.wood*Players[turn].house+barracks.give.wood*Players[turn].barracks+defbuilding.give.wood*Players[turn].defbuilding+mine.give.wood*Players[turn].mine)+" drewna");
	consolePrint("Otrzymał "+(forge.give.iron*Players[turn].forge+farm.give.iron*Players[turn].farm+house.give.iron*Players[turn].house+barracks.give.iron*Players[turn].barracks+defbuilding.give.iron*Players[turn].defbuilding+mine.give.iron*Players[turn].mine)+" żelaza");
	consolePrint("Otrzymał "+(forge.give.stone*Players[turn].forge+farm.give.stone*Players[turn].farm+house.give.stone*Players[turn].house+barracks.give.stone*Players[turn].barracks+defbuilding.give.stone*Players[turn].defbuilding+mine.give.stone*Players[turn].mine)+" kamienia");
	consolePrint("Otrzymał "+(forge.give.men*Players[turn].forge+farm.give.men*Players[turn].farm+house.give.men*Players[turn].house+barracks.give.men*Players[turn].barracks+defbuilding.give.men*Players[turn].defbuilding+mine.give.men*Players[turn].mine)+" ludzi");
	consolePrint("")

if(turn===(player_number-1)){
  turn=0;
	completed_turns++;
}else{
  turn++;}
  completed_turns++;
	setTimeout(start(), 1000);
}}
function building_menu()
{
	posibilities = "LISTA TWOICH MOŻLIWOŚCI <br/> <br/>";
	var obj =
	JSON.stringify(Players[turn].number);
 	   if(Players[turn].wood>=farm.cost.wood && Players[turn].food>=farm.cost.food && Players[turn].men>= farm.cost.men && Players[turn].gold >= farm.cost.gold && Players[turn].iron>=farm.cost.iron && Players[turn].stone >= farm.cost.stone)
 	   {
 	   		posibilities += '<input type="button" class="build" value="Zbuduj farmę" onclick="build(0)" style="float:left; margin-left: 20px;">';
 	   }
 	   else
 	   {
 	   		posibilities += '<input type="button" class="unactive" value="Zbuduj farmę"  style="float:left; margin-left: 20px;">';
 	   }


       if(Players[turn].wood>=forge.cost.wood && Players[turn].food>=forge.cost.food && Players[turn].men>= forge.cost.men && Players[turn].gold >= forge.cost.gold && Players[turn].iron>=forge.cost.iron && Players[turn].stone >= forge.cost.stone)
 	   {
 	   		posibilities += '<input type="button" class="build" value="Zbuduj kuźnie" onclick="build(1)" style="margin-right:3px;">';
 	   }
 	   else
 	   {
 	   		posibilities += '<input type="button" class="unactive" value="Zbuduj kuźnie" style="margin-right: 3px;">';
 	   }


 	   if(Players[turn].wood>=house.cost.wood && Players[turn].food>=house.cost.food && Players[turn].men>= house.cost.men && Players[turn].gold >= house.cost.gold && Players[turn].iron>=house.cost.iron && Players[turn].stone >= house.cost.stone)
 	   {
 	   		posibilities += '<input type="button" class="build" value="Zbuduj dom" onclick="build(2)" style="float: right; margin-right:20px;"> <br/><br/><br/>';
 	   }
 	   else
 	   {
 	   		posibilities += '<input type="button" class="unactive" value="Zbuduj dom" style="float: right; margin-right:20px;"><br/><br/><br/>';
 	   }


 	   if(Players[turn].wood>=barracks.cost.wood && Players[turn].food>=barracks.cost.food && Players[turn].men>= barracks.cost.men && Players[turn].gold >= barracks.cost.gold && Players[turn].iron>=barracks.cost.iron && Players[turn].stone >= barracks.cost.stone)
 	   {
 	   		posibilities += '<input type="button" class="build" value="Zbuduj koszary" onclick="build(4)" style="float:left; margin-left: 20px;">';
 	   }
 	   else
 	   {
 	   		posibilities += '<input type="button" class="unactive" value="Zbuduj koszary"  style="float:left; margin-left: 20px;">';
 	   }


 	   if(Players[turn].wood>= mine.cost.wood && Players[turn].food>=mine.cost.food && Players[turn].men>= mine.cost.men && Players[turn].gold >= mine.cost.gold && Players[turn].iron>=mine.cost.iron && Players[turn].stone >= mine.cost.stone)
 	   {
 	   		posibilities += '<input type="button" class="build" value="Zbuduj kamieniołom" onclick="build(5)" style="margin-right:3px;">';
 	   }
 	   else
 	   {
 	   		posibilities += '<input type="button" class="unactive" value="Zbuduj kopalnie" style="margin-right: 3px;">';
 	   }


 	   if(Players[turn].wood>=defbuilding.cost.wood && Players[turn].food>=defbuilding.cost.food && Players[turn].men>= defbuilding.cost.men && Players[turn].gold >= defbuilding.cost.gold && Players[turn].iron>=defbuilding.cost.iron && Players[turn].stone >= defbuilding.cost.stone)
 	   {
 	   		posibilities += '<input type="button" class="build" value="Zbuduj twierdzę" onclick="build(6)" style="float: right; margin-right:20px;"> <br/><br/><br/>';
 	   }
 	   else
 	   {
 	   		posibilities += '<input type="button" class="unactive" value="Zbuduj twierdzę" style="float: right; margin-right:20px;"><br/><br/><br/>';
 	   }


 	   if(Players[turn].wood>=totem.cost.wood && Players[turn].food>=totem.cost.food && Players[turn].men>= totem.cost.men && Players[turn].gold >= totem.cost.gold && Players[turn].iron>=totem.cost.iron && Players[turn].stone >= totem.cost.stone)
 	   {
 	   		posibilities += '<input type="button" class="build" value="Zbuduj totem" onclick="build(3)" style="margin:auto;"><br/><br/><br/>';
 	   }
 	   else
 	   {
 	   		posibilities += '<input type="button" class="unactive" value="Zbuduj totem" style="margin:auto;"><br/><br/><br/>';
 	   }

 	   posibilities += '<input type="button" value="zakończ ture" class="build" onclick="end_of_turn()"><br/><br/>';
 	   document.getElementById("green").innerHTML = posibilities;
}
function build(type)
{
	if(type==0)
	{
		Players[turn].farm++;
		Players[turn].wood-=farm.cost.wood;
		Players[turn].gold-=farm.cost.gold;
		Players[turn].stone-=farm.cost.stone;
		Players[turn].people-=farm.cost.people;
		Players[turn].food-=farm.cost.food;
		Players[turn].iron-=farm.cost.iron;
		building_menu();
		write_resource(Players[turn].wood,Players[turn].gold,Players[turn].stone,Players[turn].men,Players[turn].food,Players[turn].iron);
		write_buildings(Players[turn].farm,Players[turn].forge,Players[turn].house,Players[turn].totem);
		consolePrint(Players[turn].nick+" wybudował farmę");
	}
	else if(type==1)
	{
		Players[turn].forge++;
		Players[turn].wood-=forge.cost.wood;
		Players[turn].gold-=forge.cost.gold;
		Players[turn].stone-=forge.cost.stone;
		Players[turn].people-=forge.cost.people;
		Players[turn].food-=forge.cost.food;
		Players[turn].iron-=forge.cost.iron;
		building_menu();
		write_resource(Players[turn].wood,Players[turn].gold,Players[turn].stone,Players[turn].men,Players[turn].food,Players[turn].iron);
		write_buildings(Players[turn].farm,Players[turn].forge,Players[turn].house,Players[turn].totem);
		consolePrint(Players[turn].nick+" wybudował kuźnie");
	}
	else if(type==2)
	{
		Players[turn].house++;
		Players[turn].wood-=house.cost.wood;
		Players[turn].gold-=house.cost.gold;
		Players[turn].stone-=house.cost.stone;
		Players[turn].people-=house.cost.people;
		Players[turn].food-=house.cost.food;
		Players[turn].iron-=house.cost.iron;
		building_menu();
		write_resource(Players[turn].wood,Players[turn].gold,Players[turn].stone,Players[turn].men,Players[turn].food,Players[turn].iron);
		write_buildings(Players[turn].farm,Players[turn].forge,Players[turn].house,Players[turn].totem);
		consolePrint(Players[turn].nick+" wybudował dom");
	}
	else if(type==3)
	{
		win();

	}
	else if(type==4)
	{
		Players[turn].barracks++;
		Players[turn].wood-=barracks.cost.wood;
		Players[turn].gold-=barracks.cost.gold;
		Players[turn].stone-=barracks.cost.stone;
		Players[turn].people-=barracks.cost.people;
		Players[turn].food-=barracks.cost.food;
		Players[turn].iron-=barracks.cost.iron;
		building_menu();
		write_resource(Players[turn].wood,Players[turn].gold,Players[turn].stone,Players[turn].men,Players[turn].food,Players[turn].iron);
		write_buildings(Players[turn].farm,Players[turn].forge,Players[turn].house,Players[turn].totem);
		consolePrint(Players[turn].nick+" wybudował koszary");
	}
	else if(type==5)
	{
		Players[turn].mine++;
		Players[turn].wood-=mine.cost.wood;
		Players[turn].gold-=mine.cost.gold;
		Players[turn].stone-=mine.cost.stone;
		Players[turn].people-=mine.cost.people;
		Players[turn].food-=mine.cost.food;
		Players[turn].iron-=mine.cost.iron;
		building_menu();
		write_resource(Players[turn].wood,Players[turn].gold,Players[turn].stone,Players[turn].men,Players[turn].food,Players[turn].iron);
		write_buildings(Players[turn].farm,Players[turn].forge,Players[turn].house,Players[turn].totem);
		consolePrint(Players[turn].nick+" wybudował kopalnie");
	}
	else if(type==6)
	{
		Players[turn].defbuilding++;
		Players[turn].wood-=defbuilding.cost.wood;
		Players[turn].gold-=defbuilding.cost.gold;
		Players[turn].stone-=defbuilding.cost.stone;
		Players[turn].people-=defbuilding.cost.people;
		Players[turn].food-=defbuilding.cost.food;
		Players[turn].iron-=defbuilding.cost.iron;
		building_menu();
		write_resource(Players[turn].wood,Players[turn].gold,Players[turn].stone,Players[turn].men,Players[turn].food,Players[turn].iron);
		write_buildings(Players[turn].farm,Players[turn].forge,Players[turn].house,Players[turn].totem);
		consolePrint(Players[turn].nick+" wybudował twierdzę");
	}

}
function consolePrint(text){
consoleArray=text+'<br>'+consoleArray;
consoleLayout.innerHTML=consoleArray;
}
function random_effects(rand)
{
	if(rand==7)
	{
		create_Event("Spotkałeś i okradłeś kupca <br/> otrzymujesz 50 drewna 60 żelaza i 70 złota", 0, 70, 50, 0, 60, 0);
	}
	else if(rand==8)
	{
		create_Event("Spotkałeś i okradłeś kupca <br/> otrzymujesz 50 drewna 60 żelaza i 70 złota", 0, 70, 50, 0, 60, 0);
	}
	else if(rand==9)
	{
		create_Event("Spotkałeś i okradłeś kupca <br/> otrzymujesz 50 drewna 60 żelaza i 70 złota", 0, 70, 50, 0, 60, 0);
	}
	else if(rand==10)
	{
		create_Event("Spotkałeś i okradłeś kupca <br/> otrzymujesz 50 drewna 60 żelaza i 70 złota", 0, 70, 50, 0, 60, 0);
	}
}
function create_Event(text, food, gold, wood, men, iron, stone) {
	document.getElementById('green').innerHTML += "<br/><br/><br/>" + text ;
	Players[turn].food += food;
	Players[turn].gold += gold;
	Players[turn].wood += wood;
	Players[turn].men += men;
	Players[turn].iron += iron;
	Players[turn].stone += stone;
}
function random_int(amount) {
	var random = Math.floor((Math.random() * random_amount) + 1);
	return random;
}
function description(id)
{
	if(id==0)
	{

		
		var kosztuje = "Kosztuje <br/>" 
		+ farm.cost.gold + " złota <br/>"
		+ farm.cost.wood + " drewna  <br/>"
		+ farm.cost.men + " ludzi <br/>"
		+ farm.cost.stone + " kamienia <br/>";
		var daje = "Na turę daje: <br/>"
		+ farm.give.food + " jedzenia <br/>"
		+ farm.give.gold + " złota <br/>"
		+ farm.give.wood + " drewna <br/>";
	}
	document.getElementById("green").innerHTML = '<div id="kosztuje">' + kosztuje + '</div> <div id="masnoni">' + daje + '</div><div id="powrot"><input type="button" class="build" value="powrót" id="back" onclick="building_menu()"</div>';
}
function gra()
{
	document.getElementById("green").innerHTML = 'Podaj liczbe graczy <br/> <br/><input type="number" min="2" max="10" id="liczba_graczy" class="number"><button onclick="player_list()" class="build">Akceptuj</button>';
	document.getElementById("zasoby-napis").innerHTML = 'ZASOBY:';
	document.getElementById("blue").innerHTML = 'Lista graczy';
	document.getElementById("lblue").innerHTML = 'Ilość budynków<br/><br/>';
}