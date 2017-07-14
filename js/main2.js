
$(document).ready(function(){

	$("#home").click(function(e){
			e.preventDefault();
			window.location = "index2.html";
		});

	$("#perfil").click(function(e){
			e.preventDefault();
			window.location = "index3.html";
		});
//linkea el menu
	$("#uneperfil").click(function(e){
			e.preventDefault();
			window.location = "index3.html";
		});

	$("#preguntas").click(function(e){
			e.preventDefault();
			window.location = "index4.html";
		});
//link desde el menu
	$("#press").click(function(e){
			e.preventDefault();
			window.location = "index4.html";
		});
//link menu saldo

	$("#saldomenu").click(function(e){
			e.preventDefault();
			window.location = "index5.html";
		});

//funcion para imprimir tarjetas
	$("#agregar").click(function(e){
		localStorage.tarjetas = $("#tarjetas").val();

	$("#guardatarjetas").append('<p class="imprime">'+localStorage.tarjetas+'</p>');
	});

//FUNCION PARA IMPRIMIR SALDO
$("#saldo").click(function(e){
		localStorage.tarjetas = $("#tarjeta2").val();

	$("#guardatarjetas2").append('<p class="imprime">'+localStorage.tarjetas+'</p>');
	});

});

//CALCULAR SALDO