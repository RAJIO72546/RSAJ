let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    dots[i].className = "dot";
  }
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1
  }   
 
  for (i = 0; i < dots.length; i++) {
   
    slides[slideIndex-1].style.display ='block';  
    dots[slideIndex-1].className = "dot ok";
  }

  setTimeout(showSlides, 2000); 
}