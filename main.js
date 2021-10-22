const openHamburger = document.querySelector(".hamburger-menu");
const showOn = document.querySelector("i.fas.fa-bars");
const showOff = document.querySelector(".close");


console.log(openHamburger);
console.log(showOn);
console.log(showOff);


showOn.addEventListener('click', function(){
  openHamburger.classList.add('active');
});
showOff.addEventListener('click', function(){
  openHamburger.classList.remove('active');
});