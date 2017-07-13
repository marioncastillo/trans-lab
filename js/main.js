/*$(document).ready(function(){
	$("#boton1").click(function(e){})
	function correo(email){
		var arroba = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return arroba.test(email);
	}
	var campo="";

	if($("#email").val() == ""){
		campo += "<br>Email";
	}
});*/
/*
	$("#boton1").click(function(e){

		function isEmail(email) {
  		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 		 return regex.test(email);
		};

		if ($("#email").val() == "") {

			alert("ingresa email");
		} 
		
		if (isEmail($("#email").val()) == false ) {
			alert("tu email no es valido")
		}

	});
})