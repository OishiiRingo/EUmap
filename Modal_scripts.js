var modal_log = document.getElementById("Modal_Log");
var close = document.getElementsByClassName("Window_close")[0];
var log_button = document.getElementById("Log");
var span = document.getElementsByClassName("close")[0];
var modal_log_button = document.getElementById("Modal_log_button");



function OpenLog(){
	modal_log.style.display = "block"
	close.style.display = "block"
}

span.onclick = function(){
	modal_log.style.display = "none";
	close.style.display = "none";
}

/*modal_reg_button.onclick = function(){
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

}*/