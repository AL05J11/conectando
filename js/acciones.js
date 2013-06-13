// JavaScript Document
function LoginConectar (U,P)
{
	datos="usuario="+U+"&password="+P;
	$.ajax({
		type:"POST",
		url:"http://192.168.1.193/Sitio6/Log_in_m.php",
		data:datos
	}).done(function(msg){
		alert(msg);
		if(msg=="" || msg==null)
		 {
			 alert("usuario incorrecto");}
			 else
			 {alert("Bienvenido");}
	});//function msg
	}
$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		$('.Enviar').tap(function(){
			var formulario=$(this).parents('form');
			var usuario=document.getElementById('Usuario').value;
			var password=document.getElementById('Password').value;
			//var usuario=formulario.children('input:eq(0)').val();
			//var password=formulario.children('input:eq(1)').val();
			LoginConectar(usuario,password);//cuando el dispositivo esta listo y saber cuando le dieron tap  al la clase enviary en la var formulario y en input 0 usuario y input1 passwprd y esos dos datos los voy a mandar a login conectar se va a conectar al servidor y me va a regresar una respuesta
		});//tap
	});//deviceready
	});//ready
