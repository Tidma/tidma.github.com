
//obtener los elementos de la clase .close

let links = document.querySelectorAll(".close");
//Recorreslos
links.forEach(function(link){

    // Agregar un evento click a cada uno de ellos
    links.addEventListener("Click",function(ev){
      ev.preventDefault();
      let content = document.querySelector('.content');

      //quitarle las clases de animacion  que ya addEventListener
      content.classList.remove("fadeInDown");
      content.classList.remove("animated");

      //Agregar clases para animar su salida fadeOutUp
      content.classList.add("fadeOutUp");
      content.classList.add("animated");

      setTimeout(function(){
      location.href = "/boletines";
      },600);

    return false;

  });
});
