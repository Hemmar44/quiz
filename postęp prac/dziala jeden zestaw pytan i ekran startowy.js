$(function(){
		var name = $("#name");
		name.focus();
		
		name.on("keyup", function(){
		if(name.val()!="") {
			$("#startQuiz").removeAttr("disabled");
		}
		
		imie=name.val();
		
		});
		
		$("#startQuiz").on("click", function(){
		$(".welcome").slideUp();
		$(".container").slideDown();
		podanaOdpowiedz.focus();
		
		});
		//$(".welcome").slideUp();
		//$(".container").slideDown();
		

		
	

	pytania = [ pytanie1, pytanie2, pytanie3, pytanie4, pytanie5, pytanie6, pytanie7, pytanie8, pytanie9, pytanie10];
	var podanaOdpowiedz = $("#getAnswer");
	
	$("p").html(pytania[i]);
	$("#questionNumber").html(numerPytania);
	$("#questionsQuantity").html(liczbaPytan);
	$("#points").html(liczbaPunktow);
	
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
		}
		
		else{
			$("#answer").fadeIn().html("Zła odpowiedź").css("color","red");
			$(this).attr("disabled","disabled")
			$("#next").removeAttr("disabled");
			$("#points").html(liczbaPunktow);
			$("#end").removeAttr("disabled");
			$("p").fadeOut;
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

	$("#end").on("click", function(){
		var wynik = liczbaPunktow/liczbaPytan*100;
		
		if(wynik < 40) {
			$("#answer").hide();
			$("#summary").fadeIn().html(imie + " twój wynik to " + wynik + "%. Następnym razem postaraj się bardziej").css("color","red");
		}
		else if(wynik <80){
			$("#answer").hide();
			$("#summary").fadeIn().html(imie + " twój wynik to " + wynik + "%. Nieźle ale można to zrobić lepiej").css("color","orange");
		}
		else if(wynik <=100){
			$("#answer").hide();
			$("#summary").fadeIn().html(imie + " twój wynik to " + wynik + "%. Doskonale!!!").css("color","green");
		}
		 
	});
	

	
});

var pytania = [ pytanie1, pytanie2, pytanie3, pytanie4, pytanie5, pytanie6, pytanie7, pytanie8, pytanie9, pytanie10];
var odpowiedzi =["5", "9", "6", "10", "13", "15", "10", "5","4", "7"];
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


