/*const carouselImages = document.querySelector('.carouselimages');
const carouselButtons = document.querySelectorAll('.carouselbutton');
const numberOfImages = document.querySelectorAll('.carousel__images img').length;
let imageIndex = 1;
let translateX = 0;

carouselButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous') {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 300;
      }
    } else {
      if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX -= 300;
      }
    }

    carouselImages.style.transform = 'translateX(${translateX}px)';
  });
});

/*
const carouselImages = document.querySelector('.carousel__images');
const carouselButtons = document.querySelectorAll('.carouselbutton');
const numberOfImages = document.querySelectorAll('.carousel__images img').length;
let imageIndex = 1;
let translateX = 0;

carouselButtons.forEach(button => {
  button.addEventListener('event', (event) => {
    if (event.target.id === 'previous') {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 300;
      }
    } else {
      if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX -= 300;
      }
    }
    carouselImages.getElementsByClassName.transform = 'translateX(${translateX}px)';
  });
});


const buttons = document.querySelector("[data-carousel-button]")
buttons.forEach(button => {
button.addEvenetListener("click",function(){
 const offset = button.dataset.carouselButton === "next" ? 1 : -1
 const slides = button.closest("[data-carousel]").querySelector('[data-slides]')

 const activeSlide = slides.querySelector("[data-active");
 let newIndex = [...slides.children].indexOf(activeSlide) + offset;
 if(newIndex < 0) newIndex = slides.children.length -1
 
 if(newIndex >= slides.children.length) newIndex=0


 slides.children[newIndex].dataset.active = true
 delete activeSlide.dataset.active
})
})

///code ghassen
const carouselImages = document.querySelector('.carousel__images');
const images = document.querySelectorAll('.carousel__images img');
const carouselButtons = document.querySelectorAll('.carousel__button');
const numberOfImages = document.querySelectorAll('.carousel__images img').length;
let imageIndex = 3;
let translateX = 1;

carouselButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous') {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 500;
      }
    } else {
      if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX -= 500;
      }
    }

    carouselImages.style.transform = `translateX(${translateX}px)`;
    images.forEach((image, index) => {
      if (index === imageIndex - 1) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  });
});
*/


var g = document.getElementById("g");
var d = document.getElementById("d");
var nbr = 3;
var p = 0;
document.body.onload = function () {
  const container = document.getElementById("container");
  container.style.width = (1200 * nbr) + "px";
  for (let i = 1; i <= nbr; i++) {
    const div = document.createElement("div");
    div.className = "photo";
    div.style.backgroundImage = "url('images/antique" + i + ".jpg')";
    container.appendChild(div);
  };

  g.onclick = function () {
    if (p > -nbr + 1) {

      p--;
      container.style.transform = "translate(" + p * 1200 + "px)";
    }
  }


  d.onclick = function () {
    if (p < nbr) {
      p++;
      container.style.transform = "translate(" + p * 1200 + "px)";
    }
  }
}
