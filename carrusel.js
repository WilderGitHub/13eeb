let slideIndex = 0;
let imagenes = [
  { indice: 1, descripcion: "bonito oe" },
  { indice: 2, descripcion: "esto2" },
  { indice: 3, descripcion: "tres" },
  { indice: 4, descripcion: "tres" },
  { indice: 5, descripcion: "tres" },
  { indice: 6, descripcion: "tres" },
  { indice: 7, descripcion: "tres" },
  { indice: 8, descripcion: "tres" },
  { indice: 9, descripcion: "tres" },
  { indice: 10, descripcion: "tres" },
  { indice: 11, descripcion: "tres" },
  { indice: 12, descripcion: "tres" },
  { indice: 13, descripcion: "tres" },
  { indice: 14, descripcion: "tres" },
  { indice: 15, descripcion: "tres" },
  { indice: 16, descripcion: "tres" },
  { indice: 17, descripcion: "tres" },
  { indice: 18, descripcion: "tres" },
  { indice: 19, descripcion: "tres" },
  { indice: 20, descripcion: "tres" },
  { indice: 21, descripcion: "tres" },
  { indice: 22, descripcion: "tres" },
];

for (i in imagenes) {
  let slides = document.getElementById("slideshow-container");
  let miDiv = document.createElement("div");
  slides.appendChild(miDiv);
  miDiv.setAttribute("class", "mySlides fade");
  miDiv.setAttribute("display", "none");
  miDiv.setAttribute("id", i);
  let slidess = document.getElementById(i);
  let miImg = document.createElement("img");
  slidess.appendChild(miImg);
  miImg.setAttribute("class", "redondo");
  miImg.setAttribute("src", `fotos/${imagenes[i].indice}.jpg`);
}
showSlides();
function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < imagenes.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > imagenes.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
