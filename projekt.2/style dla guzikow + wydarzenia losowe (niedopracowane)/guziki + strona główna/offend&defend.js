function attack() {
  green.innerHTML='';
  for(var i=0;i<player_number;i++){
    if(i!==turn){
      green.innerHTML+='<input type="button" value="'+Players[i].nick+'" onclick="battle('+i.toString()+')"/>';
    }
  }
}
function battle(playerNumber){
  green.innerHTML='<canvas id="battleStatusBelt" height="10" width="100"></canvas><br><input type="button" value="Fight!" id="fightButton" onclick="battleEnd('+playerNumber+')"/>';
  var battleStatusBelt = document.getElementById("battleStatusBelt");
  var beltContex = battleStatusBelt.getContext("2d");
  beltContex.fillStyle = "#004fff";
  beltContex.fillRect(0, 0, (Players[turn].soldier/(Players[turn].soldier+Players[playerNumber].soldier))*100/*width*/, 10);
  beltContex.fillStyle = "#ff1700";
  beltContex.fillRect((Players[turn].soldier/(Players[turn].soldier+Players[playerNumber].soldier))*100, 0, (Players[playerNumber].soldier/(Players[turn].soldier+Players[playerNumber].soldier))*100/*width*/, 10);

}
function battleEnd(playerNumber) {
  var power = [];
  var stolenGold;
  var stolenFood;
  totemPower=(Players[turn].totem*0.1)+1;
  fortPower=(Players[playerNumber].fort*0.1)+1;
  power[0]=totemPower*Players[turn].soldier;
  power[1]=fortPower*Players[playerNumber].soldier;
  if(power[0]>power[1]){
    power[2]=power[0]-power[1];
    var survivalsoldier=power[2]/totemPower;
    survivalsoldier = Math.round(survivalsoldier);
    var victory = 0;
    Players[turn].soldier=survivalsoldier;
    Players[playerNumber].soldier=0;
  }else if(power[0]<power[1]){
    power[2]=power[1]-power[0];
    var survivalsoldier=power[2]/fortPower;
    survivalsoldier = Math.round(survivalsoldier);
    var victory = 1;
    Players[playerNumber].soldier=survivalsoldier;
    Players[turn].soldier=0;
  }else{
    var victory=2;
    Players[turn].soldier=0;
    Players[playerNumber].soldier=0;
  }
  if(victory===0){
    if(Players[playerNumber].food<Players[turn].soldier*5){
      stolenFood=Players[playerNumber].food;
      Players[playerNumber].food=0;
    }else{
      stolenFood=Players[turn].soldier*5;
      Players[playerNumber].food-=Players[turn].soldier*5;
    }
    if(Players[playerNumber].gold<Players[turn].soldier){
      stolenGold=Players[playerNumber].gold;
      Players[playerNumber].gold=0;
    }else{
      stolenGold=Players[turn].soldier;
      Players[playerNumber].gold-=Players[turn].soldier;
    }
    Players[turn].food+=stolenFood;
    Players[turn].gold+=stolenGold;
    consolePrint("wygrałeś i zdobyłeś:"+stolenFood+" żywności i "+ stolenGold + " złota");
  }else if(victory===1){
    consolePrint("Przegrałeś");
  }else{
    consolePrint("Nikt nie Wygrał");
  }
  write_buildings();
  write_resource();
  start();
}
