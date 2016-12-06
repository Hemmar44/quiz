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

//zmienne liczbowe, co by zadania się nie powtarzały

var z1020 = Math.floor(Math.random()*(20 - 10 +1)) + 10;
var z0110 = Math.floor(Math.random()*(10 - 1 +1)) + 1;
var z0005 = Math.floor(Math.random()*6);
var z1520 = Math.floor(Math.random()*(20 - 15 +1)) + 15;
var z1015 = Math.floor(Math.random()*(15 - 10 +1)) + 10;
var z0207 = Math.floor(Math.random()*(7 - 2 +1)) + 2;
var z0105 = Math.floor(Math.random()*(5) + 1);
var z0812 = Math.floor(Math.random()*(12 - 8 +1)) + 8;
var z0103 = Math.floor(Math.random()*(3) + 1);
var z0102 = Math.floor(Math.random()*(2) + 1);
var z0203 = Math.floor(Math.random()*(2) + 2);
var z0510 = Math.floor(Math.random()*(10 - 5 +1)) + 5;
var z0204 = Math.floor(Math.random()*(4 - 2 +1)) + 2;
var parzysta = function(a) {
		if(a % 2 === 0) 
			return a
		else
			return (a +1)
		};

//zestaw1
var pytanie1 = 'Iron-Man kupił ' + z1520 + ' bułek na śniadanie, zjadł ' + z0103 + ', a ' + z0102 + ' zjadł Kapitan Ameryka, wieczorem każdy zjadł po ' + z0203 + ' bułki. Ile bułek zostało Tonemu?'
var pytanie2 = 'Deadpool kupił sobie ' + z0510 + ' nowych mieczy, i włożył je do swojej szafy, wcześniej miał już w tej szafie ' + z0203 + ' miecze. Ile mieczy ma teraz w szafie Deadpool?'
var pytanie3 = 'Następnego dnia Deadpool zauważył, że ktoś pożyczył sobie od niego '+ z0207 + ' mieczy, Ant-Man przyniósł mu jednak dodatkowe ' + z0204 + ' miecze, Deadpool schował je do szafy ile mieczy ma w szafie Deadpool?'
var pytanie4 = 'Batman nie miał już ani jednego Batarangu, na urodziny dostał od Cyborga ' + (z0105 + z0510) +' Batarangów, od Robina ' + z0204 + ', a od Bestii 3 bat-harpuny. Ile Batarangów ma teraz nasz dzielny Nietoperz?'
var pytanie5 = 'Hawk-Eye chciał zostać strażakiem, kupił więc sobie książkę o strażakach za ' + (z1015-z0105) + 'zł, w portfelu miał wcześniej ' + z1520 + 'zł ile pieniędzy mu zostało?'
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


//zestaw 2
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

//ekran początkowy
		
		name.focus();
		
		name.on("keyup", function(){
		if(name.val()!="") {
			$(".startQuiz").removeAttr("disabled");
		}
		
		imie=name.val();
		
		});
		
		
		
		
		
		
		
		//quiz 1
		$("#Quiz1").on("click", function(){
		
		$(".welcome").hide();
		$(".container").slideDown(1000);
		podanaOdpowiedz.focus();
		pytania = zestawPytan1;
		odpowiedzi = zestawOdpowiedzi1;
		liczbaPytan = pytania.length;
		$("p").html(pytania[i]);
		$("#questionNumber").html(numerPytania);
		$("#questionsQuantity").html(liczbaPytan);
		$("#points").html(liczbaPunktow);
		animowanyPasek(numerPytania) ;
		//alert(pytania);
		//alert(liczbaPytan);
		
		});
		
		//quiz2
		$("#Quiz2").on("click", function(){
		
		$(".welcome").hide();
		$(".container").slideDown(1000);
		podanaOdpowiedz.focus();
		pytania = zestawPytan2;
		odpowiedzi = zestawOdpowiedzi2;
		liczbaPytan = pytania.length;
		$("p").html(pytania[i]);
		$("#questionNumber").html(numerPytania);
		$("#questionsQuantity").html(liczbaPytan);
		$("#points").html(liczbaPunktow);
		animowanyPasek(numerPytania) ;
		//alert(pytania);
		});
		
	

//odpowiedzi 
	$("#submitAnswer").on("click", function(){
		if(podanaOdpowiedz.val()==odpowiedzi[i]){
			$("#answer").fadeIn().html("Dobra odpowiedź").css("color","green")
			liczbaPunktow++
			$(this).attr("disabled","disabled")
			$("#next").removeAttr("disabled");
			$("#points").html(liczbaPunktow);
			$("#end").removeAttr("disabled");
			$("p").fadeOut();
			//alert(liczbaPytan);
			//alert(odpowiedzi[i]);
			
			
		}
		
		else{
			$("#answer").fadeIn().html("Zła odpowiedź").css("color","red");
			$(this).attr("disabled","disabled")
			$("#next").removeAttr("disabled");
			$("#points").html(liczbaPunktow);
			$("#end").removeAttr("disabled");
			$("p").fadeOut;
			//alert(pytania);
			//alert(odpowiedzi[i]);
		
		}
		
			});
		
//następne pytanie
		
		$("#next").on("click", function(){
		if(numerPytania!=(liczbaPytan-1)) {
		i++;
		numerPytania++
		$("p").html(pytania[i]).fadeIn();
		$("#questionNumber").html(numerPytania);
		$(this).attr("disabled","disabled");
		$("#submitAnswer").removeAttr("disabled");
		$("#answer").fadeOut();
		podanaOdpowiedz.val("").focus();
		animowanyPasek(numerPytania);
	}
	    
		else{
		$(this).hide();
		$("#end").show().attr("disabled","disabled");
		$("#submitAnswer").removeAttr("disabled");
		i++;
		numerPytania++
		$("p").html(pytania[i]).fadeIn();
		$("#questionNumber").html(numerPytania);
		$("#answer").fadeOut();
		podanaOdpowiedz.val("").focus();
		animowanyPasek(numerPytania);
	}
	});

	
	//koniec
	$("#end").on("click", function(){
		$(this).hide();
		$("#submitAnswer").hide();
		var wynik = liczbaPunktow/liczbaPytan*100;
		$("p").fadeOut();
		podanaOdpowiedz.attr("disabled","disabled");
		$("#restart").show();
		//alert(pytania);
		//alert(odpowiedzi);

		
		if(wynik < 40) {
			$("#answer").hide();
			$("#summary").fadeIn().html(imie + " twój wynik to " + wynik + "%. Następnym razem postaraj się bardziej").css("color","red");
			$("#thankYou").fadeIn().addClass("animowaneFig").html("Dziękuję za grę " + imie)
		}
		else if(wynik <80){
			$("#answer").hide();
			$("#summary").fadeIn().html(imie + " twój wynik to " + wynik + "%. Nieźle ale można to zrobić lepiej").css("color","orange");
			$("#thankYou").fadeIn().addClass("animowaneFig").html("Dziękuję za grę " + imie)
		}
		else if(wynik <=90){
			$("#answer").hide();
			$("#summary").fadeIn().html(imie + " twój wynik to " + wynik + "%. Bardzo dobrze!").css("color","green");
			$("#thankYou").fadeIn().addClass("animowaneFig").html("Dziękuję za grę " + imie)
		}
		else {
			$("#answer").hide();
			$("#summary").fadeIn().html(imie + " twój wynik to " + wynik + "%. Jesteś absolutnym Mistrzem!!!").css("color","blue");
			$("#thankYou").fadeIn().addClass("animowaneFig").html("Dziękuję za grę " + imie)
		}
	});
	
		$("#restart").on("click", function(){
			pytania =[];
			odpowiedzi=[];
			$(this).hide();
			$("#end").hide();
			$(".welcome").show();
			$(".container").hide();
			liczbaPunktow=0;
			numerPytania=1;
			i=0;
			$("#thankYou").hide();
			$("#submitAnswer").removeAttr("disabled").show();
			$("#next").show().attr("disabled","disabled");
			$("p").fadeIn();
			//$("#answer").show();
			$("#summary").hide();
			podanaOdpowiedz.removeAttr("disabled");
			$("#getAnswer").val('');
			animowanyPasek(numerPytania);
		});
	
		
	//progres bar
	
	function animowanyPasek(liczba) 
	{
		$("#drugi").animate({
			width : (liczba *100)/2
		},1500);
	};

		
});




