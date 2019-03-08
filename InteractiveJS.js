var Countries = ["Malta","Vat","San","Andorra","Monako","Lih","Austria","Belgium","Britian","Germany","Belarussia","Bolgar","Moldavia","Poland","Russia","Ruminia","Slovakia","Chehia","Ukraine","Dania","Iceland","Latvia","Ireland","Luxemburg","Cherno","Horvatia","Slovenia","Serbia","Portugalia","Makedonia","Italia","Ispania","Grecia","Bosnia","Albania","Schwecia","Estonia","Finland","Norway","Litva","Netherland","France","Schweiz","Vengria"]; //Все страны
var ATM = "Vat"; //Абсолютная теократическая монархия
var DM = "Lih" //Дуалистическая монархия
var KM = ["Belgium","Luxemburg","Monako","Netherland","Dania","Norway","Schwecia","Ispania"]; //Конституционная монархия
var PR = ["Russia","Belarussia"]; //Рабство
var	PPR = ["Ruminia","Ukraine"]; //Президентско парламентская республика
var FPR = ["Austria","Germany","Schweiz"];//Федеративно парламентская республика
var PM = "Britian";//парламентская монархия
var PK = "Andorra";//Парламентское княжесто
var Par = ["Malta","San","Bolgar","Moldavia","Poland","Slovakia","Chehia","Iceland","Latvia","Cherno","Horvatia","Slovenia","Serbia","Portugalia","Makedonia","Italia","Grecia","Albania","Estonia","Finland","Litva","Vengria","Ireland"];//Парламентская республика
var SR = "France";//Смешанная республика
var R = "Bosnia";//Республика
//Те кто в ЕС
var EsYes = ["Austria","Belgium","Bolgar","Vengria","Germany","Grecia","Dania","Ireland","Ispania","Italia","Latvia","Litva","Luxemburg","Malta","Netherland","Poland","Portugalia","Ruminia","Slovakia","Slovenia","Finland","France","Horvatia","Chehia","Schwecia","Estonia"];
//По сторонам света
var VE = ["Germany","Lih","France","Latvia","Estonia","Albania","Andorra","Grecia","Italia","Serbia"];
var SE = ["Bolgar","Moldavia","Ruminia","Slovakia","Finland","Makedonia","Horvatia","Cherno"];
var ZE = ["Austria","Ireland","Netherland","Schweiz","Vengria","Chehia","Ukraine","Litva","Norway","Malta","Slovenia"];
var UE = ["Belgium","Britian","Luxemburg","Monako","Belarussia","Poland","Russia","Dania","Iceland","Schwecia","Bosnia","Vat","Ispania","Portugalia","San"];
var SelectedCountry = "";

function Click(ClassName){
	for(var i = 0;i < Countries.length; i++)
	{
		var Length = document.getElementsByClassName(Countries[i]).length;
		for(var j = 0;j < Length; j++){
			if(document.getElementsByClassName(Countries[i] + "_default")[j].style.fill == "white")
			{
				if(document.getElementById("Filter").selectedIndex == 0){
					document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "green";
					document.getElementsByClassName(Countries[i] + "_default")[j].style.opacity = 0;
				}
				if(document.getElementById("Filter").selectedIndex == 1){
		 			switch(ClassName){
		 				case ATM: document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#4C036E";break;
		 				case DM: document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#67E667";break;
		 				case CheckCountry(ClassName,KM): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#FFA700";break;
		 				case CheckCountry(ClassName,PR): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#5CCCCC";break;
		 				case CheckCountry(ClassName,PPR): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#FFFF73";break;
		 				case CheckCountry(ClassName,FPR): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#FF9640";break;
		 				case PM: document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#009999";break;
		 				case PK: document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#A64B00";break;
		 				case CheckCountry(ClassName,Par): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#180773";break;
		 				case SR: document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#A68400";break;
		 				case R:document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#E6399B";break;
		 			}	 		
		 		}
		 		if(document.getElementById("Filter").selectedIndex == 2){
		 			if(EsYes.indexOf(Countries[i]) != -1){
		 				document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "blue";
						document.getElementsByClassName(Countries[i] + "_default")[j].style.opacity = 0.8;
		 			}
		 			else
		 			{
		 				document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "green";
						document.getElementsByClassName(Countries[i] + "_default")[j].style.opacity = 0;
		 			}
		 		}
		 		if(document.getElementById("Filter").selectedIndex == 3){
		 			switch(ClassName){
		 				case CheckCountry(ClassName,VE): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "Yellow";break;
		 				case CheckCountry(ClassName,SE): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "blue";break;
		 				case CheckCountry(ClassName,ZE): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "green";break;
		 				case CheckCountry(ClassName,UE): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "pink";break;
		 			}	 		
		 		}
		 	}
		}	
	}		
		

	var Length = document.getElementsByClassName(ClassName).length;
	for(var i = 0;i < Length; i++){
		document.getElementsByClassName(ClassName + "_default")[i].style.fill = "white";
		document.getElementsByClassName(ClassName + "_default")[i].style.opacity = 0.8;
		}	
	SelectedCountry = ClassName;
}

function Hover(ClassName){
	var Length = document.getElementsByClassName(ClassName).length;
	for(var i = 0;i < Length; i++){
		document.getElementsByClassName(ClassName)[i].classList.add(ClassName + "_animation");
		}	
}

function HoverOut(ClassName){
	var Length = document.getElementsByClassName(ClassName).length;
	for(var i = 0;i < Length; i++){
		document.getElementsByClassName(ClassName)[i].classList.remove(ClassName + "_animation");
		}	
}

function Selector(){
	if(document.getElementById("Filter").selectedIndex == 0){
		for(var i = 0;i < Countries.length; i++)
		{
			var Length = document.getElementsByClassName(Countries[i]).length;
			for(var j = 0;j < Length; j++){
				document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "green";
				document.getElementsByClassName(Countries[i] + "_default")[j].style.opacity = 0;
			}	
		}
	}
	if(document.getElementById("Filter").selectedIndex == 1){
		ChangeColor(ATM, "#4C036E");
		ChangeColor(DM,"#67E667");
		ChangeColor(KM,"#FFA700");
		ChangeColor(PR,"#5CCCCC");
		ChangeColor(PPR,"#FFFF73");
		ChangeColor(FPR,"#FF9640");
		ChangeColor(PM,"#009999");
		ChangeColor(PK,"#A64B00");
		ChangeColor(Par,"#180773");
		ChangeColor(SR,"#A68400");
		ChangeColor(R,"#E6399B");
	}
	if(document.getElementById("Filter").selectedIndex == 2){
		for(var i = 0;i < Countries.length; i++)
		{
			var Length = document.getElementsByClassName(Countries[i]).length;
			for(var j = 0;j < Length; j++){
				if(EsYes.indexOf(Countries[i]) != -1){
		 				document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "blue";
						document.getElementsByClassName(Countries[i] + "_default")[j].style.opacity = 0.8;
		 			}
		 			else
		 			{
		 				document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "green";
						document.getElementsByClassName(Countries[i] + "_default")[j].style.opacity = 0;
		 			}
			}	
		}
	}
	if(document.getElementById("Filter").selectedIndex == 3){
		ChangeColor(VE, "Yellow");
		ChangeColor(SE,"blue");
		ChangeColor(ZE,"green");
		ChangeColor(UE,"pink");
	}
	for(var i =0;i < SelectedCountry.length;i++){
		document.getElementsByClassName(SelectedCountry)[i].style.fill = "white";
		document.getElementsByClassName(SelectedCountry)[i].style.opacity = 0.8;
	}
	
}

function ChangeColor(prName, colorName){
	if(Array.isArray(prName))
	{
		for(var i = 0;i < prName.length; i++)
		{
			var Length = document.getElementsByClassName(prName[i]).length;
			for(var j = 0;j < Length; j++){
				document.getElementsByClassName(prName[i] + "_default")[j].style.fill = colorName;
				document.getElementsByClassName(prName[i] + "_default")[j].style.opacity = 0.8;
			}	
		}
	}
	else
	{
		var Length = document.getElementsByClassName(prName).length;
		for(var j = 0;j < Length; j++){
		document.getElementsByClassName(prName + "_default")[j].style.fill = colorName;
		document.getElementsByClassName(prName + "_default")[j].style.opacity = 0.8;}
	}
}

function CheckCountry(CountryName, Massive){
	for(var i = 0;i < Massive.length;i++)
	{
		if(Massive[i] == CountryName){
			return CountryName;
			break;
		}
	}	
}
