


$(function(){
	var punkty = [5, 15, 10];
    var imiona = ["Zbychu", "Rychu", "Zdzichu"];
	
	
	var indeksy = punkty.map(function(element, index){
		return index;
	});
	
	indeksy.sort(function (b,a) {return punkty[a] - punkty[b];
	});
	tekst = ''
	for(var i=0; i < punkty.length; i++){
	 tekst+= "Imię: " + imiona[indeksy[i]] + ", punkty: " + punkty[indeksy[i]] +"<br/>"
	}
	$("p").html(tekst);
});
	 
/*
var A=[0.5, 0.6, 0.5, 0.7, 0.8, 0.1];
var B=['a','b','c','d','e','f'];
var indices = A.map(function(elem, index){return index;}); //an array of indices
indices.sort(function (a,b) {return A[a] - A[b];});

//print out the results
for (var i = 0; i < A.length; i++)
    document.body.innerHTML += 'A: ' + A[indices[i]] + ', B: ' + B[indices[i]] + '<br>';
*/