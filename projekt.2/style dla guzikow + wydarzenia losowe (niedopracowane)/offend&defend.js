function attack() {
  green.innerHTML='';
  for(let i=0;i<player_number;i++){
    if(i!==turn){
      green.innerHTML+='<input type="button" value="'+Players[i].nick+'" onclick="battle('+i+')"/>';
    }
  }
}
function battle(pN){
  green.innerHTML='<img src="obrazekBitwy"><br><canvas id="battleStatusBelt" height="5" width="100"><br><input type="button" value="Fight!" id="fightButton" onclick="battleEnd()"/>';
  let playerNumber = pN;
  var battleStatusBelt = document.getElementById("battleStatusBelt");
  var beltContex = battleStatusBelt.getContext("2d");
  beltContex.fillStyle = "#004fff";
  beltContex.fillRect(0, 0, (Players[turn].soliders/(Players[turn].soliders+Players[playerNumber].soliders))*100/*width*/, 5);

}
function battleEnd() {
  let power = [];
  power[0]=Players[turn].soliders+(Players[turn].soliders*Players[turn].totem*0.1);
  power[1]=Players[playerNumber].soliders+(Players[playerNumber].soliders*Players[playerNumber].fort*0.1);
  if(power[0]>power[1]){
    power[2]=power[0]-power[1];
    let survivalsSoliders=(power[2]/1.1)/Players[turn].totem;
    let victory = 0;
    Players[turn].soliders=survivalsSoliders;
    Players[playerNumber].soliders=0;
  }else if(power[0]<power[1]){
    power[2]=power[1]-power[0];
    let survivalsSoliders=(power[2]/1.1)/Players[playerNumber].totem;
    let victory = 1;
    Players[playerNumber].soliders=survivalsSoliders;
    Players[turn].soliders=0;
  }else{
    victory=2;
    Players[turn].soliders=0;
    Players[playerNumber].soliders=0;
  }
  if(victory===0){
    if(Players[playerNumber].food<Players[turn].soliders*5){
      stolenFood=Players[playerNumber].food;
      Players[playerNumber].food=0;
    }else{
      stolenFood=Players[turn].soliders*5;
      Players[playerNumber].food-=Players[turn].soliders*5;
    }
    if(Players[playerNumber].gold<Players[turn].soliders){
      stolengold=Players[playerNumber].gold;
      Players[playerNumber].gold=0;
    }else{
      stolengold=Players[turn].soliders;
      Players[playerNumber].gold-=Players[turn].soliders;
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
