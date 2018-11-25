var drewno = 500;
var kamien = 2000;
var ludzie = 20;
var koszary = 0;
var zolnierze = 0;
var zloto = 1000;
var mozliwosci = "LISTA TWOICH MOŻLIWOŚCI <br/> <br/>";
var bank = 0;
var ilosc_mozliwosci = 10;
var potrzeba

function start()
{
    wypisz_mozliwosci();
    wypisz_zasoby();
}

function wypisz_mozliwosci()
{
    
    if(kamien >= 200)
    {
        mozliwosci += " możesz zbudować kopalnie <br/> 200 kamienia <br/> <br/>";
    }
    if(zloto >= 1000 && drewno >= 500)
    {
        mozliwosci += "możesz zbudować bank <br/> 1000 złota i 500 drewna <br/> <br/>";
    }
    if(drewno >= 200 && kamien >= 300)
    {
        mozliwosci += "możesz zbudować dom <br/> 200 drewna 300 kamienia <br/> <br/>";
    }
    if(drewno >=300 && kamien >=600 && ludzie >=20)
    {
        mozliwosci += "możesz zbudować koszary <br/> 300 drewna 600 kamienia <br/> 20 ludzi";
    }
    if(koszary!=0)
    {
        mozliwosci += "możesz wyszkolić żołnierzy <br/>";
    }

    document.getElementById('lblue').innerHTML = mozliwosci;

}

function wypisz_zasoby()
{
    document.getElementById("zasoby").innerHTML = drewno + " drewna  <br/>" + kamien + " kamieni  <br/>" + zloto + " złota <br/>" + ludzie + " ludzi <br/> " ;
}





function start()
{
    wypisz_mozliwosci();
    wypisz_zasoby();
}



