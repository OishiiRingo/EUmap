var modal_reg = document.getElementById("Modal_Reg");
var modal_log = document.getElementById("Modal_Log");
var close = document.getElementsByClassName("Window_close")[0];
var reg_button = document.getElementById("Reg");
var log_button = document.getElementById("Log");
var span = document.getElementsByClassName("close")[0];
var action_log = false;
var action_reg = false;
var modal_log_button = document.getElementById("Modal_log_button");
var modal_reg_button = document.getElementById("Modal_reg_button");







function OpenReg(){
	if(action_log == true){
	modal_log.style.display = "none";
	action_log = false;
	close.style.display = "none";}
	modal_reg.style.display = "block"
	close.style.display = "block"
	action_reg = true;
	
}

function OpenLog(){
	if(action_reg == true){
	modal_reg.style.display = "none";
	action_reg = false;
	close.style.display = "none";}
	modal_log.style.display = "block"
	close.style.display = "block"
	action_log = true;
}

span.onclick = function(){
	if(action_reg == true){
	modal_reg.style.display = "none";
	action_reg = false;}
	if(action_log == true){
	modal_log.style.display = "none";
	action_log = false;}
	close.style.display = "none";
}


modal_reg_button.onclick = function(){
	var regular_nickname = new RegExp("^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$");
	var nickname_reg = document.getElementById("Login_reg");
	var test = regular_nickname.test(nickname_reg.value);
	if(!test){
	alert("Некорректный логин");
	return false;
	}
	var password_reg = document.getElementById("Password_reg");
	var validated =  true;
        if(password_reg.value.length < 8)
            validated = false;
        if(!/\d/.test(password_reg.value))
            validated = false;
        if(!/[a-z]/.test(password_reg.value))
            validated = false;
        if(!/[A-Z]/.test(password_reg.value))
            validated = false;
        if(/[^0-9a-zA-Z]/.test(password_reg.value))
            validated = false;
	if(!validated){
	alert("Пароль должен содержать как минимум одну строчную, заглавную буквы, одно число и иметь длину не менее 8 символов");
	return false;
	}
	var password2_reg = document.getElementById("Password2_reg");
	if(password_reg.value != password2_reg.value){
		alert("Пароли не совпадают");
		return false;
	}
}