function Click(ClassName){
	for(var i = 0;i < document.getElementsByClassName(ClassName).length; i++){
		document.getElementsByClassName(ClassName)[i].style.fill = "yellow";
	}	
}
