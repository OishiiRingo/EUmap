var modal = document.getElementById("Modal_Reg");
var btn = document.getElementById("Reg");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
	modal.style.display = "block"
}

span.onclick = function(){
	modal.style.display = "none"
}

window.onclick = function(event){

}