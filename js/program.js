this.logueado = false;

$("#entrar").click(function(){
	if($("#usuario").val() == "Admin" && $("#contrasena").val() == '123'){
	 logueado = true;
	 if (logueado =true) {
	 	window.location = "./pages/inicio.html"
	   }
	}else{
		swal.fire('Error');
	}
});

$("#Galeria").click(function(){
	window.location = "./Galeria.html"

});

$("#Salir").click(function(){
	window.location = "../index.html"
});

window.addEventListener('load',function(){
	$('.container').fadeIn(1000);
});

$("#Regresar").click(function(){
	window.location = "./inicio.html"
});

$("#PDF").click(function(){
	window.location = "./PDF.html"
});

$("#prueba").click(function(){
	window.location = "./prueba.html"
});

