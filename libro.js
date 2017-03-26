var comentario = "";

function comentar(){
  comentario = document.getElementById("cajaDeTexto").value;
  document.getElementById("mostrar").value = comentario;
}
function tamanioTexto(){
  

  if(document.getElementById("grande")){
  document.getElementById("mostrar").style.fontSize =50 + "pt";
  }
  else if(document.getElementById("mediano")){
  document.getElementById("mostrar").style.fontSize =20 + "pt";
  }
}

function color(){
  console.log("comentario");
}

function alineacion(){
  console.log("comentario");
}
