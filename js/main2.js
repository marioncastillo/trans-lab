//linkea

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
//saldo
	$("#saldo").click(function(e){
			e.preventDefault();
			window.location = "index5.html";
		});
//link menu saldo
	$("#saldomenu").click(function(e){
			e.preventDefault();
			window.location = "index5.html";
		});

//link  calculo
	$("#tarifa").click(function(e){
			e.preventDefault();
			window.location = "index6.html";
		})
//link menu calculo
	$("#menucalculo").click(function(e){
			e.preventDefault();
			window.location = "index6.html";
		})

//funcion para imprimir tarjetas
var tarjetas = $("#tarjetas").val();
	$("#agregar").click(function(e){
		localStorage.tarjetas = $("#tarjetas").val();

	$("#guardatarjetas").append('<p class="imprime">'+localStorage.tarjetas+'</p>');
	});

//FUNCION PARA IMPRIMIR SALDO

  $(document).ready(function(){
	$("#saldo2").on("click", function(){
		var ultimoSaldo = $("#tarjeta2").val();
    $.ajax({
            url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + ultimoSaldo, 
            type: 'GET',
            datatype: 'JSON',
            
        })

        .done(function(response){
        	$("#muestrasaldo").append('<div id="saldito">'+ response.saldoTarjeta +'</div>')
            console.log(response.saldoTarjeta);
        })

        .fail(function(error){
            console.log("error");
        })
    });
	})