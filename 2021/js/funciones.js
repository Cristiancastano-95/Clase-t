/******************************************************************inicio funciones perfil-usuario.html**************************************/ 
function menu() {
      var btnmenu =document.getElementById("container-menu");
      
      if (btnmenu.style.right=="100%"){
        btnmenu.style.right="30%";
      }
      else{
          btnmenu.style.right="100%";
          
      }
};


function comunicaciones() {
   var recurso=document.getElementById("menu-recursos");
   var lista =document.getElementById("lista-comunicaciones");
  if(lista.style.display=="none"){
    lista.style.display="inline";
    recurso.style.marginTop="80px";
  }
  else{
    lista.style.display="none";
    recurso.style.marginTop="0px";
  }
};

/******************************************************************fin funciones perfil-usuario.html**************************************/ 
/******************************************************************inicio funciones home.html**************************************/
function sublista() {
  var btnlista =document.getElementById("sub-lista");
 
  if (btnlista.style.display=="none"){
    btnlista.style.display="block";
  }
  else{
      btnlista.style.display="none";
      
  }
};
function sublista2() {
  var btnlista2 =document.getElementById("sub-lista2");
  
  if (btnlista2.style.display=="none"){
    btnlista2.style.display="block";
  }
  else{
      btnlista2.style.display="none";
      
  }
};
function sublista3() {
  var btnlista3 =document.getElementById("sub-lista3");
  
  if (btnlista3.style.display=="none"){
    btnlista3.style.display="block";
  }
  else{
    btnlista3.style.display="none";
      
  }
};
function sublista4() {
  var btnlista4 =document.getElementById("sub-lista4");
  
  if (btnlista4.style.display=="none"){
    btnlista4.style.display="block";
  }
  else{
      btnlista4.style.display="none";
      
  }
};


/******************************************************************fin funciones home.html**************************************/
/******************************************************************inicio video.html**************************************/
function pasarFoto() {
  const VIDEOS = [
    'doc/video.mp4',
    'doc/video2.mp4'
  ];
  var posicionActual = 0;
  
    if(posicionActual >= VIDEOS.length - 1) {
        posicionActual = 0;
    } else {
        posicionActual++;
    }
    document.getElementById("video").src = VIDEOS[posicionActual];
    return posicionActual;
}


function retrocederFoto() {
  const VIDEOS = [
    'doc/video.mp4',
    'doc/video2.mp4'
  ];
  var posicionActual = pasarFoto();

  if(posicionActual <= 0) {
    posicionActual = VIDEOS.length - 1;
} else {
    posicionActual--;
}
    document.getElementById("video").src = VIDEOS[posicionActual];
}