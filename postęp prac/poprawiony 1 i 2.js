$(function(){

var pytania = [];
var zestawPytan1 = [] ;
var zestawPytan2 = [];
var odpowiedzi = [];
var zestawOdpowiedzi1 =[];
var zestawOdpowiedzi2 =[];
var i = 0;
var numerPytania = 1;
var liczbaPunktow = 0;
var liczbaPytan = pytania.length;
var imie ='';
var podanaOdpowiedz = $("#getAnswer");
var name = $("#name");
var wartosc = '';
var j = 0;
var h = 0; 
var di = "<input class='inputs' disabled='disabled'/>";
var diFirst = "<input class='inputs'>";
var diLast = "<input class='inputs' id='lastInput'>";
var dyktando;// [];
var dykOdp;// [];
var iloscPytDyk;
var iloscWpisDyk = 0;
var radioHtml;// = [mozliwosc1,mozliwosc2];
var radioVal;// = [poprawnywybor1, poprawnywybor2];
var sformulowania;// =[sformulowanie1,sformulowanie2];
var k=0;
var g=0;
var licznikRadio = 1; 
var licznik = 0;
var iloscGier = 0;
var nowaSuma=0;
var sumaMax = 0;
var lacznyWynik = function(punkty){ //dodaje wynik danego gracza z różnych gier do momentu zmiany gracza
	nowaSuma+=punkty;
	return nowaSuma;
};
var max = function(maxpunty) { //dodaje max możliwe do zdobycia punkty danego gracza do momentu zmiany gracza
	sumaMax+=maxpunty;
	return sumaMax;
};
var wynikProcent = function(nowaSuma,sumaMax){ //wynik całkowity gry wywoływany przy zmianie gracza
	if(sumaMax!=0){ //trochę na wyrost, bo sytuacja się nie ma prawa zdarzyć
	return Math.ceil(nowaSuma/sumaMax*100);
	}
	else{
		return 0;
	}
};

//zmienne liczbowe, co by zadania się nie powtarzały

var z1020 = Math.floor(Math.random()*(20 - 10 +1)) + 10; //z zakresu 10-20
var z0110 = Math.floor(Math.random()*(10 - 1 +1)) + 1; //z zakresu 1-10
var z0005 = Math.floor(Math.random()*6); //z zakresu 0-5
var z1520 = Math.floor(Math.random()*(20 - 15 +1)) + 15; //z zakresu 15-20
var z1015 = Math.floor(Math.random()*(15 - 10 +1)) + 10; //z zakresu 10-15
var z0207 = Math.floor(Math.random()*(7 - 2 +1)) + 2; //z zakresu 02-07
var z0105 = Math.floor(Math.random()*(5) + 1); //z zakresu 01-05
var z0812 = Math.floor(Math.random()*(12 - 8 +1)) + 8; //z zakresu 08-12
var z0103 = Math.floor(Math.random()*(3) + 1); //z zakresu 01-03
var z0102 = Math.floor(Math.random()*(2) + 1); //z zakresu 01-02
var z0203 = Math.floor(Math.random()*(2) + 2); //z zakresu 02-03
var z0510 = Math.floor(Math.random()*(10 - 5 +1)) + 5; //z zakresu 05-10
var z0204 = Math.floor(Math.random()*(4 - 2 +1)) + 2; //z zakresu 02-04
var parzysta = function(a) { //parzysta potrzebna w jednym zadaniu
	if(a % 2 === 0) 
		return a
	else
		return (a +1)
};

//Matematyka - zestaw1 (Quiz1);
var pytanie1 = 'Iron-Man kupił ' + z1520 + ' bułek na śniadanie, zjadł ' + z0103 + ', a ' + z0102 + ' zjadł Kapitan Ameryka, wieczorem każdy zjadł po ' + z0203 + ' bułki. Ile bułek zostało Tonemu?'
var pytanie2 = 'Deadpool kupił sobie ' + z0510 + ' nowych mieczy, i włożył je do swojej szafy, wcześniej miał już w tej szafie ' + z0203 + ' miecze. Ile mieczy ma teraz w szafie Deadpool?'
var pytanie3 = 'Następnego dnia Deadpool zauważył, że ktoś pożyczył sobie od niego '+ z0207 + ' mieczy, Ant-Man przyniósł mu jednak dodatkowe ' + z0204 + ' miecze, Deadpool schował je do szafy ile mieczy ma w szafie Deadpool?'
var pytanie4 = 'Batman nie miał już ani jednego Batarangu, na urodziny dostał od Cyborga ' + (z0105 + z0510) +' Batarangów, od Robina ' + z0204 + ', a od Bestii 3 bat-harpuny. Ile Batarangów ma teraz nasz dzielny Nietoperz?'
var pytanie5 = 'Hawkeye od dziecka chciał zostać bohaterem, kupił więc sobie książkę o superbohaterach za ' + (z1015-z0105) + 'zł, w portfelu miał wcześniej ' + z1520 + 'zł ile pieniędzy mu zostało?'
var pytanie6 = 'Spider-Man pokonał w tym miesiącu już ' + z0207 + ' wrogów, do końca miesiąca chce ich pokonać jeszcze ' + z0812 +', ilu wrogów pokona razem Pajączek?'
var pytanie7 = 'Czarna Wdowa miała ' + z0510 + ' sukienek, Scarlet Witch pożyczyła od niej ' + z0204 + ' sukienki, a Hulk kupił jej kolejne ' + z0812 + '. Ile sukienek ma teraz Czarna Wdowa?'
var pytanie8 = 'Fury ogłosil nabór na na nowych bohaterów, na trening przyszło ' + parzysta(z1020) + ' kandydatów, testy zdała połowa kandydatów, i oni zasilą szeregi Avengers. Ilu nowych bohaterów przyjmie Fury?'
var pytanie9 = 'Bestia to straszny żarłok, chciał zrobić Tytanom prezent i kupił ' + z1520 + ' pączków, sam zjadł już jednak ' + z0812 + ', ile pączków zostało dla reszty?'
var pytanie10 = "Fury wytypował do kolejnego zadania Fantastyczną Czwórkę, " + z0204 + " z drużyny Avengers  i " + z0510 + " X-Menów. Muszą oni pokonać Doktora Doom'a. Ilu bohaterów wysłał Fury na misję?"

var odpowiedz1 = z1520 - z0103 - z0102 - z0203 - z0203;
var odpowiedz2 = z0510 + z0203;
var odpowiedz3 = odpowiedz2 - z0207 + z0204;
var odpowiedz4 = z0105 + z0510 + z0204;
var odpowiedz5 = z1520 - (z1015 - z0105);
var odpowiedz6 = z0207 + z0812;
var odpowiedz7 = z0510 - z0204 + z0812;
var odpowiedz8 = parzysta(z1020)/2;
var odpowiedz9 = z1520 - z0812;
var odpowiedz10 = 4 + z0204 + z0510;


zestawPytan1 = [pytanie1, pytanie2, pytanie3, pytanie4, pytanie5, pytanie6, pytanie7, pytanie8, pytanie9, pytanie10];
zestawOdpowiedzi1 =[odpowiedz1, odpowiedz2 , odpowiedz3, odpowiedz4, odpowiedz5, odpowiedz6, odpowiedz7, odpowiedz8, odpowiedz9, odpowiedz10];


//Matematyka zestaw 2 (Quiz2)
var pytanie11 ='Obi Wan ma ' + z0510 + ' Padawanów ' + ' Yoda kazałał mu zaopiekować się kolejnymi ' + z0207 + ' ilu Padawanów ma Obi Wan?';
var pytanie12 ='Luke szuka Holokronów ukrytych przez Obi Wana. Znalazł już ' + z1020 + '. Niestety przez awarię jego X-winga ' + z0203 + ' uległy zniszczeniu. Ile mu zostało?';
var pytanie13 ='Przed bitwą z Imperium flota Rebelii liczyła ' + z1520 + ' krążowników. W trakcie bitwy Imperium zestrzeliło ' + z0510 + ' krążowników rebeliantów. Ile statków zostało Rebelii po bitwie?';
var pytanie14 ='Padme uwielbia różne nakrycia głowy. Na początku miesiąca miała ' + z0005 + ' koron(ę). Od Anakina dostała ' + z0207 + ' kapelusze(y), a od Obi Wana ' + z0110 + ' diademy(ów). Ile nakryć głowy ma teraz Padme?';             var pytanie15 ='W świątyni Jedi było ' + z1520 + ' Mistrzów, ' + z1015 + ' udało się na poszukiwanie Greviousa. Ilu Mistrzów Jedi zostało w świątyni?';
var pytanie16 ='Jango Fett zbiera blastery. Ma ich już ' + z0110 + '. Chce dokupić jeszcze ' + z0207 + '. Ile będzie miał blasterów po zakupie?';                                         
var pytanie17 ='Zbieranie złomu to ciężka robota, wie o tym doskonale Rey. Udało jej się zebrać już ' + z1520 + ' różnych przedmiotów. Niestety napotkała przemytników, którzy ukradli jej  ' + z0110 + '. Miała też trochę szczęścia, bo po drodze do skupu udało się jej znaleźć opuszczony statek, z którego wydobyła ' + z0207 + ' przedmiotów. Ile części złomu miała na sprzedaż?';  
var pytanie18 ='Moc jest w każdym z nas, wykorzystaj ją i szybko oblicz ile to jest ' + z0105 + ' + ' + z0105 + ' + ' + z0105 + ' + ' + z0105 + '?'; 
var pytanie19 ='Lord Vader ma problem z policzeniem wszystkich szturmowców, pewnie dlatego, że wszyscy wyglądają tak samo. Na początku było ich ' + z0812 + ', ' + z0204+ ' wybrało się testować nowe blastery, a ' + z0207 + ' dodatkowych przysłał mu Imperator. Ilu szturmowców ma do dyspozycji Skywalker';              
var pytanie20 ='Han Solo i Chewbaca zarobili ' + z1020 + ' Kredytów, na nowe części do Sokoła Millennium wydali ' + z0005 + ', a na zaopatrzenie ' + z0105 + '. Ile Kredytów im zostało. Pamiętaj, że Kredyt to jednostka monetarna obowiązująca w całej Galaktyce.';

var odpowiedz11 = z0510 + z0207;
var odpowiedz12 = z1020 - z0203;
var odpowiedz13 = z1520 - z0510;
var odpowiedz14 = z0005 + z0207 + z0110;
var odpowiedz15 = z1520 - z1015;
var odpowiedz16 = z0110 + z0207;
var odpowiedz17 = z1520 - z0110 + z0207;
var odpowiedz18 = z0105 + z0105 + z0105 + z0105;
var odpowiedz19 = z0812 - z0204 + z0207;
var odpowiedz20 = z1020 - z0005 - z0105;

zestawPytan2 = [pytanie11, pytanie12, pytanie13, pytanie14, pytanie15, pytanie16, pytanie17, pytanie18, pytanie19,pytanie20];
zestawOdpowiedzi2 =[odpowiedz11, odpowiedz12, odpowiedz13, odpowiedz14, odpowiedz15, odpowiedz16,odpowiedz17,odpowiedz18, odpowiedz19, odpowiedz20 ];

//Język Polski zestaw1 (Quiz3)
var dykPyt1 = ["Nexo Knights wyr"+diFirst+"szyli na poszukiwanie zaginionej Księgi Zaklęć Tajemnych. Lance zebrał dru"+di+"ynę. Zbi"+di+"rka odbyła się na dziedzińcu zamk"+diLast+"."];
var dykPyt2 = ["Jestro już szykował się na ryce"+diFirst+"y, zebrał swoją armię na skraj"+di+" las"+di+". P"+diLast+"ekazał już pierwsze rozkazy"];
var dykPyt3 = ["Rycerze postanowili zmylić p"+diFirst+"eciwnika, tylko tr"+di+"jka wyszła mu na spotkanie, a pozostali  przy u"+di+"yciu magii, Merloka 2.0, teleportowali się w głąb p"+diLast+"szczy."];
var dykPyt4 = ["Księga znajdowała się w jaskini, do kt"+diFirst+"rej dostać m"+di+"gł się tylko jeden rycerz. Do zadania zgłosił się Clay. Szybko dostał się do środka i chwycił księgę. Cała jaskinia zatczęła się t"+di+"ąść więc Clay błyskawicznie się obr"+diLast+"cił i wyskoczył z jaskini."]
var dykPyt5 = ["W drodze powrotnej do zamku, Clay skierował dr"+diFirst+"żynę w kier"+di+"nku bitwy, okazało się jednak, że została ona już dawno skończona. Lance i Axl walczyli dzielnie, a Jestro ze swoimi zbirami "+di+"ciekł, gdzie piep"+diLast+" rośnie."]
	
var poprawne1 = ["u", "ż", "ó", "u"];
var poprawne2 = ["rz", "u","u","rz"];
var poprawne3 = ["rz", "ó","ż","u"];
var poprawne4 = ["ó", "ó","rz","ó"];
var poprawne5 = ["u", "u","u","rz"];
	
//potrzebne do określenia liczby powtórzeń
iloscPytDyk = poprawne1.length + poprawne2.length + poprawne3.length + poprawne4.length + poprawne5.length;
	
//Język Polski zestaw1 (Quiz3)
var dykPyt6 = ["Władca Cieni wysłał na Ziemię cztery Akumy, trafiły one do os"+diFirst+"b ze szkoły Marinet i Adriena. M"+di+"sieli się, więc oni naty"+di+"miast p"+diLast+"emienić w Biedronkę i Czarnego Kota." ];
var dykPyt7 = ["Dw"+diFirst+"ch wrog"+di+"w dostało moce władania prądem, wyłączyli zasilanie w całym mieście, Biedronka i Czarny Kot spotkali się z nimi w park"+di+", i pokonali ich dzięki doskonałej wsp"+diLast+"łpracy."];
var dykPyt8 = ["W mieście nadal nie było jednak prąd"+diFirst+", Alia "+di+"dała się, więc do Burmist"+di+"a, kt"+diLast+"ry zadzwonił do Elektrowni i dostawy elektryczności zostały wznowione."];
var dykPyt9 = ["Pozostałe dwie Akumy grasowały po szkole, jedna miała moc kontrolowania zwie"+diFirst+"ąt, w szkole zaroiło się, więc od ró"+di+"nego rodzaju stwo"+di+"eń. Biedronka rozprawiła się z Akumą na szkolnym boisk"+diLast+"."]
var dykPyt10 = ["Czarny Kot walczył z czwartą Akumą, na da"+diFirst+"u gł"+di+"wnego budynku szkoły. Rzucająca chlebem postać nie miała szans, Kot pokonał ją u"+di+"ywając sprytu i spok"+diLast+"j w Paryżu został przywrócony"]
	
var poprawne6 = ["ó", "u", "ch", "rz"];
var poprawne7 = ["ó", "ó","u","ó"];
var poprawne8 = ["u", "u","rz","ó"];
var poprawne9 = ["rz", "ż","rz","u"];
var poprawne10 = ["ch", "ó","ż","ó"];
	
//Angielski zestaw 1 (Quiz5)
	
var mozliwosc1 = ["Carrot", "Tomato", "Potato", "Cucumber"];
var mozliwosc2 = ["Tomato", "Onion", "Cucumber", "Carrot"];
var mozliwosc3 = ["Garlic", "Lemon", "Onion", "Apple"];
var mozliwosc4 = ["Cabbage", "Lime", "Cucumber", "Pepper"];
var mozliwosc5 = ["Radish", "Carrot", "Lettuce", "Pumpkin"];
var mozliwosc6 = ["Spinach", "Pepper", "Leek", "Peas"];
var mozliwosc7 = ["Turnip", "Eggplant", "Cauliflower", "Beans"];
var mozliwosc8 = ["Sweet potato", "Lettuce", "Onion", "Broccoli"];
var mozliwosc9 = ["Garlic", "Onion", "Radish", "Peas"];
var mozliwosc10 = ["Lettuce", "Tomato", "Potato", "Carrot"];
	
var poprawnywybor1 = ['','','',"v"];
var poprawnywybor2 = ['v','','',''];
var poprawnywybor3 = ['','','v',''];
var poprawnywybor4 = ['v','','',''];
var poprawnywybor5 = ['','v','',''];
var poprawnywybor6 = ['','v','',''];
var poprawnywybor7 = ['','','v',''];
var poprawnywybor8 = ['','','','v'];
var poprawnywybor9 = ['v','','',''];
var poprawnywybor10 = ['','','v',''];
	
var sformulowanie1 = ['<span>What is the name of this?</span><div class="vegeImg"><img src="images/vege/ogorek.jpg" alt="ogor"/></div>'];
var sformulowanie2 = ['<span>What is the name of this?</span><div class="vegeImg"><img src="images/vege/pomidor.jpg" alt="pomid"/></div>'];
var sformulowanie3 = ['<span>What is the name of this?</span><div class="vegeImg"><img src="images/vege/cebula.jpg" alt="cebul"/></div>'];
var sformulowanie4 = ['<span>What is the name of this?</span><div class="vegeImg"><img src="images/vege/kapusta.jpg" alt="kapustka"/></div>'];
var sformulowanie5 = ['<span>What is the name of this?</span><div class="vegeImg"><img src="images/vege/marchew.jpg" alt="marchewa"/></div>'];
var sformulowanie6 = ['<span>What is the name of this?</span><div class="vegeImg"> <img src="images/vege/papryka.jpeg" alt="papryka"/></div>'];
var sformulowanie7 = ['<span>What is the name of this?</span><div class="vegeImg"><img src="images/vege/kalafior.jpg" alt="kalafior"/></div>'];
var sformulowanie8 = ['<span>What is the name of this?</span><div class="vegeImg"><img src="images/vege/brokuly.jpg" alt="brokul"/></div>'];
var sformulowanie9 = ['<span>What is the name of this?</span><div class="vegeImg"><img src="images/vege/czosnek.jpg" alt="czoch"/></div>'];
var sformulowanie10 = ['<span>What is the name of this?</span><div class="vegeImg"><img src="images/vege/ziemniak.jpg" alt="pyra"/></div>'];

//potrzebne do ustalenia ilości powtórzeń 
radioHtml = [mozliwosc1,mozliwosc2,mozliwosc3,mozliwosc4,mozliwosc5,mozliwosc6,mozliwosc7, mozliwosc8, mozliwosc9, mozliwosc10];
	
//Angielski zestaw 2 (Quiz6)
var mozliwosc11 = ["Bedroom", "Toilet", "Ceiling", "Chair"];
var mozliwosc12 = ["Kitchen", "Oven", "Table", "Living room"];
var mozliwosc13 = ["Bedroom", "Kitchen", "Bathroom", "Attic"];
var mozliwosc14 = ["Bathroom", "Living room", "Corridor", "Window"];
var mozliwosc15 = ["Court", "Garden", "Basement", "Microwave"];
var mozliwosc16 = ["Basement", "Corridor", "Toilet", "Garage"];
var mozliwosc17 = ["Fence", "Wood", "Street", "Field"];
var mozliwosc18 = ["Garden", "Shoe", "Mirror", "Window"];
var mozliwosc19 = ["Table", "Chair", "Door", "Wall"];
var mozliwosc20 = ["Chair", "Floor", "Table", "Oven"];
var poprawnywybor11 = ['v','','',''];
var poprawnywybor12 = ['v','','',''];
var poprawnywybor13 = ['','','v',''];
var poprawnywybor14 = ['','v','',''];
var poprawnywybor15 = ['','v','',''];
var poprawnywybor16 = ['','','','v'];
var poprawnywybor17 = ['v','','',''];
var poprawnywybor18 = ['','','','v'];
var poprawnywybor19 = ['','','v',''];
var poprawnywybor20 = ['','','v',''];
	
var sformulowanie11 = ['<span>What is the name of this? Move the mouse over image to enlarge it.</span><div class="houseImg"><img src="images/house/sypialnia.jpg" alt="sypialnia"/></div>'];
var sformulowanie12 = ['<span>What is the name of this? Move the mouse over image to enlarge it.</span><div class="houseImg"><img src="images/house/kuchnia.jpg" alt="kuchnia"/></div>'];
var sformulowanie13 = ['<span>What is the name of this? Move the mouse over image to enlarge it.</span><div class="houseImg"><img src="images/house/łazienka.jpg" alt="łazienka"/></div>'];
var sformulowanie14 = ['<span>What is the name of this? Move the mouse over image to enlarge it.</span><div class="houseImg"><img src="images/house/salon.jpg" alt="salon"/></div>'];
var sformulowanie15 = ['<span>What is the name of this? Move the mouse over image to enlarge it.</span><div class="houseImg"><img src="images/house/ogrod.jpg" alt="ogrod"/></div>'];
var sformulowanie16 = ['<span>What is the name of this? Move the mouse over image to enlarge it.</span><div class="houseImg"> <img src="images/house/garaż.jpg" alt="garaz"/></div>'];
var sformulowanie17 = ['<span>What is the name of this? Move the mouse over image to enlarge it.</span><div class="houseImg"><img src="images/house/ogrodzenie.jpg" alt="ogrodzenie"/></div>'];
var sformulowanie18 = ['<span>What is the name of this? Move the mouse over image to enlarge it. </span><div class="houseImg"><img src="images/house/okno.jpg" alt="okno"/></div>'];
var sformulowanie19 = ['<span>What is the name of this? </span><div class="houseImg"><img src="images/house/drzwi.jpg" alt="drzwi"/></div>'];
var sformulowanie20 = ['<span>What is the name of this?</span><div class="houseImg"><img src="images/house/stół.jpg" alt="stół"/></div>'];


//ekran początkowy
		
name.focus(); //ustawia focus na wpisanie imienia na początku gry 
		
name.on("keyup", function(){ //rozpoczyna grę i usuwa disabled z zestawów
	if(name.val()!="") { //sprawdza czy coś jest wpisane
		$(".startQuiz").removeAttr("disabled");  //usuwa disabled z zestawów
	};
	nowaSuma=0; //zeruje wartość po zmianie gracza (były problemy przy przycisku)
	sumaMax=0; //zeruje wartość po zmianie gracza (były problemy przy przycisku)
	imie=name.val(); //nadaje zmiennej imię wartość z pola
});
		
//Quiz 1 - matma zestaw !
$("#Quiz1").on("click", function(){//rozpoczyna pierwszy quiz
	$(".welcome").hide(); //chowa ekran powitalny
	$(".container").slideDown(1000); //pokazuje ekran gry
	podanaOdpowiedz.show().focus(); //ustawia focus na input
	pytania = zestawPytan1; //przydziela zestaw pytań
	odpowiedzi = zestawOdpowiedzi1; //przydziela zestaw odpowiedzi
	liczbaPytan = pytania.length; //przydiela liczbę pytań
	$("p").fadeIn().html(pytania[i]); //ustala pytanie na numerze indeksu tablicy 0 czyli pytanie 1
	$("#questionNumber").html(numerPytania); //podstawia numer pytania
	$("#questionsQuantity").html(liczbaPytan); //podstawia łączną ilość pytań
	$("#points").html(liczbaPunktow); //podstawia liczbę punktów
	$("#submitAnswer").removeAttr("disabled").show(); //zwalnia przycisk "odpowiedz"
	$("#next").show().attr("disabled","disabled"); //blokuje i pokazuje przycisk "next"
	animowanyPasek(numerPytania,2); //rusza pasek postępu
});
		
		//quiz2 rozpoczęcie
$("#Quiz2").on("click", function(){ //rozpoczyna drugi quiz
	$(".welcome").hide();
	$(".container").slideDown(1000);	
	podanaOdpowiedz.show().focus();
	pytania = zestawPytan2;
	odpowiedzi = zestawOdpowiedzi2;	
	liczbaPytan = pytania.length;	
	$("p").fadeIn().html(pytania[i]);
	$("#questionNumber").html(numerPytania);
	$("#questionsQuantity").html(liczbaPytan);
	$("#points").html(liczbaPunktow);	
	$("#submitAnswer").removeAttr("disabled").show();	
	$("#next").show().attr("disabled","disabled");	
	animowanyPasek(numerPytania,2) ;
});
		
		
		
	//odpowiedzi Quiz1 i Quiz2 poprawna odpowiedź
$("#submitAnswer").on("click", function(){
	if(podanaOdpowiedz.val()==odpowiedzi[i]){ //wpisana wartość musi być równa odpowiedzi
		$("#answer").fadeIn().html("Dobra odpowiedź").css("color","green");//pokazuje dobrą odpowiedź
		liczbaPunktow++; //zwiększa liczbę punktów
	}
	//niepoprawna odpowiedź
	else{
		$("#answer").fadeIn().html("Zła odpowiedź").css("color","red");
		$(this).attr("disabled","disabled")
	}
		$(this).attr("disabled","disabled"); //blokuje ten przycisk
		$("#next").removeAttr("disabled");//usuwa blokadę z przycisku następne
		$("#points").html(liczbaPunktow); //zmienia liczbę punktów
		$("#end").removeAttr("disabled"); //usuwa blokadę z przycisku zakończ kiedy ten się pojawia
		$("p").fadeOut(); //chowa pytanie

});
		
	//następne pytanie
$("#next").on("click", function(){
		$(this).attr("disabled","disabled");
		i++;     //zwiększa indeks
		numerPytania++; //zwiększa nr pytania
		$("p").html(pytania[i]).fadeIn(); //pokazuje kolejne pytanie
		$("#questionNumber").html(numerPytania); //podstawia nr pytania
		$("#submitAnswer").removeAttr("disabled"); //usuwa blokadę z przyciski odpowiedz
		$("#answer").fadeOut(); //chowa odpowiedź
		podanaOdpowiedz.val("").focus(); //focus ponownie w miejscu na odpowiedź
		animowanyPasek(numerPytania,2); //rusza paskiem postępu
			if(numerPytania==(liczbaPytan)) {//powtarza wyświetlanie pytania aż do pytania 9
				$(this).hide();
				$("#end").show().attr("disabled","disabled");
				}
});	
	
	//koniec
	$("#end").on("click", function(){ //podsumowanie
		$(this).hide();//chowa ten przycisk
		$("#submitAnswer").hide(); //chowa możliwość odpowiadania
		$("#answer").hide() //chowa możliwość odpowiadania
		var wynik = liczbaPunktow/liczbaPytan*100; //podsumowuje wynik gracza z tego zadania
		$("#questionNumber").html(numerPytania); //podstawia nr pytania
		$("p").fadeOut();//chowa treścpytana
		$("#total").text(lacznyWynik(liczbaPunktow)); //przekazuje wynik do zmiennej laczny wynik
		$("#maximum").text(max(liczbaPytan)); //przekazuje liczbę pytań w tym quizie
		podanaOdpowiedz.hide(); //chowa input
		$("#restart").show(); //pokazuje restart
		podsumowanie(wynik,imie) //pokazuje podsumowanie
		
		
	});
		//powrót do ekranu początkowego
		$("#restart").on("click", function(){
			pytania =[]; //zeruje tebele
			odpowiedzi=[]; //zeruje odpowiedzi
			$(this).hide(); //chowa ten przycisk
			$(".welcome").show();//pokazuje ekran początkowy
			$(".container").hide(); //chowa ekran gru
			liczbaPunktow=0; //zeruje liczbę punktów
			numerPytania=1;//ustawia nr pytania na 1
			i=0; //zeruje indeks
			$("#thankYou").hide(); //chowa podiękowanie
			$("#summary").hide(); //chowa podsumowanie
			podanaOdpowiedz.removeAttr("disabled").val('');//usuwa blokadę input
			$("#changePlayer").show().removeAttr("disabled"); //pokazuje przycisk zmień gracza
			animowanyPasek(numerPytania,2); //zmienia wartość animowanego paska
			name.attr("disabled","disabled"); //blokuje przycisk name
			$("#totalScore").show(); //pokazuje łączny wynik
		});		
		
		//radio angielski rozpoczęcie
		$("#Quiz5").on("click", function(){
		radioHtml = [mozliwosc1,mozliwosc2,mozliwosc3,mozliwosc4,mozliwosc5,mozliwosc6,mozliwosc7, mozliwosc8, mozliwosc9, mozliwosc10];
		radioVal = [poprawnywybor1, poprawnywybor2, poprawnywybor3, poprawnywybor4, poprawnywybor5, poprawnywybor6, poprawnywybor7, poprawnywybor8, poprawnywybor9, poprawnywybor10];
		sformulowania =[sformulowanie1,sformulowanie2, sformulowanie3,sformulowanie4, sformulowanie5, sformulowanie6, sformulowanie7, sformulowanie8, sformulowanie9, sformulowanie10];
		$(".welcome").hide();
		$(".container").slideDown(1000);
		$("form").show();
		$("p").html(sformulowania[k][0]).addClass("centerP");
		$('#getAnswer').hide();
		$('#submitAnswer').hide();
		$('#next').hide();
		$('#nextRadio').show();
		$("#points").text(liczbaPunktow);
		$("#questionNumber").text(licznikRadio);
		$("input[type='radio'").prop('checked',false);
		animowanyPasek(licznikRadio,2);
		$("#questionsQuantity").text(radioHtml.length);
		$("#endRadio").attr("disabled","disabled");
		$("input[type='radio']").each(function(){
			$(this).prop('value',radioVal[k][g]);
			$(this).closest("div").find("label").html(radioHtml[k][g]);
			//alert($(this).val());
			g++;
		});
		});
		
		$("#Quiz6").on("click", function(){
		radioHtml = [mozliwosc11,mozliwosc12,mozliwosc13,mozliwosc14,mozliwosc15,mozliwosc16,mozliwosc17, mozliwosc18, mozliwosc19, mozliwosc20];
		radioVal = [poprawnywybor11, poprawnywybor12, poprawnywybor13, poprawnywybor14, poprawnywybor15, poprawnywybor16, poprawnywybor17, poprawnywybor18, poprawnywybor19, poprawnywybor20];
		sformulowania =[sformulowanie11,sformulowanie12, sformulowanie13,sformulowanie14, sformulowanie15, sformulowanie16, sformulowanie17, sformulowanie18, sformulowanie19, sformulowanie20];
		$(".welcome").hide();
		$(".container").slideDown(1000);
		$("form").show();
		$("p").html(sformulowania[k][0]).addClass("centerP");
		$('#getAnswer').hide();
		$('#submitAnswer').hide();
		$('#next').hide();
		$('#nextRadio').show();
		$("#points").text(liczbaPunktow);
		$("#questionNumber").text(licznikRadio);
		$("input[type='radio'").prop('checked',false);
		animowanyPasek(licznikRadio,2);
		$("#questionsQuantity").text(radioHtml.length);
		$("#endRadio").attr("disabled","disabled");
		$("input[type='radio']").each(function(){
			$(this).prop('value',radioVal[k][g]);
			$(this).closest("div").find("label").html(radioHtml[k][g]);
			//alert($(this).val());
			g++;
		});
		});
		
		
		
		//sprawdzenie odpowiedzi
		$("form").on("click", "input[type='radio']:checked", function(){
		licznik++;
		//$("#nextRadio").focus();
		//$(".questionsLabels").css({"cursor":"not-allowed", "color":"gray"});
		//$("input[type='radio']").css("cursor","not-allowed");
		//alert(licznik);
		if(licznik==10 && $(this).val()!=''){
			liczbaPunktow++;
			$("#points").text(liczbaPunktow);
			$("#endRadio").prop("disabled",false);
			}
		//alert("cos zupełnie innego");
		else if(licznik==10){
		$("#endRadio").prop("disabled",false);
		}
		else if($(this).val()!=''){
		liczbaPunktow++;
		$("#points").text(liczbaPunktow);
		$("input[type='radio'").attr("disabled","disabled");
		$("#nextRadio").prop("disabled",false);
	
		//alert("licznik dobrze" + licznik);
		}
		else{
		$("input[type='radio'").attr("disabled","disabled");
		$("#nextRadio").prop("disabled",false);

		//alert("licznik źle" + licznik);
		}
		
		
		});

		//następne pytanie
	$("#nextRadio").on("click", function(){
		//alert("radio" + (radioHtml.length-1));
		k++;
		//alert("k" + k);
		licznikRadio++;
		$(this).attr("disabled","disabled");
		$("#questionNumber").text(licznikRadio);
		animowanyPasek(licznikRadio,2);
		g=0;
		$("input[type='radio'").prop("disabled",false).prop('checked',false);
		$("p").html(sformulowania[k][0]);
		//wstawienie prop i treści
		$("input[type='radio']").each(function(){
			$(this).prop('value',radioVal[k][g]);
			$(this).parent().find("label").html(radioHtml[k][g]);
			g++;
		});
		if(k==(radioHtml.length-1)){
		$(this).hide();
		$("#endRadio").show();
		}
	});
	//podsumowuje radio
	$("#endRadio").on("click",function(){
		var wynikRad =liczbaPunktow/radioHtml.length*100;
		$("#total").text(lacznyWynik(liczbaPunktow));
		$("#maximum").text(max(radioHtml.length));
		$(this).hide();
		$("#restartRadio").show();
		$("p").fadeOut();
		$("form").hide();
		podsumowanie(wynikRad,imie);
		
		
		
		});
		//wraca do początku
		$("#restartRadio").on("click", function(){
			g=0;
			k=0;
			licznik=0;
			licznikRadio=1;
			radioHtml = [];
			radioVal = [];
			sformulowania =[];
			liczbaPunktow=0;
			$(this).hide();
			$(".welcome").show();
			$(".container").hide();
			$("#thankYou").hide();
			$("#summary").hide();
			$("p").fadeIn().removeClass("centerP");
			$("#changePlayer").show();
			name.attr("disabled","disabled");
			$("#changePlayer").removeAttr("disabled");
			$("#totalScore").show();
		});
		

	
		//quiz3 dyktando
		
		$("#Quiz3").on("click", function(){
		//iloscWpisDyk=0;
		//liczbaPunktow=0
		dyktando = [dykPyt1, dykPyt2,dykPyt3,dykPyt4,dykPyt5];
		dykOdp = [poprawne1,poprawne2,poprawne3, poprawne4,poprawne5];
		$(".welcome").hide();
		$(".container").slideDown(1000);
		$("p").html(dyktando[h][j]);
		$('.inputs').first().focus();
		$('#getAnswer').hide();
		$('#submitAnswer').hide();
		$('#next').hide();
		$('#nextDyk').show();
		$('#questionsQuantity').html(iloscPytDyk);
		$("#points").text(liczbaPunktow);
		$("#questionNumber").text(iloscWpisDyk);
		animowanyPasek(iloscWpisDyk,4);

		});
		
		$("#Quiz4").on("click", function(){
		//iloscWpisDyk=0;
		//liczbaPunktow=0
		dyktando = [dykPyt6, dykPyt7,dykPyt8,dykPyt9,dykPyt10];
		dykOdp = [poprawne6,poprawne7,poprawne8, poprawne9,poprawne10];
		$(".welcome").hide();
		$(".container").slideDown(1000);
		$("p").html(dyktando[h][j]);
		$('.inputs').first().focus();
		$('#getAnswer').hide();
		$('#submitAnswer').hide();
		$('#next').hide();
		$('#nextDyk').show();
		$('#questionsQuantity').html(iloscPytDyk);
		$("#points").text(liczbaPunktow);
		$("#questionNumber").text(iloscWpisDyk);
		animowanyPasek(iloscWpisDyk,4);

		});
		
		//usuwa disabled z kolejnego i rozpoczyna grę
		$('p').on("focusin", '.inputs', function(){
		$(this).each(function(){
		$(this).css('background-color', 'rgba(179,255,213,.5)').next(".inputs").prop("disabled",false);

		});
		});
		
		//jezeli odpowiedź dobra
		$('p').on("focusout", '.inputs', function(){
		$(this).each(function(){
		if($(this).val()===dykOdp[h][j]){
		//alert(dykOdp[0][j]);
		$(this).css('background-color', '#59B23F').attr("disabled","disabled").next(".inputs").focus()//.prop("disabled",false)//;
		liczbaPunktow++;
		iloscWpisDyk++;//czy źle czy dobrze, suma wszystkich przekliknięć
		}
		//jeżeli odpowiedz zła
		else {
	
		$(this).css('background-color','#B22518').attr("disabled","disabled").next(".inputs").focus();
		iloscWpisDyk++;
		//.next(".inputs").prop("disabled",false)
		}
		//kolejna odpowiedź
		j++
		
	});
		//zmiana punktów
		$("#points").text(liczbaPunktow);
		$("#questionNumber").text(iloscWpisDyk);
		animowanyPasek(iloscWpisDyk,4);
	});
		
		//przejście do następnego
		$("#nextDyk").on("click", function(){
		if(iloscWpisDyk<(iloscPytDyk-poprawne5.length)){
		$(this).attr("disabled","disabled");
		$("p").hide();
		j=0;
		h++;
		$("p").html(dyktando[h][j]).fadeIn(1000);
		$('.inputs').first().focus();
		}
		//ostatni zestaw
		else{
		$(this).hide();
		$("#endDyk").show();
		$("p").hide();
		j=0;
		h++;
		$("p").html(dyktando[h][j]).fadeIn(1000);
		$('.inputs').first().focus();
		
		
		}
	});
		//aktywowanie przycisku nextDyk przy utracie skupienia ostatniego elementu
		
		$('p').on("focusout", "#lastInput", function(){
			if(iloscWpisDyk<=(iloscPytDyk-poprawne5.length)){
			$("#nextDyk").removeAttr('disabled');
			}
			//aktywowanie przycisku koniec
			else {
			$("#endDyk").removeAttr('disabled');
			}
		
		});
		//zakończenie dyktanda - podsumowanie
		$("#endDyk").on("click", function(){
			var wynikDyk = liczbaPunktow/iloscWpisDyk*100
			$("#total").text(lacznyWynik(liczbaPunktow));
			$("#maximum").text(max(iloscWpisDyk));
			$(this).attr("disabled","disabled").hide();
			$("#restartDyk").show();
			$("p").fadeOut();
			podsumowanie(wynikDyk,imie);
			});
			
		//koniec dyktanda powrót do strony początkowej
		$("#restartDyk").on("click", function(){
			h=0;
			j=0;
			dyktando =[];
			dykOdp = [];
			liczbaPunktow=0;
			iloscWpisDyk=0;
			$(this).hide();
			$(".welcome").show();
			$(".container").hide();
			//alert(h);
			//alert(j);
			//alert(iloscWpisDyk);
			$("#thankYou").hide();
			$("#summary").hide();
			$("p").fadeIn();
			$("#nextDyk").attr("disabled","disabled");
			animowanyPasek(iloscWpisDyk,4);
			$("#changePlayer").show();
			name.attr("disabled","disabled");
			$("#changePlayer").removeAttr("disabled");
			$("#totalScore").show();
		
			
		});
		
		//quiz 1
		$("#Quiz1").on("click", function(){
		$(".welcome").hide();
		$(".container").slideDown(1000);
		podanaOdpowiedz.show().focus();
		pytania = zestawPytan1;
		odpowiedzi = zestawOdpowiedzi1;
		liczbaPytan = pytania.length;
		$("p").html(pytania[i]);
		$("#questionNumber").html(numerPytania);
		$("#questionsQuantity").html(liczbaPytan);
		$("#points").html(liczbaPunktow);
		$("#submitAnswer").removeAttr("disabled").show();
		$("#next").show().attr("disabled","disabled");
		animowanyPasek(numerPytania,2) ;
		
		//alert(liczbaPytan);
		//alert("cokolwiek");
		
		
		});
		
		//quiz2 rozpoczęcie
		$("#Quiz2").on("click", function(){
		$(".welcome").hide();
		$(".container").slideDown(1000);
		podanaOdpowiedz.show().focus();
		pytania = zestawPytan2;
		odpowiedzi = zestawOdpowiedzi2;
		liczbaPytan = pytania.length;
		$("p").html(pytania[i]);
		$("#questionNumber").html(numerPytania);
		$("#questionsQuantity").html(liczbaPytan);
		$("#points").html(liczbaPunktow);
		$("#submitAnswer").removeAttr("disabled").show();
		$("#next").show().attr("disabled","disabled");
		animowanyPasek(numerPytania,2) ;
		//confirm(pytania);
		});
		
		
		
	
			var wyniki=[];
			var posortowane ='';
			function sortuj(to){
			to.sort(function(b, a){return a-b});
		};
			
			var imiona = [];
			
		$("#changePlayer").on("click",function(){
			$(this).attr("disabled","disabled");
			name.removeAttr("disabled");
			$("#totalScore").hide();
			$(".startQuiz").attr("disabled","disabled");
			name.focus().val('');
			wyniki.push(wynikProcent(nowaSuma,sumaMax));
			imiona.push(imie);
			var indeksy = wyniki.map(function(element, index){
			return index;
		});
		
			indeksy.sort(function (b,a) {return wyniki[a] - wyniki[b];
			});
			posortowane = ''
			for(var i=0; i < wyniki.length; i++){
			posortowane+="<li>" + imiona[indeksy[i]] + ": " + wyniki[indeksy[i]] +"%</li>"
			}
			$("ol").show().html("Ranking:" + posortowane);
	
		});
		
	//progres bar
	
	function animowanyPasek(liczba, dziel) 
	{
		$("#drugi").animate({
			width : (liczba *100)/dziel
		},500);
	};
	
	//podsumowanie 
		function podsumowanie(wynik,imie) {
			if(wynik < 40) {
		
			$("#summary").fadeIn().html(imie + " twój wynik to " + Math.ceil(wynik) + "%. Następnym razem postaraj się bardziej").css("color","red");
			$("#thankYou").fadeIn().addClass("animowaneFig").html("Dziękuję za grę " + imie)
		}
		else if(wynik <80){
			
			$("#summary").fadeIn().html(imie + " twój wynik to " + Math.ceil(wynik) + "%. Nieźle ale można to zrobić lepiej").css("color","orange");
			$("#thankYou").fadeIn().addClass("animowaneFig").html("Dziękuję za grę " + imie)
		}
		else if(wynik <=90){
		
			$("#summary").fadeIn().html(imie + " twój wynik to " + Math.ceil(wynik) + "%. Bardzo dobrze!").css("color","green");
			$("#thankYou").fadeIn().addClass("animowaneFig").html("Dziękuję za grę " + imie)
		}
		else {
			
			$("#summary").fadeIn().html(imie + " twój wynik to " + Math.ceil(wynik) + "%. Jesteś absolutnym Mistrzem!!!").css("color","blue");
			$("#thankYou").fadeIn().addClass("animowaneFig").html("Dziękuję za grę " + imie)
		}
		};
		

});




