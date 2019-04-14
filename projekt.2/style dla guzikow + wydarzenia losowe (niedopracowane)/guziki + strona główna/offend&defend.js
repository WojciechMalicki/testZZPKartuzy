function attack() {
  green.innerHTML='';
  for(let i=0;i<player_number;i++){
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
  beltContex.fillRect(0, 0, (Players[turn].solider/(Players[turn].solider+Players[playerNumber].solider))*100/*width*/, 10);
  beltContex.fillStyle = "#ff1700";
  beltContex.fillRect((Players[turn].solider/(Players[turn].solider+Players[playerNumber].solider))*100, 0, (Players[playerNumber].solider/(Players[turn].solider+Players[playerNumber].solider))*100/*width*/, 10);

}
function battleEnd(playerNumber) {
  let power = [];
  totemPower=(Players[turn].totem*0.1)+1;
  fortPower=(Players[playerNumber].fort*0.1)+1;
  power[0]=totemPower*Players[turn].solider;
  power[1]=fortPower*Players[playerNumber].solider;
  if(power[0]>power[1]){
    power[2]=power[0]-power[1];
    let survivalssolider=power[2]/totemPower;
    let victory = 0;
    Players[turn].solider=survivalssolider;
    Players[playerNumber].solider=0;
  }else if(power[0]<power[1]){
    power[2]=power[1]-power[0];
    let survivalssolider=power[2]/fortPower;
    let victory = 1;
    Players[playerNumber].solider=survivalssolider;
    Players[turn].solider=0;
  }else{
    victory=2;
    Players[turn].solider=0;
    Players[playerNumber].solider=0;
  }
  if(victory===0){
    if(Players[playerNumber].food<Players[turn].solider*5){
      stolenFood=Players[playerNumber].food;
      Players[playerNumber].food=0;
    }else{
      stolenFood=Players[turn].solider*5;
      Players[playerNumber].food-=Players[turn].solider*5;
    }
    if(Players[playerNumber].gold<Players[turn].solider){
      stolengold=Players[playerNumber].gold;
      Players[playerNumber].gold=0;
    }else{
      stolengold=Players[turn].solider;
      Players[playerNumber].gold-=Players[turn].solider;
    }
    green.innerHTML="<h1>wygrałeś</h1><br>zdobyłeś:"+stolenFood+" żywności<br>"+ stolenGold + " złota"
  }else if(victory===1){
    green.innerHTML="<h1>Przegrałeś</h1>";
  }else{
    green.innerHTML="<h1>Nikt nie Wygrał</h1>";
  }
  write_buildings();
  write_resource();
  building_menu();
}
