






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
var pytanie1 = 'Marek kupił ' + z1520 + ' bułek na śniadanie zjadł ' + z0103 + ', a ' + z0102 + ' zjadł jego brat Witek, wieczorem każdy zjadł po ' + z0203 + ' bułki. Ile bułek zostało Markowi?'
var pytanie2 = 'Ninja Cole kupił sobie ' + z0510 + ' nowych mieczy, i włożył je do swojej Ninja szafy, wcześniej miał już w tej szafie ' + z0203 + ' miecze. Ile mieczy ma teraz w szafie Cole?'
var pytanie3 = 'Następnego dnia Ninja zauważył, że ktoś pożyczył sobie od niego '+ z0207 + ' mieczy, Kyle przyniósł mu jednak dodatkowe ' + z0204 + ' miecze, Cole schował je do szafy ile mieczy ma w szafie Cole?'
var pytanie4 = 'Batman nie miał już ani jednego Batarangu, na urodziny dostał od Cyborga ' + (z0105 + z0510) +' Batarangów, od Robina ' + z0204 + ', a od Bestii 3 bat-harpuny. Ile Batarangów ma teraz nasz dzielny Nietoperz?'
var pytanie5 = 'Wojtek chciał zostać strażakiem, kupił więc sobie książkę o strażakach za ' + (z1015-z0105) + 'zł, w portfelu miał wcześniej ' + z1520 + 'zł ile pieniędzy mu zostało?'
var pytanie6 = 'Spider-Man pokonał w tym miesiącu już ' + z0207 + ' wrogów, do końca miesiąca chce ich pokonać jeszcze ' + z0812 +', ilu wrogów pokona razem Pajączek?'
var pytanie7 = 'Księżniczka Zosia miała ' + z0510 + ' sukienek, Amber zabrała jej ' + z0204 + ' sukienki, a Tata kupił jej kolejne ' + z0812 + '. Ile sukienek ma teraz Zosia?'
var pytanie8 = 'Nexo Knights ogłosili nabór na na nowych rycerzy, na trening przyszło ' + parzysta(z1020) + ' kandydatów, testy zdała połowa kandydatów, i oni zasilą szeregi Rycerzy. Ilu nowych rycerzy przyjmą Nexo Knights?'
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
var pytanie11 ='Ile to jest ' + z0110 + ' + ' + z0110;
var pytanie12 ='Ile to jest ' + z1020 + ' - ' + z0005;
var pytanie13 ='Ile to jest ' + z1520 + ' - ' + z0005;
var pytanie14 ='Ile to jest ' + z0005 + ' + ' + z0207 + ' + ' + z0110;                                  
var pytanie15 ='Ile to jest ' + z1520 + ' - ' + z1015;
var pytanie16 ='Ile to jest ' + z0110 + ' + ' + z0207;                                         
var pytanie17 ='Ile to jest ' + z1520 + ' - ' + z0110 + ' + ' + z0207;  
var pytanie18 ='Ile to jest ' + z0105 + ' + ' + z0105 + ' + ' + z0105 + ' + ' + z0105; 
var pytanie19 ='Ile to jest ' + z0812 + ' - ' + z0105 + ' + ' + z0207;              
var pytanie20 ='Ile to jest ' + z1020 + ' - ' + z0005 + ' - ' + z0105;

var odpowiedz11 = z0110 + z0110;
var odpowiedz12 = z1020 - z0005;
var odpowiedz13 = z1520 - z0005;
var odpowiedz14 = z0005 + z0207 + z0110;
var odpowiedz15 = z1520 - z1015;
var odpowiedz16 = z0110 + z0207;
var odpowiedz17 = z1520 - z0110 + z0207;
var odpowiedz18 = z0105 + z0105 + z0105 + z0105;
var odpowiedz19 = z0812 - z0105 + z0207;
var odpowiedz20 = z1020 - z0005 - z0105;

zestawPytan2 = [pytanie11, pytanie12, pytanie13, pytanie14, pytanie15, pytanie16, pytanie17, pytanie18, pytanie19,pytanie20];
zestawOdpowiedzi2 =[odpowiedz11, odpowiedz12, odpowiedz13, odpowiedz14, odpowiedz15, odpowiedz16,odpowiedz17,odpowiedz18, odpowiedz19, odpowiedz20 ];
//var odpowiedzi2 = [(z0110 + z0110), (z1020 - z0005) , '7', '17', '14', '13', '0', '20', '6', '16' ]

		var name = $("#name");
		name.focus();
		
		name.on("keyup", function(){
		if(name.val()!="") {
			$(".startQuiz").removeAttr("disabled");
		}
		
		imie=name.val();
		
		});
		
		
		
		
		
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
			$("#submitAnswer").removeAttr("disabled").show();
			$("#next").show().attr("disabled","disabled");
			$("p").fadeIn();
			//$("#answer").show();
			$("#summary").hide();
			podanaOdpowiedz.removeAttr("disabled");
			$("#getAnswer").val('');
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




