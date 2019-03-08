var Countries = ["Malta","Vat","San","Andorra","Monako","Lih","Austria","Belgium","Britian","Germany","Belarussia","Bolgar","Moldavia","Poland","Russia","Ruminia","Slovakia","Chehia","Ukraine","Dania","Iceland","Latvia","Ireland","Luxemburg","Cherno","Horvatia","Slovenia","Serbia","Portugalia","Makedonia","Italia","Ispania","Grecia","Bosnia","Albania","Schwecia","Estonia","Finland","Norway","Litva","Netherland","France","Schweiz","Vengria"];
var ATM = "Vat";
var DM = "Lih"
var KM = ["Belgium","Lixemburg","Monako","Netherland","Dania","Norway","Schwecia","Ispania"];
var PR = ["Russia","Belarussia"];
var	PPR = ["Ruminia","Ukraine"];
var FPR = ["Austria","Germany","Schweiz"];
var PM = "Britian";
var PK = "Andorra";
var Par = ["Malta","San","Bolgar","Moldavia","Poland","Slovakia","Chehia","Iceland","Latvia","Cherno","Horvatia","Slovenia","Serbia","Portugalia","Makedonia","Italia","Grecia","Albania","Estonia","Finland","Litva","Vengria","Ireland"];
var SR = "France";
var R = "Bosnia";

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
			}	
		}		
		
	}

	var Length = document.getElementsByClassName(ClassName).length;
	for(var i = 0;i < Length; i++){
		document.getElementsByClassName(ClassName + "_default")[i].style.fill = "white";
		document.getElementsByClassName(ClassName + "_default")[i].style.opacity = 0.8;
		}	
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
