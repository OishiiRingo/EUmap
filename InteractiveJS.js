var Countries = ["San","Andorra","Monako","Lih","Austria","Belgium","Britian","Germany","Belarussia","Bolgar","Moldavia","Poland","Russia","Ruminia","Slovakia","Chehia","Ukraine","Dania","Iceland","Latvia","Ireland","Luxemburg","Cherno","Horvatia","Slovenia","Serbia","Portugalia","Makedonia","Malta","Italia","Ispania","Grecia","Bosnia","Vat","Albania","Schwecia","Estonia","Finland","Norway","Litva","Netherland","France","Schweiz","Vengria"]; //Все страны
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
var Prod = ["Iceland","Latvia","Grecia","Portugalia","Moldavia"];
var Tekst = ["Bolgar","Albania"];
var Neft = ["Russia","Ukraine","Norway"];
//for fun
var SelectedCountry = "";
var Pravlenia = [" Абсолютная теократическая монархия"," Дуалистическая монархия"," Конституционная монархия"," Президентская республика"," Президентско-парламентская республика"," Федеративно-парламентская республика"," Парламентская монархия"," Парламентское княжесто"," Парламентская республика"," Смешанная республика"," Республика"];
var StoroniSveta = [" Восточная Европа"," Северная Европа"," Западная Европа"," Южная Европа"];
var Eksport = [" Бриллианты"," Отсутствует"," Табак"," Техническое оборудование и транспорт"," Электроника"," Металлы и минералы"," Продовольствие"," Текстиль"," Нефтепродукты"];

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
		 				case ATM: document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#ff3f76";break;
		 				case DM: document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#ff183a";break;
		 				case CheckCountry(Countries[i],KM): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#dc38e6";break;
		 				case CheckCountry(Countries[i],PR): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#ff8181";break;
		 				case CheckCountry(Countries[i],PPR): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#ffff73";break;
		 				case CheckCountry(Countries[i],FPR): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#ff521e";break;
		 				case PM: document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#1ebf01";break;
		 				case PK: document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#ffb60a";break;
		 				case CheckCountry(Countries[i],Par): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#180773";break;
		 				case SR: document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#00cfd9";break;
		 				case R:document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#38c23f";break;
		 			}	 		
		 		}
		 		if(document.getElementById("Filter").selectedIndex == 2){
		 			if(EsYes.indexOf(Countries[i]) != -1){
		 				document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#180773";
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
		 				case CheckCountry(Countries[i],VE): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#ff8181 ";break;
		 				case CheckCountry(Countries[i],SE): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#180773 ";break;
		 				case CheckCountry(Countries[i],ZE): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#00cfd9";break;
		 				case CheckCountry(Countries[i],UE): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#1ebf01";break;
		 			}	 		
		 		}
		 		if(document.getElementById("Filter").selectedIndex == 4){
		 			switch(Countries[i]){
		 				case "Belgium": document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#ff3f76 ";break;
		 				case "Vat": document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#ff8181";break;
		 				case "Makedonia": document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#dc38e6 ";break;
		 				case CheckCountry(Countries[i],TOiT): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#00cfd9 ";break;
		 				case CheckCountry(Countries[i],Elektronika): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#ffff73 ";break;
		 				case CheckCountry(Countries[i],MiM): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#ff521e ";break;
		 				case CheckCountry(Countries[i],Prod): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#1ebf01 ";break;
		 				case CheckCountry(Countries[i],Tekst): document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#ffb60a ";break;
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
		DeleteTags("Legend");
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
		DeleteTags("Legend");
		ChangeColor(ATM, "#ff3f76");
		ChangeColor(DM,"#ff183a");
		ChangeColor(KM,"#dc38e6");
		ChangeColor(PR,"#ff8181");
		ChangeColor(PPR,"#ffff73");
		ChangeColor(FPR,"#ff521e");
		ChangeColor(PM,"#1ebf01");
		ChangeColor(PK,"#ffb60a");
		ChangeColor(Par,"#180773");
		ChangeColor(SR,"#00cfd9");
		ChangeColor(R,"#38c23f");
		
		let colors = ["ff3f76","ff183a","dc38e6","ff8181","ffff73","ff521e","1ebf01","ffb60a","180773","00cfd9","38c23f"];

		for(var i = 0;i < 11;i++)
		{
			var NewDiv = document.createElement('div');
			NewDiv.className = "d3";
			NewDiv.style.backgroundColor = "#" + colors[i];
			document.getElementById("Legend").appendChild(NewDiv);
			var NewSpan = document.createElement('span');
			NewSpan.innerHTML = Pravlenia[i] + "&nbsp&nbsp&nbsp&nbsp&nbsp";
			if(i%2 == 1) NewSpan.innerHTML += "<br>";
			document.getElementById("Legend").appendChild(NewSpan);
		}
	}

	if(document.getElementById("Filter").selectedIndex == 2){
		DeleteTags("Legend");
		for(var i = 0;i < Countries.length; i++)
		{
			var Length = document.getElementsByClassName(Countries[i]).length;
			for(var j = 0;j < Length; j++){
				if(EsYes.indexOf(Countries[i]) != -1){
		 				document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "#180773";
						document.getElementsByClassName(Countries[i] + "_default")[j].style.opacity = 0.8;
		 			}
		 			else
		 			{
		 				document.getElementsByClassName(Countries[i] + "_default")[j].style.fill = "green";
						document.getElementsByClassName(Countries[i] + "_default")[j].style.opacity = 0;
		 			}
			}	
		}
			var NewDiv = document.createElement('div');
			NewDiv.className = "d3";
			NewDiv.style.backgroundColor = "#180773";
			document.getElementById("Legend").appendChild(NewDiv);
			var NewSpan = document.createElement('span');
			NewSpan.innerHTML = " Страны входящие в Евросоюз";
			document.getElementById("Legend").appendChild(NewSpan);
	}

	if(document.getElementById("Filter").selectedIndex == 3){	
		DeleteTags("Legend");	
		let colors = ["ff8181","180773","00cfd9","1ebf01"]
		ChangeColor(VE, "#ff8181");
		ChangeColor(SE,"#180773");
		ChangeColor(ZE,"#00cfd9");
		ChangeColor(UE,"#1ebf01");

		for(var i = 0;i < 4;i++)
		{
			var NewDiv = document.createElement('div');
			NewDiv.className = "d3";
			NewDiv.style.backgroundColor = "#" + colors[i];
			document.getElementById("Legend").appendChild(NewDiv);
			var NewSpan = document.createElement('span');
			NewSpan.innerHTML = StoroniSveta[i] + "<br>";
			document.getElementById("Legend").appendChild(NewSpan);
		}
	}

	if(document.getElementById("Filter").selectedIndex == 4){
		DeleteTags("Legend");
		ChangeColor("Belgium", "#ff3f76");
		ChangeColor("Vat","#ff8181");
		ChangeColor("Makedonia","#dc38e6");
		ChangeColor(TOiT,"#00cfd9");
		ChangeColor(Elektronika,"#ffff73");
		ChangeColor(MiM,"#ff521e");
		ChangeColor(Prod,"#1ebf01");
		ChangeColor(Tekst,"#ffb60a");
		ChangeColor(Neft,"#180773");
		let colors = ["ff3f76","ff8181","dc38e6","00cfd9","ffff73","ff521e","1ebf01","ffb60a","180773"];
		for(var i = 0;i < 9;i++)
		{
			var NewDiv = document.createElement('div');
			NewDiv.className = "d3";
			NewDiv.style.backgroundColor = "#" + colors[i];
			document.getElementById("Legend").appendChild(NewDiv);
			var NewSpan = document.createElement('span');
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


function DeleteTags(tagName){
	var tmp = document.getElementById(tagName);
	while (tmp.firstChild) {
    tmp.removeChild(tmp.firstChild);
	}
}

function SearchCountry(){
	var Name = document.getElementById("search").value.toLowerCase();
	for(var i = 0;i < 44;i++)
	{
		if(Name == countriesRus[i] || countriesEng[i])
			Click(Name);
	}
	if(Name == "Great Britan")
			Click("Britain");
	if(Name == "Босния и Герцеговина" || Name == "Bosnia and Herzegovin")
			Click("Bosnia");
}

var isCyrillic = function (text) {
    return /[а-я]/i.test(text);
}

var countriesRus = ["Австрия","Бельгия","Великобританя","Германия","Ирландия","Лихтенштейн","Люксембург","Монако","Нидерланды","Франция","Швейцария","Беларусь","Болгария","Венгрия","Молдавия","Польша","Россия","Румыния","Словакия","Чехия","Украина","Дания","Исландия","Латвия","Литва","Норвегия","Финляндия","Эстония","Швеция","Албания","Андорра","Босния и Герцеговина","Ватикан","Греция","Испания","Италия","Македония","Мальта","Португалия","Сан-Марино","Сербия","Словения","Хорватия","Черногория"];
var countriesEng = ["Austria","Belgium","Great Britain","Germany","Ireland","Liechtenstein","Luxembourg","Monako","Netherlands","France","Switzerland","Belarus","Bulgaria","Hungary","Moldavia","Poland","Russia","Romania","Slovakia","Czech","Ukraine","Denmark","Iceland","Latvia","Lithuania","Norway","Finland","Estonia","Sweden","Albania","Andorra","Bosnia and Herzegovin","Vatican","Greece","Spain","Italy","Macedonia","Malta","Portugal","Cas-Marino","Serbia","Slovenia","Croatia","Montenegro"];

function CreateOption(){
	DeleteTags("netfantazii");
	var string = document.getElementById("search").value.toLowerCase();
	for(var j = 0;j < countriesEng.length;j++){
		var addThis = 1;
		if(document.getElementById("search").value.length == 0){
			addThis = 0;
		}
		if(document.getElementById("search").value.length <= countriesEng[j].length || document.getElementById("search").value.length <= countriesRus[j].length){
			var tmp1 = countriesEng[j].toLowerCase()
			var tmp2 = countriesRus[j].toLowerCase()
		for(var i = 0;i < document.getElementById("search").value.length;i++){
			if(!isCyrillic(string)){	
				if(string[i] != tmp1[i])
					addThis = 0;
			}
			else
			{
				if(string[i] != tmp2[i])
					addThis = 0;
			}
		}
		}
		else
		{
			addThis = 0;
		}
		if(addThis == 1)
		{	
			var newOption = document.createElement("option");
			if(isCyrillic(string)){	
				newOption.value = countriesRus[j];
				newOption.innerHTML = countriesEng[j];
			}
			else
			{
				newOption.value = countriesEng[j];
				newOption.innerHTML = countriesRus[j];
			}
			
			document.getElementById("netfantazii").appendChild(newOption);
		}
	}
}