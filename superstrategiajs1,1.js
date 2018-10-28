//wypisanie wszystkiego należy do HTML
	var wybor;
	var a;
	var runda = 1;
	var kolejka=0;
	//gracze tabele inne niż w c++
	var jedzenie = [100000, 100000, 100000, 100000, 100000, 100000];
	var pieniadze = [100000, 100000, 100000, 100000, 100000, 100000];
	var domy = [2, 2, 2, 2, 2, 2];
	var farmy = [0, 0, 0, 0, 0, 0];
	var sklepy = [0, 0, 0, 0, 0, 0];
	var bazy_wojskowe = [0, 0, 0, 0, 0, 0];
	var ludzie = [8, 8, 8, 8, 8, 8];
	var zolnierze = [0, 0, 0, 0, 0, 0];
	
	while(true){
	//wypisywanie potrzeba do tego już pliku html
	for(int i=0; i<6;i++){
	while(!/*kliknięto guzik*/){
	
			//gra gracz 1 html
			
    if /*klikniento guzik 1*/ {
    	if(pieniadze[i] >= 20000)
					{
						domy[i]++;
						ludzie[i] = ludzie[i] + 4;
						pieniadze[i] = pieniadze[i] - 20000;
					}
    }else
    if /*klikniento guzik 2*/{
    	if(pieniadze[i] >= 50000 && ludzie[i] >= 5)
					{
						farmy[i]++;
						ludzie[i] = ludzie[i] - 5;
						pieniadze[i] = pieniadze[i] - 50000;
					}
    }else
     if /*klikniento guzik 3*/{
		if(pieniadze[i] >= 80000 && ludzie[i] >= 6)
					{
						sklepy[i]++;
						ludzie[i] = ludzie[i] - 6;
						pieniadze[i] = pieniadze[i] - 80000;
					}
     }else
     if /*klikniento guzik 4*/{
		if(pieniadze[i] >= 500000)
					{
						bazy_wojskowe[i]++;
						pieniadze[i] = pieniadze[i] - 500000;
					}
     }else
     if /*klikniento guzik 5*/{

     }
 }
 }
 
		for(int i=0;i<6;i++){
			pieniadze[i] = pieniadze[i] + domy[i] * 1000 - farmy[i] * 2000 + sklepy[i] * 2500;
			jedzenie[i] = jedzenie[i] - ludzie[i] * 2000 + farmy[i] * 20000;
			}
			//html odświerzenie
		
		runda++;
	}
//wciąż nie ma ataków i wszystko jest na jednym komputerze 
//nie ma czytania guzików odświerzania i planowanych kosztów budynków
//proponuje użycie php do przetwarzania a js tylko do czytania i odświerzania
