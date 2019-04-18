var nicknames =[];
function customGra() {
  document.getElementById("green").innerHTML = 'Podaj liczbe graczy <br/> <br/><input type="number" min="2" max="10" id="liczba_graczy" class="number"><button onclick="customPlayer_list()" class="build">Akceptuj</button>';
	document.getElementById("zasoby-napis").innerHTML = 'ZASOBY:';
	document.getElementById("blue").innerHTML = 'Lista graczy';
	document.getElementById("lblue").innerHTML = 'Ilość budynków<br/><br/>';
  var loadingState = 2;
}
function customPlayer_list() {
  var write = " ";
  player_number = document.getElementById("liczba_graczy").value;
  if(player_number<11&&player_number>1){
  for(i=0;i<player_number;i++)
  {
      write += '<input type="text" class="placeholder" id = gracz_' + i + '><br/> <br/>';
  }
  document.getElementById("green").innerHTML = 'Podaj nazwy graczy  <br/> <br/>'+ write + '<br/> <br/> <button onclick="customPlayerResoures()" class="build">Akceptuj</button>';

  loadingState=3;} else {
    consolePrint('musisz podać liczbe wiekszą od 1 i mniejszą lub równą 10')
    return 0;
  }
}
function customPlayerResoures() {
  var resoures =[];
  for(var i=0;i<player_number;i++){
    nicknames[i]=document.getElementById("gracz_"  + i).value;
  }
  createResouresSubmitScreen(0)
}
function createResouresSubmitScreen(i) {
    green.innerHTML='';
    green.innerHTML+='Padaj surowce i budynki gracza o nicku: '+ nicknames[i];
    green.innerHTML+='<br>Drewno: <input type="number" class="placeholder" id = Wood min="0">';
    green.innerHTML+='kamień: <input type="number" class="placeholder" id = Stone min="0">';
    green.innerHTML+='Złoto: <input type="number" class="placeholder" id = Gold min="0">';
    green.innerHTML+='<br>Jedzenie: <input type="number" class="placeholder" id = Food min="0">';
    green.innerHTML+='Żelazo: <input type="number" class="placeholder" id = Iron min="0">';
    green.innerHTML+='Ludzie: <input type="number" class="placeholder" id = Men min="0">';
    green.innerHTML+='<br>Żołnierze: <input type="number" class="placeholder" id = Solidier min="0">';
    green.innerHTML+='Farmy: <input type="number" class="placeholder" id =  Farm min="0">';
    green.innerHTML+='Kuźnie: <input type="number" class="placeholder" id = Forge min="0">';
    green.innerHTML+='<br>Domy: <input type="number" class="placeholder" id = House min="0">';
    green.innerHTML+='Totemy: <input type="number" class="placeholder" id = Totem min="0">';
    green.innerHTML+='Koszary: <input type="number" class="placeholder" id = Barracks min="0">';
    green.innerHTML+='<br>Forty: <input type="number" class="placeholder" id = Fort min="0">';
    green.innerHTML+='Kopalnie: <input type="number" class="placeholder" id = Mine min="0">';
    green.innerHTML+='<button onclick="customCreate_Player('+i+')" class="build">Akceptuj</button>'
}
function customCreate_Player(playerId) {
  Players[playerId]={
    nick: nicknames[playerId],
    id:playerId,
    wood:document.getElementById('Wood').value,
    stone:document.getElementById('Stone').value,
    people:people.value,
    gold:document.getElementById('Gold').value,
    food:document.getElementById('Food').value,
    iron:document.getElementById('Iron').value,
    men:document.getElementById('Men').value,
    soldier:document.getElementById('Solidier').value,
    farm:document.getElementById('Farm').value,
    forge:document.getElementById('Forge').value,
    house:document.getElementById('House').value,
    totem:document.getElementById('Totem').value,
    barracks:document.getElementById('Barracks').value,
		fort:document.getElementById('Fort').value,
		mine:document.getElementById('Mine').value,
  }
  if(playerId<player_number-1){
    createResouresSubmitScreen(playerId+1,  nicknames);
  }else{
    start();
  }
}
