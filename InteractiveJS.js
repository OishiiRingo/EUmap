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
var VE = ["Russia","Ukraine","Belarussia","Moldavia","Ruminia","Bolgar","Vengria","Chehia","Slovakia","Poland"];
var SE = ["Finland","Litva","Latvia","Estonia","Norway","Schwecia","Dania","Iceland","Britian","Ireland"];
var ZE = ["Austria","Schweiz","Netherland","Belgium","Luxemburg","Monako","Germany","Lih","France"];
var UE = ["Bosnia","Vat","Ispania","Portugalia","San","Malta","Slovenia","Makedonia","Horvatia","Cherno","Andorra","Grecia","Italia","Serbia","Albania"];
//Основной продукт экспорта
var TOiT = ["Austria","Britian","Germany","Lih","Luxemburg","Monako","Netherland","France","Schweiz","Belarussia","Vengria","Poland","Slovakia","Chehia","Dania","Estonia","Schwecia","Andorra","Ispania","Italia","Malta","San","Slovenia","Horvatia"];
var Elektronika = ["Ireland","Finland"];
var MiM = ["Ruminia","Litva","Bosnia","Serbia","Cherno"];
var Prod = ["Iceland","Latvia","Grecia","Portugalia"];
var Tekst = ["Bolgar","Albania"];
var Neft = ["Russia","Ukraine","Norway"];
//for fun
var SelectedCountry = "";
var Colors = ["#4C036E","#67E667","#FFA700","#5CCCCC","#FFFF73","#FF9640","#009999","#A64B00","#180773","#A68400","#E6399B"];
var Pravlenia = [" Абсолютная теократическая монархия"," Дуалистическая монархия"," Конституционная монархия"," Президентская республика"," Президентско-парламентская республика"," Федеративно-парламентская республика"," Парламентская монархия"," Парламентское княжесто"," Парламентская республика"," Смешанная республика"," Республика"];
var StoroniSveta = [" Восточная Европа"," Северная Европа"," Западная Европа"," Южная Европа"];
var Eksport = [" Бриллианты"," Нет"," Табак"," Техническое оборудование и транспорт"," Электроника"," Металлы и минералы"," Продовольствие"," Текстиль"," Нефтепродукты"];

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
		 			switch(Countries[i]){
		 				case ATM: document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#4C036E";break;
		 				case DM: document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#67E667";break;
		 				case CheckCountry(Countries[i],KM): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#FFA700";break;
		 				case CheckCountry(Countries[i],PR): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#5CCCCC";break;
		 				case CheckCountry(Countries[i],PPR): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#FFFF73";break;
		 				case CheckCountry(Countries[i],FPR): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#FF9640";break;
		 				case PM: document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#009999";break;
		 				case PK: document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#A64B00";break;
		 				case CheckCountry(Countries[i],Par): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#180773";break;
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
		 			switch(Countries[i]){
		 				case CheckCountry(Countries[i],VE): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#4C036E";break;
		 				case CheckCountry(Countries[i],SE): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#67E667";break;
		 				case CheckCountry(Countries[i],ZE): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#FFA700";break;
		 				case CheckCountry(Countries[i],UE): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#5CCCCC";break;
		 			}	 		
		 		}
		 		if(document.getElementById("Filter").selectedIndex == 4){
		 			switch(Countries[i]){
		 				case "Belgium": document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#4C036E";break;
		 				case "Vat": document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#67E667";break;
		 				case "Makedonia": document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#FFA700";break;
		 				case CheckCountry(Countries[i],TOiT): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#5CCCCC";break;
		 				case CheckCountry(Countries[i],Elektronika): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#FFFF73";break;
		 				case CheckCountry(Countries[i],MiM): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#FF9640";break;
		 				case CheckCountry(Countries[i],Prod): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#009999";break;
		 				case CheckCountry(Countries[i],Tekst): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#A64B00";break;
		 				case CheckCountry(Countries[i],Neft): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#180773";break;
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
		DeleteTags();
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
		DeleteTags();
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
		
		for(var i = 0;i < 11;i++)
		{
			var IMG = document.createElement('img');
			IMG.src = "Quads/" + i + ".png";
			IMG.className = "i1";
			document.getElementById("Legend").appendChild(IMG);
			var NewSpan = document.createElement('span');
			NewSpan.className = "s1";
			NewSpan.innerHTML = Pravlenia[i] + "&nbsp&nbsp&nbsp&nbsp&nbsp";
			if(i%2 == 1) NewSpan.innerHTML += "<br>";
			document.getElementById("Legend").appendChild(NewSpan);
		}
	}

	if(document.getElementById("Filter").selectedIndex == 2){
		DeleteTags();
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
			var IMG = document.createElement('img');
			IMG.src = "Quads/8.png";
			IMG.className = "i2";
			document.getElementById("Legend").appendChild(IMG);
			var NewSpan = document.createElement('span');
			NewSpan.className = "s2";
			NewSpan.innerHTML = "Страны входящие в Евросоюз";
			document.getElementById("Legend").appendChild(NewSpan);
	}

	if(document.getElementById("Filter").selectedIndex == 3){	
		DeleteTags();	
		ChangeColor(VE, "#4C036E");
		ChangeColor(SE,"#67E667");
		ChangeColor(ZE,"#FFA700");
		ChangeColor(UE,"#5CCCCC");

		for(var i = 0;i < 4;i++)
		{
			var IMG = document.createElement('img');
			IMG.src = "Quads/" + i + ".png";
			IMG.className = "i3";
			document.getElementById("Legend").appendChild(IMG);
			var NewSpan = document.createElement('span');
			NewSpan.className = "s3";
			NewSpan.innerHTML = StoroniSveta[i] + "<br>";
			document.getElementById("Legend").appendChild(NewSpan);
		}
	}

	if(document.getElementById("Filter").selectedIndex == 4){
		DeleteTags();
		ChangeColor("Belgium", "#4C036E");
		ChangeColor("Vat","#67E667");
		ChangeColor("Makedonia","#FFA700");
		ChangeColor(TOiT,"#5CCCCC");
		ChangeColor(Elektronika,"#FFFF73");
		ChangeColor(MiM,"#FF9640");
		ChangeColor(Prod,"#009999");
		ChangeColor(Tekst,"#A64B00");
		ChangeColor(Neft,"#180773");

		for(var i = 0;i < 9;i++)
		{
			var IMG = document.createElement('img');
			IMG.src = "Quads/" + i + ".png";
			IMG.className = "i4";
			document.getElementById("Legend").appendChild(IMG);
			var NewSpan = document.createElement('span');
			NewSpan.className = "s4";
			NewSpan.innerHTML = Eksport[i] + "&nbsp&nbsp&nbsp&nbsp&nbsp";
			if(i%2 == 1) NewSpan.innerHTML += "<br>";
			document.getElementById("Legend").appendChild(NewSpan);
		}
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


function DeleteTags(){
	var tmp = document.getElementById("Legend");
	while (tmp.firstChild) {
    tmp.removeChild(tmp.firstChild);
	}
}