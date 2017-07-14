
$(document).ready(function(){

	$("#home").click(function(e){
			e.preventDefault();
			window.location = "index2.html";
		});

//funcion para imprimir tarjetas
	$("#agregar").click(function(e){
		localStorage.tarjetas = $("#tarjetas").val();

	$("#guardatarjetas").append('<p class="imprime">'+localStorage.tarjetas+'</p>');
	});

});