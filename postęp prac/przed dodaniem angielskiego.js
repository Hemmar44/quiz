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
	
	//dyktando = [dykPyt1, dykPyt2,dykPyt3,dykPyt4,dykPyt5];
	//dykOdp = [poprawne1,poprawne2,poprawne3, poprawne4,poprawne5];
	iloscPytDyk = poprawne1.length + poprawne2.length + poprawne3.length + poprawne4.length + poprawne5.length;
	
	var dykPyt6 = ["<b>Ninja</b> wyr"+diFirst+"szyli na poszukiwanie zaginionej Księgi Zaklęć Tajemnych. Lance zebrał dru"+di+"ynę. Zbi"+di+"rka odbyła się na dziedzińcu zamk"+diLast+"."];
	var dykPyt7 = ["Jestro już szykował się na ryce"+diFirst+"y, zebrał swoją armię na skraj"+di+" las"+di+". P"+diLast+"ekazał już pierwsze rozkazy"];
	var dykPyt8 = ["Rycerze postanowili zmylić p"+diFirst+"eciwnika, tylko tr"+di+"jka wyszła mu na spotkanie, a pozostali  przy u"+di+"yciu magii, Merloka 2.0, teleportowali się w głąb p"+diLast+"szczy."];
	var dykPyt9 = ["Księga znajdowała się w jaskini, do kt"+diFirst+"rej dostać m"+di+"gł się tylko jeden rycerz. Do zadania zgłosił się Clay. Szybko dostał się do środka i chwycił księgę. Cała jaskinia zatczęła się t"+di+"ąść więc Clay błyskawicznie się obr"+diLast+"cił i wyskoczył z jaskini."]
	var dykPyt10 = ["W drodze powrotnej do zamku, Clay skierował dr"+diFirst+"żynę w kier"+di+"nku bitwy, okazało się jednak, że została ona już dawno skończona. Lance i Axl walczyli dzielnie, a Jestro ze swoimi zbirami "+di+"ciekł, gdzie piep"+diLast+" rośnie."]
	
	var poprawne6 = ["u", "ż", "ó", "u"];
	var poprawne7 = ["rz", "u","u","rz"];
	var poprawne8 = ["rz", "ó","ż","u"];
	var poprawne9 = ["ó", "ó","rz","ó"];
	var poprawne10 = ["u", "u","u","rz"];
	
//ekran początkowy
		
		name.focus();
		
		name.on("keyup", function(){
		if(name.val()!="") {
			$(".startQuiz").removeAttr("disabled");
		}
		
		imie=name.val();
		
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
			$(this).attr("disabled","disabled").hide();
			$("#restartDyk").show();
			$("p").fadeOut();
			
			if(wynikDyk < 40) {
			$("#summary").fadeIn().html(imie + " twój wynik to " + wynikDyk + "%. Następnym razem postaraj się bardziej").css("color","red");
			$("#thankYou").fadeIn().addClass("animowaneFig").html("Dziękuję za grę " + imie)
		}
		else if(wynikDyk <80){
			$("#summary").fadeIn().html(imie + " twój wynik to " + wynikDyk + "%. Nieźle ale można to zrobić lepiej").css("color","orange");
			$("#thankYou").fadeIn().addClass("animowaneFig").html("Dziękuję za grę " + imie)
		}
		else if(wynikDyk<=90){
			$("#summary").fadeIn().html(imie + " twój wynik to " + wynikDyk + "%. Bardzo dobrze!").css("color","green");
			$("#thankYou").fadeIn().addClass("animowaneFig").html("Dziękuję za grę " + imie)
		}
		else {
			$("#summary").fadeIn().html(imie + " twój wynik to " + wynikDyk + "%. Jesteś absolutnym Mistrzem!!!").css("color","blue");
			$("#thankYou").fadeIn().addClass("animowaneFig").html("Dziękuję za grę " + imie)
		}
			
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
		animowanyPasek(numerPytania,2) ;
		$("#submitAnswer").removeAttr("disabled").show();
		$("#next").show().attr("disabled","disabled");
		
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
		
		
		
	//odpowiedzi Quiz1 i Quiz2 poprawna odpowiedź
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
		//nieporawna odpowiedź
		
		else{
			$("#answer").fadeIn().html("Zła odpowiedź").css("color","red");
			$(this).attr("disabled","disabled")
			$("#next").removeAttr("disabled");
			$("#points").html(liczbaPunktow);
			$("#end").removeAttr("disabled");
			$("p").fadeOut;
			//alert(pytania);
			//alert(odpowiedzi[i]);
			//
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
		animowanyPasek(numerPytania,2);
	}
	    //ostatnie pytanie
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
		animowanyPasek(numerPytania,2);
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
		//powrót do ekranu początkowego
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
			$("p").fadeIn();
			//$("#answer").show();
			$("#summary").hide();
			podanaOdpowiedz.removeAttr("disabled");
			$("#getAnswer").val('');
			animowanyPasek(numerPytania,2);
		});
	
		
	//progres bar
	
	function animowanyPasek(liczba, dziel) 
	{
		$("#drugi").animate({
			width : (liczba *100)/dziel
		},500);
	};
	

});




