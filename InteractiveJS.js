var Countries = ["Austria","Belgium","Britian","Germany","Belarussia","Bolgar","Moldavia","Poland","Russia","Ruminia","Slovakia","Chehia","Ukraine","Dania","Iceland","Latvia","Ireland","Luxemburg","Cherno","Horvatia","Slovenia","Serbia","Portugalia","Makedonia","Italia","Ispania","Grecia","Bosnia","Albania","Schwecia","Estonia","Finland","Norway","Litva","Netherland","France","Schweiz","Vengria"];

function Click(ClassName){
	for(var i = 0;i < Countries.length; i++)
	{
		var Length = document.getElementsByClassName(Countries[i]).length;
		for(var j = 0;j < Length; j++){
		if(!document.getElementsByClassName(Countries[i])[j].classList.contains(Countries[i] + "_default")){
		document.getElementsByClassName(Countries[i])[j].classList.add(Countries[i] + "_default");}
		if(document.getElementsByClassName(Countries[i])[j].classList.contains(Countries[i] + "_clicked")){
		document.getElementsByClassName(Countries[i])[j].classList.remove(Countries[i] + "_clicked");}
		if(document.getElementsByClassName(Countries[i])[j].classList.contains(Countries[i] + "_animation")){	
		document.getElementsByClassName(Countries[i])[j].classList.remove(Countries[i] + "_animation");}		
		}		
		
	}

	var Length = document.getElementsByClassName(ClassName).length;
	for(var i = 0;i < Length; i++){
		document.getElementsByClassName(ClassName)[i].classList.add(ClassName + "_clicked");
		}	
	for(var i = 0;i < Length; i++){
		document.getElementsByClassName(ClassName)[i].classList.remove(ClassName + "_default");
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