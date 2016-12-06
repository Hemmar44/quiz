






$(function(){
	var pytania = [] ;//[ pytanie1, pytanie2, pytanie3, pytanie4, pytanie5, pytanie6, pytanie7, pytanie8, pytanie9, pytanie10];
//var zestawPytan1 = [pytanie1, pytanie2, pytanie3, pytanie4, pytanie5, pytanie6, pytanie7, pytanie8, pytanie9, pytanie10];
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


var pytanie1 = 'Marek kupił 12 bułek na śniadanie zjadł 3 bułki i a 2 bułki zjadł jego brat Witek, wieczorem oboje zjedli po jednej bułce. Ile bułek zostało Markowi?'
var pytanie2 = 'Ninja Cole kupił sobie 7 nowych mieczy, i włożył je do swojej Ninja szafy, wcześniej miał już w tej szafie 2 miecze. Ile mieczy ma teraz w szafie Cole?'
var pytanie3 = 'Następnego dnia Ninja zauważył, że ktoś pożyczył sobie od niego 6 mieczy, Kyle przyniósł mu jednak dodatkowe 3 miecze, Cole schował je do szafy ile mieczy ma w szafie Cole?'
var pytanie4 = 'Batman nie miał już ani jednego Batarangu, na urodziny dostał od Cyborga 6 Batarangów, od Robina 4, a od Bestii nowy Pas ile Batarangów ma teraz nasz dzielny Nietoperz?'
var pytanie5 = 'Jacek chciał zostać strażakiem, kupił więc sobie książkę o strażakach za 5zł, w portfelu miał wcześniej 18 zł ile pieniędzy mu zostało?'
var pytanie6 = 'Spider-Man pokonał w tym miesiącu już 6 wrogów, do końca miesiąca chce ich pokonać jeszcze 9, ilu wrogów pokona razem Pajączek?'
var pytanie7 = 'Księżniczka Zosia miała 8 sukienek, Amber zabrała jej 3 sukienki, a Tata kupił jej kolejne 5. Ile sukienek ma teraz Zosia?'
var pytanie8 = 'Nexo Knights ogłosili nabór na na nowych rycerzy, na trening przyszło 10 kandydatów, testy zdała połowa kandydatów, i oni zasilą szeregi Rycerzy. Ilu nowych rycerzy przyjmą Nexo Knights?'
var pytanie9 = 'Bestia to straszny żarłok, chciał zrobić Tytanom prezent i kupił 20 pączków, sam zjadł już jednak 16, ile pączków zostało dla reszty?'
var pytanie10 = "Fury wytypował do kolejnego zadania Fantastyczną Czwórkę, Spider-Man'a, Czarną Wdowę i Wolverine'a. Muszą oni pokonać Doktora Doom'a. Ilu bohaterów wysłał Fury na misję?"
//zestaw 3
var pytanie11 ='Ile to jest 12 + 4';
var pytanie12 ='Ile to jest 5 + 13';
var pytanie13 ='Ile to jest 14 - 7';
var pytanie14 ='Ile to jest 1 + 6 + 10';
var pytanie15 ='Ile to jest 19 - 5';
var pytanie16 ='Ile to jest 7 + 6';
var pytanie17 ='Ile to jest 0 + 0';
var pytanie18 ='Ile to jest 5 + 5 + 5 + 5';
var pytanie19 ='Ile to jest 7 - 4 + 3';
var pytanie20 ='Ile to jest 11 - 4 + 9';

var odpowiedzi2 = ['16', '18', '7', '17', '14', '13', '0', '20', '6', '16' ]

		var name = $("#name");
		name.focus();
		
		name.on("keyup", function(){
		if(name.val()!="") {
			$(".startQuiz").removeAttr("disabled");
		}
		
		imie=name.val();
		
		});
		
		zestawPytan1 = [pytanie1, pytanie2, pytanie3, pytanie4, pytanie5, pytanie6, pytanie7, pytanie8, pytanie9, pytanie10]
		zestawPytan2 = [pytanie11, pytanie12, pytanie13, pytanie14, pytanie15, pytanie16, pytanie17, pytanie18, pytanie19,pytanie20];
		zestawOdpowiedzi1 =["5", "9", "6", "10", "13", "15", "10", "5","4", "7"];
		zestawOdpowiedzi2 =['16', '18', '7', '17', '14', '13', '0', '20', '6', '16' ];
		var podanaOdpowiedz = $("#getAnswer");
		
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
		alert(pytania);
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
		alert(pytania);
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
			
		}
		
		else{
			$("#answer").fadeIn().html("Zła odpowiedź").css("color","red");
			$(this).attr("disabled","disabled")
			$("#next").removeAttr("disabled");
			$("#points").html(liczbaPunktow);
			$("#end").removeAttr("disabled");
			$("p").fadeOut;
			//alert(pytania);
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
	}
	});

	
	//koniec
	$("#end").on("click", function(){
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
		else if(wynik <=100){
			$("#answer").hide();
			$("#summary").fadeIn().html(imie + " twój wynik to " + wynik + "%. Doskonale!!!").css("color","green");
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
			$("#submitAnswer").removeAttr("disabled");
			$("#next").show().attr("disabled","disabled");
			$("p").fadeIn();
			//$("#answer").show();
			$("#summary").hide();
			podanaOdpowiedz.removeAttr("disabled");
		});
	
		
		/*
		podanaOdpowiedz.focus();
		pytania = zestawPytan1;
		odpowiedzi = zestawOdpowiedzi1;
		liczbaPytan = pytania.length;
		$("p").html(pytania[i]);
		$("#questionNumber").html(numerPytania);
		$("#questionsQuantity").html(liczbaPytan);
		$("#points").html(liczbaPunktow);
		*/
});




