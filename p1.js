var food=200, men=100, iron=100, gold=100, tury=0;
var pop=men;//zasoby
//budynki
var farm={
  cost:{
    food:0, gold:10, iron:5, men:5},
   give:{
  food:5, gold:0, iron:0, men:0},quantity:0}, 
    forge={
  cost:{
    food:10, gold:20, iron:2, men:3},
   give:{
  food:0, gold:0, iron:5, men:0},quantity:0}, 
    house={
  cost:{
    food:20, gold:5, iron:3, men:2},
   give:{
  food:0, gold:0, iron:0, men:2},quantity:0};

function build(what){
  switch(what){
      case 0:
      if(farm.cost.food<=food&&farm.cost.gold<=gold&&farm.cost.iron<=iron&&farm.cost.men<=men){
        farm.quantity++;
        food-=farm.cost.food;
        iron-=farm.cost.iron;
        gold-=farm.cost.gold;
        men-=farm.cost.men;
      }else{
        alert('nie masz tyle zasobów')
      }
      
      break;
      case 1:
      if(forge.cost.food<=food&&forge.cost.gold<=gold&&forge.cost.iron<=iron&&forge.cost.men<=men){
        forge.quantity++;
        food-=forge.cost.food;
        iron-=forge.cost.iron;
        gold-=forge.cost.gold;
        men-=forge.cost.men;

      }else{
        alert('nie masz tyle zasobów')
      }
      break;
      case 2:
      if(house.cost.food<=food&&house.cost.gold<=gold&&house.cost.iron<=iron&&house.cost.men<=men){
        house.quantity++;
        food-=house.cost.food;
        iron-=house.cost.iron;
        gold-=house.cost.gold;
        men-=house.cost.men;

      }else{
        alert('nie masz tyle zasobów')
      }
      break;
  }
  display();
}
function display(){
  document.getElementById('food').innerHTML=food;
  document.getElementById('gold').innerHTML=gold;
  document.getElementById('iron').innerHTML=iron;
  document.getElementById('men').innerHTML=men;
  document.getElementById('farms').innerHTML=farm.quantity;
  document.getElementById('forges').innerHTML=forge.quantity;
  document.getElementById('houses').innerHTML=house.quantity;
  document.getElementById('turns').innerHTML=tury;
  document.getElementById('pop').innerHTML=pop;
  
}
function turn(){
  food=(farm.give.food*farm.quantity)+(forge.give.food*forge.quantity)+(house.give.food*house.quantity)+food;
  iron=(farm.give.iron*farm.quantity)+(forge.give.iron*forge.quantity)+(house.give.iron*house.quantity)+iron;
   men=(farm.give.men*farm.quantity)+(forge.give.men*forge.quantity)+(house.give.men*house.quantity)+men;
  gold=men+gold;
  pop=farm.cost.men*farm.quantity+forge.cost.men*forge.quantity+house.cost.men*farm.quantity;
  if(food>=pop+men){
    food-=pop;
  }else{
    if(pop<=food){
      men-=food;
    }else{
      men=0;
    }
  }
  tury++;
  display();
}
function event(){
  
}
