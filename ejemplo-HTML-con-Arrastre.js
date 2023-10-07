// JavaScript Document

var elemOrigen;
var elemDestino;

function comenzar(){
	elemOrigen = document.getElementById("imagen");
	elemOrigen.addEventListener("dragstart", comienzoArrastrar, false)
	
	elemDestino = document.getElementById("zonaDestino");
	elemDestino.addEventListener("dragover", function(e){
													e.preventDefault();
												},
											false);
	elemDestino.addEventListener("drop", soltado, false);
	elemOrigen.addEventListener("dragend", terminado, false);
	elemDestino.addEventListener("dragenter", entrando,	false);
	elemDestino.addEventListener("dragleave", saliendo,	false);
}

function comienzoArrastrar(e){ // e: contiene el objeto, drag, que desencadenó el evento
	var codigo = "<img src = '" + elemOrigen.getAttribute("src") + " '>"; /* codigo: contiene la ruta
																					de la imagen*/
	
	e.dataTransfer.setData("Text", codigo);
}

function soltado(e){
	e.preventDefault();
	
	elemDestino.innerHTML = e.dataTransfer.getData("Text");	
	/* innerHTML: es una variable que contiene el codigo HTML que se le asigna*/
																			
}

function terminado(e){
	var elemento = e.target;
	elemento.style.visibility = "hidden";
}

function entrando(e){
	e.preventDefault();		// preventDefault: resetea el comportamiento del navegador
	elemDestino.style.background = "green";
}

function saliendo(e){
	e.preventDefault();
	elemDestino.style.background = "white";
}

window.addEventListener("load", comenzar, false)
