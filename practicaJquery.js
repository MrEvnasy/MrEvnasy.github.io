$(document).ready(function(){

	$("#titulo").click(function(){
		$(this).hide()
	});

	$("#boton").click(function() {
		$("#e1").fadeToggle(20);
		$("#e2").fadeToggle("slow");
		$("#e3").fadeToggle();

		$("#e1").fadeTo("slow", 1);
		$("#e2").fadeTo("slow", 1);
		$("#e3").fadeTo("slow", 1);
	});

	$("#lista").click(function(){
		$("#contenido").slideToggle("slow");

	});

});