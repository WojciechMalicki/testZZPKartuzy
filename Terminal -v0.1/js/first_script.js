var gold=110, wood=110, iron=110, food=110, men=110, stone=110, population=men;
var farm=0, house=0, forge=0, mine=0;
var terminallogs = ["<br>gra się zaczyna"];
var farm={
  cost:{food:0, gold:5, wood:20,men:5,iron:0, stone:5},
  give:{food:5, gold:5, wood:20,men:0,iron:0,stone:0},
 quality:0,
};
var forge={
  cost:{food:8, gold:5, wood:5,men:3,iron:0, stone:20}, 
  give:{food:0, gold:0, wood:0,men:0,iron:10, stone:0},
 quality:0,
};
var house={
  cost:{food:5, gold:5, wood:20,men:0,iron:3,stone:10},
  give:{food:0, gold:0, wood:0,men:Math.floor(population/10),iron:0,stone:0},
 quality:0,
};
var mine={
  cost:{food:0, gold:20, wood:20,men:10,iron:0,stone:0},
  give:{food:0, gold:0, wood:0,men:0,iron:3,stone:10},
 quality:0,
};


function build(what){
  switch(what){
    case 0:
      if(farm.cost.food<=food && farm.cost.stone<=stone && farm.cost.iron<=iron && farm.cost.men<=men && farm.cost.gold<=gold&&farm.cost.wood<=wood){
        food-=farm.cost.food;
        wood-=farm.cost.wood;
        iron-=farm.cost.iron;
        men-=farm.cost.men;
        stone-=farm.cost.stone;
        gold-=farm.cost.gold;
        farm.quality++;
      }else{
        //alert("nie masz wystarczajoco zasobuw");
        document.getElementById("alert").innerHTML="nie masz wystarczajoco zasobów";
      }
      break;
    case 1:
      if(forge.cost.food<=food && forge.cost.stone<=stone && forge.cost.iron<=iron && forge.cost.men<=men && forge.cost.gold<=gold&&forge.cost.wood<=wood){
        food-=forge.cost.food;
        wood-=forge.cost.wood;
        iron-=forge.cost.iron;
        men-=forge.cost.men;
        stone-=forge.cost.stone;
        gold-=forge.cost.gold;
      forge.quality++;
      }else{
        //alert("nie masz wystarczajoco zasobuw");
        document.getElementById("alert").innerHTML="nie masz wystarczajoco zasobów";
      }
      break;
    case 2:
            if(house.cost.food<=food && house.cost.stone<=stone && house.cost.iron<=iron && house.cost.men<=men && house.cost.gold<=gold&&house.cost.wood<=wood){
        food-=house.cost.food;
        wood-=house.cost.wood;
        iron-=house.cost.iron;
        men-=house.cost.men;
        stone-=house.cost.stone;
        gold-=house.cost.gold;
      house.quality++;
      }else{
        //alert("nie masz wystarczajoco zasobuw");
        document.getElementById("alert").innerHTML="nie masz wystarczajoco zasobów";
      }
      break;
    case 3:
            if(mine.cost.food<=food && mine.cost.stone<=stone && mine.cost.iron<=iron && mine.cost.men<=men && mine.cost.gold<=gold&&mine.cost.wood<=wood){
        food-=mine.cost.food;
        wood-=mine.cost.wood;
        iron-=mine.cost.iron;
        men-=mine.cost.men;
        stone-=mine.cost.stone;
        gold-=mine.cost.gold;
      mine.quality++;
      }else{
        //alert("nie masz wystarczajoco zasobuw");
        document.getElementById("alert").innerHTML="nie masz wystarczajoco zasobów";
      }
      break;
  }display();
}
function display()
{
document.getElementById("food").innerHTML=food; 
  document.getElementById("wood").innerHTML=wood;  
  document.getElementById("stone").innerHTML=stone;  
  document.getElementById("gold").innerHTML=gold;  
  document.getElementById("men").innerHTML=men;  
  document.getElementById("iron").innerHTML=iron;
  document.getElementById("population").innerHTML=population;
  
   document.getElementById("forge").innerHTML=forge.quality;  
   document.getElementById("farm").innerHTML=farm.quality;  
   document.getElementById("house").innerHTML=house.quality;  
  document.getElementById("mine").innerHTML=mine.quality;
 
}
function endTern(){
  food+=farm.give.food*farm.quality+forge.give.food*forge.quality+house.give.food*house.quality+mine.give.food*mine.quality;
  stone+=farm.give.stone*farm.quality+forge.give.stone*forge.quality+house.give.stone*house.quality+mine.give.stone*mine.quality;
  
  wood+=farm.give.wood*farm.quality+forge.give.wood*forge.quality+house.give.wood*house.quality+mine.give.wood*mine.quality;
  iron+=farm.give.iron*farm.quality+forge.give.iron*forge.quality+house.give.iron*house.quality+mine.give.iron*mine.quality;
  
var eaten=population*2;//temp
if(eaten<=food){
  food-=eaten;
}else if(men+food>=eaten){
  eaten-=food;
  population-=eaten;
  men-=eaten;
  food=0;  
}else if(forge.quality+men+food>=eaten){
  eaten-=food;
  eaten-=men;
  forge.quality-=eaten;
  food=0;  
  populatin-=men;
  men=0;
}else if(mine.quality+forge.quality+men+food>=eaten){
  eaten-=food;
  eaten-=men;
  eaten-=forge.quality;
  mine.quality-=eaten;
  food=0;  
  populatin-=men;
  men=0;
  forge.quality=0;
}else if(house.quality+mine.quality+forge.quality+men+food>=eaten){
  eaten-=food;
  eaten-=men;
  eaten-=forge.quality;
  eaten-=mine.quality;
  house.quality-=eaten;
  food=0;  
  populatin-=men;
  men=0;
  forge.quality=0;
  mine.quality=0;
}else if(farm.quality+house.quality+mine.quality+forge.quality+men+food>=eaten){
  eaten-=food;
  eaten-=men;
  eaten-=forge.quality;
  eaten-=mine.quality;
  eaten-=house.quality;
  farm.quality-=eaten;
  food=0;  
  populatin-=men;
  men=0;
  forge.quality=0;
  mine.quality=0;
  house.quality=0;
}else{
  population=0;
  men=0;
  forge.quality=0;
  mine.quality=0;
  house.quality=0;
  farm.quality=0;
}
  gold+=population*2;
  var temp=0;
  if(food>0){  temp=farm.give.men*farm.quality+forge.give.men*forge.quality+house.give.men*house.quality+mine.give.men*mine.quality;}
  population+=temp;
  men+=temp;
  temp=0;
  terminal("zaczyna się nowa tura");
display();
  

}
function terminal(info){
  var temp0 = "<br>"+info;
  terminallogs.unshift(temp0);
  document.getElementById("terminal").innerHTML=terminallogs;
}